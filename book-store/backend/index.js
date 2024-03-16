import express, { request, response } from "express";
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
        
    }catch (error) {
        console.log(error.message);
        return response.status(500).send({message:error.message})
    }

})

// get all books from db
app.get('/books',async(request,response)=>{
    try {
        const books = await Book.find({})
        return response.status(200).json({
            count: books.length,
            data:books
        })
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message:error.message})
    }
})

//get one particular book
app.get('/books/:id',async(request,response)=>{
    try {
        const {id}= request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book)
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message:error.message})
    }
})

//to update
app.put('/books/:id',async (request,response)=>{
    try {
        if(!request.body.title || !request.body.author || !request.body.publishYear){
            return response.status(400).send({
                message:'send all field'
            })
        }
        const {id} = request.params;
        const result = await Book.findByIdAndUpdate(id,request.body)
        if(!result){
            return response.status(500).send({message:'book not found'})
        }
        return response.status(200).send({message: 'book updated successfully'})
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message:error.message})
    }
})

//delte somthing
app.delete('/books/:id',async(request,response)=>{
    try {
        const {id}= request.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return response.status(500).send({message:'book not found'})
        }
        return response.status(200).send({message: 'book deleted successfully'})
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message:error.message})
    }

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