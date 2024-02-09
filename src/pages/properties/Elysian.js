import { useState } from "react";
import "./Properties.css";
import SlideComponent from "../../api/SlideComponent";
import elysian1 from "../../assets/elysian/elysian1.png";
import elysian2 from "../../assets/elysian/elysian2.png";
import elysian3 from "../../assets/elysian/elysian3.png";
import elysian4 from "../../assets/elysian/elysian4.png";
import elysian5 from "../../assets/elysian/elysian5.png";
import { Button } from "@mui/material";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";



function Elysian() {

  const [activeIndex, setActiveIndex] = useState(0);

  const properties = [
    { image: elysian1 },
    { image: elysian2 },
    { image: elysian3 },
    { image: elysian4 },
    { image: elysian5 },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="properties-container">
      <Nav />
      <div className="hero-container">
        <h1 className="text-span-2">Elysian Fields</h1>
        <div className="slider-container" id="properties" >
          {properties.map((property, index) => (
            <SlideComponent className="slider" isActive={activeIndex === index} direction="left">
              <img src={property.image} alt={`Slide image ${index + 1}`} className="slider-image" />
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

export default Elysian;