import { google } from 'googleapis';
import dotenv from 'dotenv'
dotenv.config()

const OAuth2 = google.auth.OAuth2;
const drive = google.drive('v3');
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectURI = process.env.REDIRECT_URI;
const oauth2Client = new OAuth2(clientID, clientSecret, redirectURI);

export default oauth2Client;
export { drive };
