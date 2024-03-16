import express from "express";
import { PORT, MONGODB_URL } from "./config.js";
import mongoose from 'mongoose'
import cors from 'cors'
import booksRoute from './routes/booksRoute.js'

const app = express()

// Middleware for parsing request body
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('welcome')
})

// Mounting the booksRoute router without prefix
app.use('/books',booksRoute);

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('app is connected to the db')
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error)
    })
