import Slide from "@mui/material/Slide";
import "../styles/Hero.css"

const SlideComponent = ({ isActive, direction, imgSrc }) => {
  return (
    <Slide direction={direction} in={isActive} timeout={{enter: 1000, exit: 1000}} >
      <img src={imgSrc} alt="Image" className="slider-image"/>
    </Slide>
  );
};

export default SlideComponent;
