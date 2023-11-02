import express from "express";
import { PORT, mongoDB_URL } from '../backend/config.js';
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();

//MIDDLEWARE FOR PARSING REQUEST BODY OF THE DATA
app.use(express.json());

//MIDDLEWARE FOR HANDLING CORS POLICY
//OPTION 1: Allow all origings with default of cors(*)
// app.use(cors())
//OPTION 2: Allow custom origins
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}))

app.get('/', (request, response) => {
    console.log(request)
    return response.status(200).send('Already Connected to the Backend of MERN')
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDB_URL)
    .then(() => {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening already to port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })