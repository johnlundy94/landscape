import { useState } from "react";
import "./Properties.css";
import SlideComponent from "../../api/SlideComponent";
import oasis1 from "../../assets/oasis/oasis1.png";
import oasis2 from "../../assets/oasis/oasis2.png";
import oasis3 from "../../assets/oasis/oasis3.png";
import oasis4 from "../../assets/oasis/oasis4.png";
import oasis5 from "../../assets/oasis/oasis5.png";
import { Button } from "@mui/material";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";



function Oasis() {

  const [activeIndex, setActiveIndex] = useState(0);

  const properties = [
    { image: oasis1 },
    { image: oasis2 },
    { image: oasis3 },
    { image: oasis4 },
    { image: oasis5 },
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
        <h1 className="text-span-2">Oasis Estates</h1>
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

export default Oasis;