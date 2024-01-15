import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/About.css";
import man from "../assets/man.png";
import group from "../assets/group.png";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <Card sx={{ maxWidth: 345 }} className="card">
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="color"
          >
            Meet Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </Card>
      <img src={man} alt="Man" className="man col-1-row-2" />
      <img src={group} alt="Group" className="group col-2-row-2" />
    </div>
  );
}

export default About;
