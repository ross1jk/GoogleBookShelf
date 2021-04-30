import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <h1 className="navbar-brand">
        Google Book Shelf
      </h1>
      <Link to="/search" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} >
        Search Books
      </Link>
      <Link
        to="/saved"
        className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
        Saved Books
      </Link>
    </nav>
  );
}

export default Nav;