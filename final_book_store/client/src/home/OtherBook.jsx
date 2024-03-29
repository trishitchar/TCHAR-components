import React,{useState,useEffect} from 'react'
import BookCards from '../components/BookCards';

const OtherBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:5000/books/all-books");
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setBooks(data.result.slice(1,10)); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
  return (
    <div>
        <BookCards books={books} headline="Other Book"/>
    </div>
  )
}

export default OtherBook