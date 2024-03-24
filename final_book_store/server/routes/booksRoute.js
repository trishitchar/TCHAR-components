import express from "express";
import { Book } from "../models/bookModel.js";

const router= express.Router();

//to post
router.post('/upload-book',async(req,res)=>{
    try {
        const { authorName, imageUrl, category, description, title, bookPdfUrl } = req.body;
        const newBook = new Book({
            authorName,
            imageUrl,
            category,
            description,
            title,
            bookPdfUrl
        })
        await newBook.save();
        res.status(201).json({ message: 'Book uploaded successfully', data: newBook });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
})

router.get('/all-books',async(req,res)=>{
    try {
        const result = await Book.find({});
        res.send(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
})

export default router;