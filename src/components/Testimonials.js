import "../styles/Testimonials.css";
import TestimonialsCard from "./TestimonialsCard";
import testimonialsData from "../data/testimonialsData";

function Testimonials() {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">Testimonials</h1>
      {testimonialsData.map((testimonial, index) => (
        <TestimonialsCard
          key={testimonial.id}
          title={testimonial.title}
          description={testimonial.description}
          className={`testimonials-card${testimonial.id}`}
        />
      ))}
    </div>
  );
}

export default Testimonials;
