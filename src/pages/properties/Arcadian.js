import { useState } from "react";
import "./Properties.css";
import SlideComponent from "../../api/SlideComponent";
import arcadian1 from "../../assets/arcadian/arcadian1.png";
import arcadian2 from "../../assets/arcadian/arcadian2.png";
import arcadian3 from "../../assets/arcadian/arcadian3.png";
import arcadian4 from "../../assets/arcadian/arcadian4.png";
import arcadian5 from "../../assets/arcadian/arcadian5.png";
import { Button } from "@mui/material";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";



function Arcadian() {

  const [activeIndex, setActiveIndex] = useState(0);

  const landscapes = [
    {image: arcadian1},
    {image: arcadian2},
    {image: arcadian3},
    {image: arcadian4},
    {image: arcadian5},
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
    <div className="properties-container">
            <Nav />
<div className="hero-container">
      <h1 className="text-span-2">Arcadian Retreat</h1>
      <div className="slider-container" id="properties" >
        {landscapes.map((landscape, index) => (
          <SlideComponent className="slider" isActive={activeIndex === index} direction="left">
            <img src={landscape.image} alt={`Slide image ${index + 1}`} className="slider-image" />
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
    <Footer />
    </div>
  );
}

export default Arcadian;