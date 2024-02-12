import { useState } from "react";
import axios from "axios";
import "../styles/Quote.css";
import { FormControl, TextField, Button, Checkbox, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    services: {
      landscapeDesign: false,
      outdoorLivingSpaces: false,
      irrigation: false,
    },
    budget: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData(prevState => {
      if (type === "checkbox") {
        return {
          ...prevState,
          services: { ...prevState.services, [name]: checked }
        };
      }
      return { ...prevState, [name]: value };
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const apiGatewayUrl = process.env.REACT_APP_API_GATEWAY_URL;

    axios.post(apiGatewayUrl, JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log("Success: ", response.data);
    })
    .catch(error => {
      console.log("Error: ", error);
    });
    console.log(formData);
  }

  return (
    <div className="Quote">
      <Nav />
      <h1 className="quote-title">Reach Out To Us!</h1>
      <div className="quote-form">
        <FormControl component="form" onSubmit={handleSubmit} sx={{ m: 4 }} >
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Address"
            variant="outlined"
            name="address"
            value={formData.address}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <FormLabel component="legend">Services Interested In</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={formData.services.landscapeDesign} onChange={handleChange} name="landscapeDesign" />}
              label="Landscape Design"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.services.outdoorLivingSpaces} onChange={handleChange} name="outdoorLivingSpaces" />}
              label="Outdoor Living Spaces"
            />
            <FormControlLabel
              control={<Checkbox checked={formData.services.irrigation} onChange={handleChange} name="irrigation" />}
              label="Irrigation"
            />
          </FormGroup>
          <TextField
            label="Whats your budget"
            variant="outlined"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Project Description"
            variant="outlined"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            margin="normal"
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </FormControl>
      </div>

      <Footer />
    </div>
  );
}

export default Quote;
