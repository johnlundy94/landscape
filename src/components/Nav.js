import "../styles/Nav.css";
import { Link } from "react-scroll";

function Nav() {
  return (
    <div className="Nav">
      <div className="brand-logo">Logo</div>
      <div className="nav-buttons">
        <Link to="hero" smooth={true} duration={1000}>
          Home
        </Link>
        <Link to="gallery" smooth={true} duration={1000}>
          Gallery
        </Link>
        <Link to="services" smooth={true} duration={1000}>
          Services
        </Link>
        <Link to="about" smooth={true} duration={1000}>
          About
        </Link>
        <Link to="testimonials" smooth={true} duration={1000}>
          Testimonials
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          Contact
        </Link>
        <Link to="calculator" smooth={true} duration={1000}>
          calculator
        </Link>
      </div>
    </div>
  );
}

export default Nav;
