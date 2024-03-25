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
        res.status(200).json({result})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
})

//get any specific book with id
router.get('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const result =await Book.findById(id);
        if (!result) {
            return res.status(404).json({ message: 'Book not found' }); 
        }
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
})

router.get('/book-type/:category', async (req, res) => {
    try {
      const category = req.params.category;
      const result = await Book.find({ category});
      if (result.length === 0) {
        return res.status(404).json({ message: `No books found in category: ${category}` });
      }
      return res.status(200).json({ message: 'Books in category retrieved successfully', data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  });



router.put('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const { authorName, imageUrl, category, description, title, bookPdfUrl } = req.body;

        if (!authorName || !imageUrl || !category || !description || !title) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const result = await Book.findByIdAndUpdate(id,req.body);
        if(!result){
            return res.status(500).send({message:'book not found'})
        }
        return res.status(200).send({message: 'book updated successfully', data:req.body})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json({ message: 'Book deleted successfully', data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


export default router;