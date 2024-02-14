import Slide from "@mui/material/Slide";
import "../styles/Portfolio.css"

const SlideComponent = ({ isActive, direction, children }) => {
  return (
    <Slide direction={direction} in={isActive} timeout={{enter: 1000, exit: 1000}} >
      <div className="slider-content">
      {children}
        </div>
    </Slide>
  );
};

export default SlideComponent;
