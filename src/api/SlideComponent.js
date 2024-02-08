import Slide from "@mui/material/Slide";
import "../styles/Hero.css"

const SlideComponent = ({ isActive, direction, imgSrc, children }) => {
  return (
    <Slide direction={direction} in={isActive} timeout={{enter: 1000, exit: 1000}} >
      <div className="slider-content">
        <img src={imgSrc} alt="Slide image" className="slider-image"/>
        {children}
      </div>

    </Slide>
  );
};

export default SlideComponent;
