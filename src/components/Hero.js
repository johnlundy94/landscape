import "../styles/Hero.css";
import landscape1 from "../assets/landscape1.png";
import landscape2 from "../assets/landscape2.png";
import landscape3 from "../assets/landscape3.png";
import landscape4 from "../assets/landscape4.png";
import landscape5 from "../assets/landscape5.png";

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="text-span-2">Collect your best articles easily</h1>
      <div className="slider">
        <img src={landscape1} alt="First" className="image-one" />
        <img src={landscape2} alt="Second" className="image-two" />
        <img src={landscape3} alt="Third" className="image-three" />
        <img src={landscape4} alt="Fourth" className="image-four" />
        <img src={landscape5} alt="Fifth" className="image-five" />
      </div>
    </div>
  );
}

export default Hero;
