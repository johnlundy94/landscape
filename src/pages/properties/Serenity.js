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
      <div className="portfolio-container">
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
      <h1 className="property-title">Project Overview</h1>
      <p className="property-text">
      Our naturalistic landscape projects cater to clients wishing to immerse themselves in a serene, nature-inspired oasis. These designs mimic the untamed beauty of the natural world, integrating native plant species to attract local wildlife and support biodiversity. By embracing the existing topography, we crafted spaces that feel both wild and welcoming, with meandering pathways leading through a tapestry of wildflowers, ornamental grasses, and native shrubs. Rain gardens and natural water features play a pivotal role, not only as focal points but also in managing stormwater sustainably. The selection of plants aimed to provide a succession of blooms, ensuring visual interest throughout the seasons while offering habitats for birds, bees, and butterflies. To enhance the sense of seclusion and peace, we utilized materials that blend seamlessly with the natural environment, such as wood, stone, and gravel. Our naturalistic landscapes are designed as a sanctuary for both people and wildlife, offering a tranquil retreat from the bustling world outside.
      </p>
      <Footer />
    </div>
  );
}

export default Serenity;