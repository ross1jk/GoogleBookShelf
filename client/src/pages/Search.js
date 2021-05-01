import React, { useState, useEffect } from "react";
import Searchform from "../components/Searchform";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import BookCard from "../components/Bookcard";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

    // Loads all books and sets them to books
    function loadBooks() {
      API.googleBooks()
        .then(res =>
          setBooks(res.data.items)
        )
        .catch(err => console.log(err));
    };
  // const [bookSearch, setFormObject] = useState({})

  // function handleInputChange(event) {
  //   const { value } = event.target;
  //   setFormObject(value)
  // };

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //     API.getBooks(books)
  //       .then(res => setBooks())
  //       .catch(err => console.log(err));
  // };

  return (
    <Container fluid>
      <Row>
        <Col size="12">
          <Searchform
           
          />
        </Col>
      </Row>
      {books.length ? (
        <div>
          {books.map(book => (
            <BookCard
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.smallThumbnail}
              link={book.selfLink}
              action={"Add"}
              id={book.id}
            />
          ))}

        </div>
      ) : (
        <h2>
          Look Something Up!
        </h2>)}
    </Container>
  );
}


export default Search;
