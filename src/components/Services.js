import "../styles/ServicesComp.css";
import CustomCard from "./CustomCard";
import servicesData from "../data/servicesData";

function Services() {
  return (
    <div className="services-comp-container" id="services">
      <h1 className="services-comp-title" id="services" >Services Offered</h1>
      {servicesData.map((service, index) => (
        <CustomCard
          key={service.id}
          image={service.image}
          title={service.title}
          description={service.description}
          link={service.link}
          className={`card${service.id}`}
        />
      ))}
    </div>
  );
}

export default Services;
