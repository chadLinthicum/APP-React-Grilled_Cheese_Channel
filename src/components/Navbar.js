import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="nav-main">
        <h1 className="nav-main-title">Grilled Cheese Channel</h1>
      </nav>
      <nav className="nav-sub">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/checklist">Checklist</Link>
          </li>
          <li>
            <Link to="/slideshow">Slideshow</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
