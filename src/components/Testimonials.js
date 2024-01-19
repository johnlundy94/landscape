import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">Testimonials</h1>

      <Card className="testimonials-card">
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
    </div>
  );
}

export default Testimonials;
