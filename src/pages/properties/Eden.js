import { useState } from "react";
import "./Properties.css";
import SlideComponent from "../../api/SlideComponent";
import eden1 from "../../assets/eden/eden1.png";
import eden2 from "../../assets/eden/eden2.png";
import eden3 from "../../assets/eden/eden3.png";
import eden4 from "../../assets/eden/eden4.png";
import eden5 from "../../assets/eden/eden5.png";
import { Button } from "@mui/material";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";



function Eden() {

  const [activeIndex, setActiveIndex] = useState(0);

  const properties = [
    { image: eden1 },
    { image: eden2 },
    { image: eden3 },
    { image: eden4 },
    { image: eden5 },
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
        <h1 className="text-span-2">Eden Enclave</h1>
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

export default Eden;