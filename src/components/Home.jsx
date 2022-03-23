import React from "react";
import sparklinGrilledCheese from "../assets/sparklinGrilledCheese.gif";

const Home = () => {
  return (
    <>
      <div className="home">
        <h2>Welcome to Grilled Cheese Channel!</h2>
        <h3>
          Take a look around and get ready to make the best grilled cheese ever!
        </h3>
        <img src={sparklinGrilledCheese} width="500" alt="" />
      </div>
    </>
  );
};

export default Home;
