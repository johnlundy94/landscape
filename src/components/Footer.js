import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import {Link} from 'react-router-dom'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link to="/" style={{ textDecoration: 'none', color: '#fbfbfb', padding: 10}}>
          Home
        </Link>
        <Link to="/design" style={{ textDecoration: 'none', color: '#fbfbfb', padding: 10 }}>
          Landscape Design
        </Link>
        <Link to="/outdoor" style={{ textDecoration: 'none', color: '#fbfbfb', padding: 10 }}>
          Outdoor Living Spaces
        </Link>
        <Link to="/irrigation" style={{ textDecoration: 'none', color: '#fbfbfb', padding: 10 }}>
          Irrigation
        </Link>
        <Link to="/property" style={{ textDecoration: 'none', color: '#fbfbfb', padding: 10 }}>
          Properties
        </Link>
        <Link to="/quote" style={{ textDecoration: 'none', color: '#fbfbfb', padding: 10 }}>
          Quote
        </Link>
      </div>
      <div className="footer-social">
        <IconButton color="#fbfbfb" href="https://facebook.com">
          <FacebookIcon />
        </IconButton>
        <IconButton color="#fbfbfb" href="https://twitter.com">
          <TwitterIcon />
        </IconButton>
        <IconButton color="#fbfbfb" href="https://instagram.com">
          <InstagramIcon />
        </IconButton>
        <IconButton color="#fbfbfb" href="https://linkedin.com">
          <LinkedInIcon />
        </IconButton>
      </div>
      <div className="footer-copyright">
        <Typography variant="body2" align="center">
          © 2024 John Lundy. All rights reserved.
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
