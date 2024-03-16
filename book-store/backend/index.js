import express from "express";
import { PORT,MONGODB_URL } from "./config.js";
import mongoose from 'mongoose'
import cors from 'cors'
import { Book } from "./models/bookModel.js";

const app = express()
//middleware for pursing request body
app.use(express.json());
app.use(cors());

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('welcome')
})

app.post('/books',async(request,response)=>{
    try{
        if(!request.body.title || !request.body.author || !request.body.publishYear){
            return response.status(400).send({
                message: 'fill up all the required field'
            })
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        };
        const book = await Book.create(newBook)

        return response.status(201).send(book)
        
    }catch(e){
        console.log(e.message);
        return response.status(500).send({message:e.message})
    }

})

app.get('/books',(request,response)=>{

})


mongoose.connect(MONGODB_URL)
    .then(()=>{
        console.log('app is connected to the db')
        app.listen(PORT,()=>{
            console.log(`server is runnig on port ${PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error)
    })