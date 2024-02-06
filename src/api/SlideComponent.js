import Slide from "@mui/material/Slide";
import "../styles/Hero.css"

const SlideComponent = ({ isActive, direction, imgSrc }) => {
  return (
    <Slide direction={direction} in={isActive} timeout={{enter: 5000, exit: 5000}} >
      <img src={imgSrc} alt="Image" className="slider-image"/>
    </Slide>
  );
};

export default SlideComponent;
