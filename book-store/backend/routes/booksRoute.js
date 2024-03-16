import express from "express";
import { Book } from "../models/bookModel.js";

const router=express.Router();

// to post or save a new book
router.post('/',async(request,response)=>{
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
router.get('/',async(request,response)=>{
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
router.get('/:id',async(request,response)=>{
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
router.put('/:id',async (request,response)=>{
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
router.delete('/:id',async(request,response)=>{
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

export default router;