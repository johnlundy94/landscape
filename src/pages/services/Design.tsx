import {FC} from "react"
import "./Services.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import service1 from "../../assets/service1.png";
import ServiceDropDown from "../../components/ServiceDropDown";

const Design: FC = () => {
  return (
    <div className="Services">
      <Nav />
      <div className="padding"></div>
      <div className="dropdown">
        <ServiceDropDown />
      </div>
      <img src={service1} alt="Landscape design" className="service-image" />
      <h1 className="services-title">Landscape Design</h1>
      <p className="services-text">
        Our landscape design service is the cornerstone of creating your ideal
        outdoor environment. We believe in the artful arrangement and strategic
        modification of outdoor spaces to craft landscapes that are both
        aesthetically pleasing and functional. Our expert designers work closely
        with nature's palette to select and place each element with purpose,
        ensuring that the final composition harmonizes with your home's
        architecture and the surrounding environment. From the lush turf of your
        lawn to the vibrant hues of flowering plants, every detail is
        meticulously planned to create a seamless transition from indoor to
        outdoor living, enhancing the beauty and value of your property.
      </p>
      <Footer />
    </div>
  );
}

export default Design;
