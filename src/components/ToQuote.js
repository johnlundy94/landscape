import * as React from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade in={trigger}>
      <Box
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          zIndex: 1500,
          color: "#fbfbfb",
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function ToQuote(props) {
  return (
    <React.Fragment>
      <ScrollTop {...props}>
        <Link to="/quote" style={{ textDecoration: "none", color: "#fbfbfb" }}>
          GET A QUOTE
        </Link>
      </ScrollTop>
    </React.Fragment>
  );
}
