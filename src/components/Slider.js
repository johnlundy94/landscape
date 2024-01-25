import Slide from "@mui/material/Slide";

const Slider = ({ inProp, direction, children, ...otherProps }) => {
  return (
    <Slide direction={direction} in={inProp} {...otherProps}>
      {children}
    </Slide>
  );
};

export default Slider;
