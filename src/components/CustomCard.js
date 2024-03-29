import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

function CustomCard({ className, image, title, description, link }) {
  return (
    <Card className={className} sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
          <Link to={link} style={{ textDecoration: "none", color: "inherit", paddingLeft: "16px"}}>Learn More</Link>
      </CardActions>
    </Card>
  );
}

export default CustomCard;
