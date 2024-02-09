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
      <h1 className="property-title">Project Overview</h1>
      <p className="property-text">
      For our clients desiring a touch of elegance and symmetry, we meticulously designed formal landscape projects that embody precision and grace. By leveraging the natural contours of the land, we sculpted spaces that reflect the classic beauty of formal gardens. Our approach included the strategic placement of geometrically arranged flora, complemented by the serene ambiance of central water fountains and ornate sculptures. Pathways of finely cut stone guided visitors through the garden, enhancing the sense of order and harmony. To further accentuate the beauty of these spaces after sundown, we integrated sophisticated landscape lighting, casting soft glows that outline the garden's architecture. The selection of plants was paramount, with an emphasis on traditional elements like boxwoods, manicured lawns, and seasonal blooms, such as tulips and peonies, to ensure year-round allure. This careful curation and design foster a timeless elegance that invites tranquility and reflection.
      </p>
      <Footer />
    </div>
  );
}

export default Elysian;