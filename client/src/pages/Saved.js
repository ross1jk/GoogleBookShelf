import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import BookCard from "../components/Bookcard";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  
  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res =>
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
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
                  id={book.id}
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
