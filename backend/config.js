import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;

export const mongoDB_URL = process.env.mongoDB_URL;
