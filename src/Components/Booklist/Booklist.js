import React from 'react';
import { useGlobalContext } from '../../Context';
import Book from "../Booklist/Book";
import Loading from "../Loader/Loader";
import "./Booklist.css";

function selectOne(array) {
  if (array.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const BookList = ({ addToCart }) => {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : ''
    }
  });

  if (loading) return <Loading />;
 
  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key={index} book={{ ...item, price: selectOne([25, 50, 50, 150]) }} addToCart={addToCart} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList