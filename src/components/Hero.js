import "../styles/Hero.css";
import starSVG from "../assets/five-star.svg";
import verdantVideo from "../assets/verdantherovideo.mp4";

const testimonials = [
  { name: "Sawyer Residence" },
  { name: "McCarthy Residence" },
  { name: "Hopkins Residence" },
];

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-nav">
        <a href="/">Home</a>
        <a href="/quote">Quote</a>
        <a href="/serenity">Properties</a>
        <a href="/design">Services</a>
      </div>

      <div className="hero-background">
        <div className="hero-video-container">
          <video autoPlay loop muted playsInline>
            <source src={verdantVideo} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
        <h1 className="hero-title">Verdant Visions Landscaping</h1>
      </div>

      <div className="hero-content">
        <p className="hero-text">
          Verdant Visions Landscapings brings your vision of outdoor beauty to
          life, regardless of budget size. We pride ourselves on offering a wide
          range of landscaping services, from basic lawn care to complete garden
          overhauls. Our team works diligently to create spaces that enhance
          your home or business, combining sustainable practices with timeless
          design. Every project is a partnership with nature, crafted to suit
          your unique style and preferences.
        </p>
        <div className="hero-testimonials">
          {testimonials.map((testimonial, index) => (
            <div className="star" key={index}>
              <img src={starSVG} alt="Five Star" />
              <p>{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
