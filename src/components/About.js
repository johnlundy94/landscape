import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../styles/About.css";
import man from "../assets/man.png";
import group from "../assets/group.png";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title" id="about" >About Us</h1>

      <Card className="about-card">
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="color"
          >
            Our Story
          </Typography>
          <Typography
            className="about-sub-text"
            variant="body2"
            color="text.secondary"
          >
            Verdant Valley Landscaping began as the vision of a single entrepreneur, Alex Green. With a passion for transforming outdoor spaces and a commitment to sustainable practices, Alex established the company in the heart of Colorado. His goal was simple: to blend creative landscaping solutions with eco-friendly techniques, making every project a testament to nature's beauty and resilience.
            <br />
            From humble beginnings, Verdant Valley quickly grew, thanks to a reputation for reliability, innovation, and meticulous attention to detail. Each project, whether a quaint backyard garden or a sprawling corporate green space, was infused with Alex's personal touch and environmental ethos. The company became known not just for the aesthetics of its designs, but for fostering vibrant, green communities.
          </Typography>
        </CardContent>
      </Card>
      <img src={man} alt="Man" className="man" />
      <img src={group} alt="Group" className="group" />
    </div>
  );
}

export default About;
