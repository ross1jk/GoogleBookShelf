import axios from "axios";

let googleurl= "https://www.googleapis.com/books/v1/volumes?q="

export default {
  // Gets all books
  getBooks: function() {
    return axios.get(googleurl + "harrypotter");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
