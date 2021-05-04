import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import BookCard from "../components/Bookcard";

function Books() {
  
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
          {books.length ? (
            <div>
              {books.map(book => (
                <BookCard
                  title={book.title}
                  authors={book.authors}
                  description={book.description}
                  image={book.image}
                  id={book._id}
                  key={book._id}
                  action={"Delete"}
                  link={book.link}
                  onClick={() => deleteBook(book._id)}
                />
              ))}
            </div>
          ) : (
            <h2>
              You have no shelved books!
            </h2>)}
            
           
    </Container>
    
  );
}


export default Books;
