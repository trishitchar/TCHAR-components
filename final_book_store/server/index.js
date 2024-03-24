import express from "express";
const app = express();
import cors from 'cors';
import mongoose from 'mongoose';
import bookRoute from './routes/booksRoute.js'
import dotenv from 'dotenv'; 
dotenv.config()

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send(`Server is running on port ${PORT}`);
});

app.use('/books',bookRoute);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    });
}).catch((err )=> {
    console.error('Error connecting to MongoDB:', err.message);
});
