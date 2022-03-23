import React from "react";
import sparklinGrilledCheese from "../assets/sparklinGrilledCheese.gif";

const Home = () => {
  return (
    <>
      <div className="home">
        <h3>Welcome to Grilled Cheese Channel!</h3>
        <h4>
          Take a look around and get ready to make the best grilled cheese ever!
        </h4>
        <img src={sparklinGrilledCheese} width="500" alt="" />
      </div>
    </>
  );
};

export default Home;
