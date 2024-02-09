import "./Services.css";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import service3 from "../../assets/service3.png";

function Irrigation() {
  return (
    <div className="Services">
      <Nav />
      <img src={service3} alt="Irrigation" className="service-image" />
      <h1 className="services-title">Irrigation</h1>
      <p className="services-text">
      Efficient irrigation systems are key to maintaining a vibrant landscape while conserving water and promoting sustainability. We offer advanced irrigation solutions that ensure every plant receives the precise amount of water it needs to thrive. Our systems are engineered to reduce waste, lower utility costs, and provide convenience through automation. With the use of cutting-edge technology, we can create a custom irrigation plan that adapts to your landscape's unique requirements, ensuring lush greenery and blooming gardens with minimal environmental impact. Let us help you cultivate a thriving outdoor space with the gold standard in irrigation efficiency.
      </p>
      <Footer />
    </div>
  );
}

export default Irrigation;