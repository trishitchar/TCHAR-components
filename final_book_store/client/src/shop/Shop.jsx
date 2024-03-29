"use client";

import { Card } from "flowbite-react";
import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/books/all-books");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Fetched data:", data); 
        setBooks(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log("Books state:", books);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>ALL books are here</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-8 my-12">
        {Array.isArray(books) && books.length > 0 ? (
          books.map((book) => (
            <Card key={book._id}>
              <img src={book.imageUrl} alt={book.title} className="h-96" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {book.description}
              </p>
              <button className="bg-blue-700 font-semibold text-white py-2">Buy Now</button>
            </Card>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
