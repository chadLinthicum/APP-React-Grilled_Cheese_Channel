import React from "react";
import "../styles/slideshow.css";
import { SlideshowData } from "./SlideshowData";

const Slideshow = () => {
  return (
    <div className="slideshow">
      {SlideshowData.map((slide, index) => {
        return <img src={slide.image} alt="grilled cheese" />;
      })}
    </div>
  );
};

export default Slideshow;

/* <section aria-label="Photos">
  <div className="carousel">
    <button className="carousel-btn">&#8592;</button>
    <button className="carousel-btn">&#8594;</button>
    <ul>
      <li className="slide">
        <img src={firstA} alt="pan_off" />
        <img src={firstB} alt="pan_on" />
        <img src={second} alt="butter_bread" />
        <img src={thirdA} alt="bread_in_pan" />
        <img src={thirdB} alt="cheese_on_bread" />
        <img src={fourth} alt="buttered_bread" />
        <img src={fifth} alt="flip" />
        <img src={sixth} alt="melted_cheese" />
      </li>
    </ul>
  </div>
</section>; */
