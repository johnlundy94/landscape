import { useState } from "react";
import "../styles/Nav.css";
import { Link } from "react-scroll";
import Hamburger from "../assets/hamburger.svg";

function Nav() {
  const [expand, setExpand] = useState(false);

  return (
    <div className="Nav">
      <div className="brand-logo">Logo</div>
      <div className="hamburger" onClick={() => setExpand(!expand)}>
        <img src={Hamburger} alt="Menu" />
      </div>
      <div className={`nav-buttons ${expand ? "expanded" : ""}`}>
        <Link to="hero" smooth={true} duration={1000} className="link">
          Home
        </Link>
        <Link to="gallery" smooth={true} duration={1000} className="link">
          Gallery
        </Link>
        <Link to="services" smooth={true} duration={1000} className="link">
          Services
        </Link>
        <Link to="about" smooth={true} duration={1000} className="link">
          About
        </Link>
        <Link to="testimonials" smooth={true} duration={1000} className="link">
          Testimonials
        </Link>
        <Link to="contact" smooth={true} duration={1000} className="link">
          Contact
        </Link>
        <Link to="calculator" smooth={true} duration={1000} className="link">
          Calculator
        </Link>
      </div>
    </div>
  );
}

export default Nav;
