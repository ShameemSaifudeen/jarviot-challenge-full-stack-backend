import express from 'express';
import User from '../model/db.js';
import oauth2Client, { drive } from '../instance.js';

const router = express.Router();

router.get('/auth', (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/drive.readonly'],
    });
    res.redirect(authUrl);
});

router.get('/oauth2callback', async (req, res) => {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    const user = new User({ tokens });
    await user.save();
    res.redirect(`http://localhost:5173`);
});

router.get('/revoke/:token', async (req, res) => {
    let token = req.params.token
    const user = await User.findOne({ 'tokens.access_token': token });
    if (!user) {
        return res.status(401).json({ message: 'User not authenticated' });
    }
    oauth2Client.setCredentials(user.tokens);
    try {
        await User.deleteOne({ 'tokens.access_token': token });
        await oauth2Client.revokeCredentials();
        res.json({ message: 'Access revoked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to revoke access', error });
    }
});

router.get('/drive', async (req, res) => {
    const user = await User.findOne();

    if (!user) {
        return res.status(401).json({ message: 'User not authenticated' });
    }
    let token = user.tokens.access_token
    oauth2Client.setCredentials(user.tokens);

    const driveData = await drive.files.list({
        auth: oauth2Client,
        fields: 'files(id, name, mimeType, size, webViewLink, permissions)',
    });

    let totalSize = 0;
    let publicFiles = [];
    let externallySharedFiles = [];
    let peopleWithAccess = {};

    driveData.data.files.forEach(file => {
        totalSize += Number(file.size) || 0;
        if (file.permissions && file.permissions.length > 0) {
            file.permissions.forEach(permission => {
                if (permission.type === 'anyone') {
                    publicFiles.push(file);
                }
                if (permission.type === 'user') {
                    externallySharedFiles.push(file);
                    const emailAddress = permission.emailAddress;
                    if (emailAddress) {
                        if (!peopleWithAccess[emailAddress]) {
                            peopleWithAccess[emailAddress] = [];
                        }
                        peopleWithAccess[emailAddress].push(file);
                    }
                }
            });
        }
    });
    const riskCounter = publicFiles.length + externallySharedFiles.length + Object.keys(peopleWithAccess).length;
    res.json({
        files: driveData.data.files,
        totalSize,
        publicFiles,
        externallySharedFiles,
        peopleWithAccess,
        riskCounter,
        token
    });
});

export default router;
