import "../styles/Hero.css";
import clipart1 from "../assets/clipart/clipart1.png"

function Hero() {
  return (
    <div className="hero-container">
        <h1 className="hero-title">Landscape Company Name</h1>
        <p className="hero-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <img src={clipart1} className="hero-image"/>
    </div>

  );
}

export default Hero;
