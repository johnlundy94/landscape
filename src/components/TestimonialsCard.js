import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function TestimonialsCard({ className, customer, description }) {
  return (
    <Card className={className}>
      <CardContent>
        <Typography variant="body1" color="text.primary">
          &quot;{description}&quot;
        </Typography>
        <Typography gutterTop variant="h5" component="div">
          {customer}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TestimonialsCard;
