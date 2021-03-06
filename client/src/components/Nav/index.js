import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg">
      <h1 id="navTitle" className="navbar-brand">
        Google Book Shelf
      </h1>
      <Link id="link" to="/search" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} >
        Search Books
      </Link>
      <Link id="link"
        to="/saved"
        className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
        Saved Books
      </Link>
    </nav>
  );
}

export default Nav;