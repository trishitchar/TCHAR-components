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
        console.log(data.result); // Log the 'result' array from the fetched data
        setBooks(data.result); // Update the state with the fetched books data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <BookCards books={books}/>
    </div>
  );
};

export default FavouriteBook;
