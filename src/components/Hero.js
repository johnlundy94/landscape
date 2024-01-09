import "../styles/Hero.css";
import landscape1 from "../assets/landscape1.png";
import landscape2 from "../assets/landscape2.png";
import landscape3 from "../assets/landscape3.png";
import landscape4 from "../assets/landscape4.png";
import landscape5 from "../assets/landscape5.png";

function Hero() {
  return (
    <div className="hero-container">
      <img src={landscape1} alt="First" className="image-one row-span-2" />
      <img src={landscape2} alt="Second" className="image-two col-2-row-2" />
      <img src={landscape3} alt="Third" className="image-three col-1-row-3" />
      <img src={landscape4} alt="Fourth" className="image-four col-2-row-3" />
      <img src={landscape5} alt="Fifth" className="image-five col-1-row-2" />
      <h1 className="text-span-2">Collect your best articles easily</h1>
      <p className="sub-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
        maecenas pharetra convallis. Eget mi proin sed libero enim sed faucibus.
        Enim facilisis gravida neque convallis a cras semper auctor.
      </p>
    </div>
  );
}

export default Hero;
