import React from "react";
// import stockImage from "../assets/stockImage.png";
/* <img src={stockImage} width="75" alt="" /> */
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav-main">
        <h1>Grilled Cheese Channel</h1>
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
