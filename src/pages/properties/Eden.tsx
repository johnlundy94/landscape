import { FC, useState } from "react";
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
import PropertyDropDown from "../../components/PropertyDropDown";

interface Slide { image: string; }

const Eden: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const properties: Slide []= [
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
      <div className="portfolio-container">
        <div className="dropdown">
          <PropertyDropDown />
        </div>
        <h1 className="slider-title">Eden Enclave</h1>
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
        Our Urban Landscape Projects epitomize the fusion of functionality and
        sanctuary within the city's bustling confines. These designs transform
        metropolitan spaces into verdant retreats, marrying sleek architectural
        lines with the softness of natural foliage. Elevated gardens offer a
        skyline view, framed by a selection of plants that thrive in the urban
        environment, creating a secluded canopy of greenery. At ground level,
        intimate patios incorporate fire elements and comfortable seating,
        inviting relaxation amidst the whisper of ornamental grasses. Vertical
        gardens rise as living art, enhancing privacy and air quality, turning
        bare walls into lush tapestries of succulents and ferns. In these urban
        oases, water features are sculpted to mirror the city's pace, with
        gentle ripples reflecting the glow of evening lights. Our curated plant
        selection, with its succession of blooms, provides a year-long visual
        symphony, ensuring that even in the heart of the city, nature's touch is
        ever-present. Each project is a testament to our commitment to creating
        spaces where functionality meets tranquility, offering a serene escape
        within the urban landscape.
      </p>
      <Footer />
    </div>
  );
}

export default Eden;
