import { useState } from "react";
import "../styles/Hero.css";
import Slider from "./Slider";
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
      <h1 className="text-span-2">Company Name</h1>
      <div className="slider-container">
        {landscapes.map((landscape, index) => (
          <Slider
            key={index}
            inProp={activeIndex === index}
            direction="left"
            className="slider"
          >
            <img src={landscape} alt={`Slide ${index}`} />
          </Slider>
        ))}
      </div>
      <Button variant="text" onClick={prevSlide}>
        Previous
      </Button>
      <Button variant="text" onClick={nextSlide}>
        Next
      </Button>
    </div>
  );
}

export default Hero;
