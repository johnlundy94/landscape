import "../styles/Hero.css";
import landscape1 from "../assets/landscape1.png";
import landscape2 from "../assets/landscape2.png";
import landscape3 from "../assets/landscape3.png";
import landscape4 from "../assets/landscape4.png";
import landscape5 from "../assets/landscape5.png";

function Hero() {
  return (
    <div className="hero-container">
      {/* <div className="images-left-column"> */}
      <img src={landscape1} alt="First" className="image-one" />
      <img src={landscape2} alt="Second" className="image-two col-2-row-2" />
      <img src={landscape3} alt="Third" className="image-three col-1-row-3" />
      {/* </div> */}
      {/* <div className="images-right-column"> */}
      <img src={landscape4} alt="Fourth" className="image-four col-2-row-3" />
      <img src={landscape5} alt="Fifth" className="image-five col-1-row-2" />
      {/* </div> */}
      {/* 
      <div className="hero-text">
        <h1>Collect your best articles easily</h1>
      </div> */}
      {/* <div className="hero-subtext">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          egestas maecenas pharetra convallis. Eget mi proin sed libero enim sed
          faucibus. Enim facilisis gravida neque convallis a cras semper auctor.
          Morbi enim nunc faucibus a pellentesque sit amet. Tortor dignissim
          convallis aenean et tortor at risus viverra. Nisl pretium fusce id
          velit ut tortor. Pellentesque habitant morbi tristique senectus et
          netus et. Velit sed ullamcorper morbi tincidunt ornare massa eget
          egestas. Justo eget magna fermentum iaculis eu non. At risus viverra
          adipiscing at in tellus integer feugiat. In eu mi bibendum neque
          egestas congue. Amet commodo nulla facilisi nullam.
        </p>
      </div> */}
    </div>
  );
}

export default Hero;
