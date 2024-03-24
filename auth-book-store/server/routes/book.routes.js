import express from 'express';
import Book from '../models/bookModel.js';
import { authenticateToken } from '../middleware/auth.middleware.js';

const router = express.Router();

// Get all books
router.get('/', authenticateToken, async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Add a new book
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    const newBook = new Book({ title, author, publishYear });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Update a book
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, publishYear },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Delete a book
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;