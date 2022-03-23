import React from "react";
// import stockImage from "../assets/stockImage.png";

const Navbar = () => {
  return (
    <>
      <nav className="nav-main">
        {/* <img src={stockImage} width="75" alt="" /> */}
        <h1>Grilled Cheese Channel</h1>
      </nav>
      <nav className="nav-sub">
        {/* <img src={stockImage} width="75" alt="" /> */}
        <button className="nav-buttons" id="nav-sub-home">
          Home
        </button>
        <button className="nav-buttons" id="nav-sub-checklist">
          Checklist
        </button>
        <button className="nav-buttons" id="nav-sub-slideshow">
          Slideshow
        </button>
        <button className="nav-buttons-game" id="nav-sub-game">
          Game
        </button>
      </nav>
    </>
  );
};

export default Navbar;
