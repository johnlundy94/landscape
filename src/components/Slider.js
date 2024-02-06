import Slide from "@mui/material/Slide";

const Slider = ({ inProp, direction, easing, timeout, children, ...otherProps }) => {
  return (
    <Slide direction={direction} in={inProp} easing={easing} timeout={timeout} {...otherProps}>
      {children}
    </Slide>
  );
};

export default Slider;
