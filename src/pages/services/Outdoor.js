import "./Services.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import service2 from "../../assets/service2.png";
import ServiceDropDown from "../../components/ServiceDropDown";

function Outdoor() {
  return (
    <div className="Services">
      <Nav />
      <div className="dropdown">
        <ServiceDropDown />
      </div>
      <img
        src={service2}
        alt="Outdoor Living Spaces"
        className="service-image"
      />
      <h1 className="services-title">Outdoor Living Spaces</h1>
      <p className="services-text">
        Transforming your backyard into a serene outdoor living space is an
        investment in lifestyle and home value. We specialize in creating
        bespoke outdoor environments that invite relaxation and entertainment.
        Our designs extend your living area into the open air, incorporating
        elements such as elegant patios, outdoor kitchens, cozy fire pits, and
        tranquil water features. Each project is tailored to reflect your
        personal style and to complement the natural landscape, providing a
        private retreat for you and your family to unwind, entertain, and create
        lasting memories in the comfort of your own backyard.
      </p>
      <Footer />
    </div>
  );
}

export default Outdoor;
