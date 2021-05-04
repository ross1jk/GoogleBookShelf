import React from "react";
import "./style.css";

function Button({ type = "default", className, children, onClick }) {
  return (
    <button id="searchBtn" onClick={onClick} className={["btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default Button;