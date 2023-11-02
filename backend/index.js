import express from "express";
import { PORT, mongoDB_URL } from '../backend/config.js';
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'

const app = express();

//MIDDLEWARE FOR PARSING REQUEST BODY OF THE DATA
app.use(express.json());

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