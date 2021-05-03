import React, { useState } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import BookCard from "../components/Bookcard";
import Button from "../components/Button";
import Input from "../components/Input";

function Search() {

  const [books, setBooks] = useState([])
  const [bookSearch, setBookSearch] = useState("")

  function handleInputChange(event) {
    const { value } = event.target;
    setBookSearch(value);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
      API.googleBooks(bookSearch)
        .then(res => setBooks(res.data.items))
        .catch(err => console.log(err));
 };

  return (
    <Container fluid>
      <Row>
        <Col size="10">
          <Input 
          name="bookSearch"
          value={bookSearch}
          onChange={handleInputChange}
          placeholder="Search for a book!"
          />
        </Col>
        <Col size="2">
        <Button 
          onClick={handleFormSubmit}
          type="success"
          className="input-lg"
        >
        Search
        </Button>
        </Col>
      </Row>
      {!books.length ? (
        <h2>Look up a book</h2>
       ) :
        <div>
          {books.map(book => (
            <BookCard
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.smallThumbnail}
              id={book.id}
              action={"Add"}
              link={book.volumeInfo.previewLink}
            />
          ))}

        </div>
      }
    </Container>
  );
}


export default Search;
