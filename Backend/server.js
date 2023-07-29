import express from 'express';
import cors from 'cors';
import router from './routes/route.js';
import dotenv from 'dotenv';

const app = express();
const PORT = 5000;
dotenv.config()
app.use(cors())
app.use('/', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
