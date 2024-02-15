import { Fragment, useEffect, useState } from "react";
import "../styles/Portfolio.css";
import SlideComponent from "../api/SlideComponent";
import landscape1 from "../assets/serenity/serenity1.png";
import landscape2 from "../assets/elysian/elysian1.png";
import landscape3 from "../assets/arcadian/arcadian1.png";
import landscape4 from "../assets/eden/eden1.png";
import landscape5 from "../assets/oasis/oasis1.png";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'


function Portfolio() {

  const [activeIndex, setActiveIndex] = useState(0);

  const landscapes = [
    {name: 'Serenity Gardens', image: landscape1, link: '/serenity'},
    {name: 'Elysian Fields',image: landscape2, link: "/elysian"},
    {name: 'Arcadian Retreat',image: landscape3, link: "/arcadian"},
    {name: 'Eden Enclave',image: landscape4, link: '/eden'},
    {name: 'Oasis Estates',image: landscape5, link: '/oasis'},
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
    <div className="portfolio-container" id="properties">
      <h1 className="text-span-2">Our Portfolio</h1>
      <div className="slider-container" >
        {landscapes.map((landscape, index) => (
          <SlideComponent className="slider" isActive={activeIndex === index} direction="left">
            <img src={landscape.image} alt={`Slide image ${index + 1}`} className="slider-image" />
            <div className="slide-text">
            {landscape.name}
              <Button
                key={index + 1}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={landscape.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {"view property"}
                </Link>
              </Button></div>
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
  );
}

export default Portfolio;