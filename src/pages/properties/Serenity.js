import { useState } from "react";
import "./Properties.css";
import SlideComponent from "../../api/SlideComponent";
import serenity1 from "../../assets/serenity/serenity1.png";
import serenity2 from "../../assets/serenity/serenity2.png";
import serenity3 from "../../assets/serenity/serenity3.png";
import serenity4 from "../../assets/serenity/serenity4.png";
import serenity5 from "../../assets/serenity/serenity5.png";
import { Button } from "@mui/material";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";



function Serenity() {

  const [activeIndex, setActiveIndex] = useState(0);

  const properties = [
    { image: serenity1 },
    { image: serenity2 },
    { image: serenity3 },
    { image: serenity4 },
    { image: serenity5 },
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
        <h1 className="text-span-2">Serenity Gardens</h1>
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

export default Serenity;