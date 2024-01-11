import "../styles/Services.css";
import CustomCard from "./CustomCard";

function Services() {
  return (
    <div className="Services" id="services">
      <h1>Services Offered</h1>
      <div className="card1">
        <CustomCard />
      </div>
      <div className="card2">
        <CustomCard />
      </div>
      <div className="card3">
        <CustomCard />
      </div>
    </div>
  );
}

export default Services;
