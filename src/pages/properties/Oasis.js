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
      <h1 className="property-title">Project Overview</h1>
      <p className="property-text">
      In our contemporary landscape projects, clients sought modernity fused with functionality, leading to the creation of spaces that celebrate minimalism and innovation. These landscapes are characterized by their clean lines, sustainable materials, and a palette that compliments the urban environment. We focused on creating versatile outdoor living areas that serve as extensions of the home, incorporating elements like sleek fire pits, outdoor kitchens, and serene water features, all designed to foster social gatherings and personal relaxation. The use of drought-resistant plantings and environmentally friendly water management systems underscored our commitment to sustainability. Lighting played a critical role in these designs, with strategically placed fixtures that highlight the architectural features and plants, creating a dynamic visual experience that evolves from day to night. Our plant selection was intentionally minimalist, favoring architectural plants that provide structure and texture, enhancing the contemporary aesthetic.
      </p>
      <Footer />
    </div>
  );
}

export default Oasis;