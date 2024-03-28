import React, { useEffect, useState } from 'react';
import BookCards from '../components/BookCards';

const FavouriteBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/books/all-books");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBooks(data.result); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    
    <div>
      <BookCards books={books} headline="Best seller book"/>
    </div>
  );
};

export default FavouriteBook;
