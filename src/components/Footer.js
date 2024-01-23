import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
          First Link
        </Link>
        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
          Second Link
        </Link>
        <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
          Third Link
        </Link>
        <Link href="#" color="inherit">
          Fourth Link
        </Link>
      </div>
      <div className="footer-social">
        <IconButton color="inherit" href="https://facebook.com">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit" href="https://linkedin.com">
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
