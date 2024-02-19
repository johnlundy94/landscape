import "../styles/Hero.css";
import starSVG from "../assets/five-star.svg";

function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Verdant Visions Landscaping</h1>
      <p className="hero-text">
        Verdant Visions Landscapings brings your vision of outdoor beauty to
        life, regardless of budget size. We pride ourselves on offering a wide
        range of landscaping services, from basic lawn care to complete garden
        overhauls. Our team works diligently to create spaces that enhance your
        home or business, combining sustainable practices with timeless design.
        Every project is a partnership with nature, crafted to suit your unique
        style and preferences.
      </p>
      <div className="star1">
        <img src={starSVG} alt="Five Star" />
        <p>Sawyer Residence</p>
      </div>
      <div className="star2">
        <img src={starSVG} alt="Five Star" />
        <p>McCarthy Residence</p>
      </div>
      <div className="star3">
        <img src={starSVG} alt="Five Star" />
        <p> Hopkins Residence</p>
      </div>
    </div>
  );
}

export default Hero;
