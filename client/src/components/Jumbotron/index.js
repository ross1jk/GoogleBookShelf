import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 id="title" className="display-4">Google Book Shelf</h1>
      <p id="jumbopara" className="lead">Search for and Save Books of the Internet</p>
    </div>
  </div>
  );
}

export default Jumbotron;