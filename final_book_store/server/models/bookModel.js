import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  bookPdfUrl: {
    type: String,
    default: null
  }
});

export const Book = mongoose.model.book || mongoose.model('book', bookSchema);

