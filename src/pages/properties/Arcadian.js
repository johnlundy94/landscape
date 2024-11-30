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
import PropertyDropDown from "../../components/PropertyDropDown";

function Arcadian() {
  const [activeIndex, setActiveIndex] = useState(0);

  const properties = [
    { image: arcadian1 },
    { image: arcadian2 },
    { image: arcadian3 },
    { image: arcadian4 },
    { image: arcadian5 },
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
        <PropertyDropDown />
        <h1 className="slider-title">Arcadian Retreat</h1>
        <div className="portfolio-slider-container" id="properties">
          {properties.map((property, index) => (
            <SlideComponent
              className="slider"
              isActive={activeIndex === index}
              direction="left"
            >
              <img
                src={property.image}
                alt={`Slide image ${index + 1}`}
                className="slider-image"
              />
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
        Our latest landscape project marries the rustic charm of a natural
        sanctuary with the refined beauty of a cultivated garden. We've composed
        a tableau that respects the local ecosystem while introducing elements
        of classic design. Meandering flagstone paths invite leisurely strolls
        through diverse plantings, where native species mingle with selected
        perennials for year-round color and texture. Water features, from
        babbling brooks to still ponds, serve as serene focal points, inviting
        local wildlife and providing a soothing soundtrack to the garden's
        ambience. At dusk, strategically placed lighting transforms the space
        into a nocturnal wonderland, emphasizing the silhouettes and forms of
        the diverse flora. This landscape is not just a visual feast but an
        homage to the symbiotic relationship between human touch and nature's
        hand.
      </p>
      <Footer />
    </div>
  );
}

export default Arcadian;
