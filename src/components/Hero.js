import { Fragment, useEffect, useState } from "react";
import "../styles/Hero.css";
import SlideComponent from "../api/SlideComponent";
import landscape1 from "../assets/landscape1.png";
import landscape2 from "../assets/landscape2.png";
import landscape3 from "../assets/landscape3.png";
import landscape4 from "../assets/landscape4.png";
import landscape5 from "../assets/landscape5.png";
import { Button } from "@mui/material";

function Hero() {

  const [activeIndex, setActiveIndex] = useState(0);

  const landscapes = [
    landscape1,
    landscape2,
    landscape3,
    landscape4,
    landscape5,
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === landscapes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? landscapes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hero-container">
      <h1 className="text-span-2">Our Portfolio</h1>
      <div className="slider-container"  id="properties" >
        {landscapes.map((landscape, index) => (
          <SlideComponent className="slider" isActive={activeIndex === index} direction="left" imgSrc={landscape}>
          <div className="slide-text">This is slide {index + 1}</div>
        </SlideComponent>
        ))}
      </div>
      <div className="slider-buttons">
      <Button variant="text" onClick={prevSlide}>
        Previous
      </Button>
      <Button variant="text" onClick={nextSlide}>
        Next
      </Button>
      </div>
    </div>
  );
}

export default Hero;
