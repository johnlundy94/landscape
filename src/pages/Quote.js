import { useState } from "react";
import axios from "axios";
import "../styles/Quote.css";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  FormControl,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
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

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    budget: "",
    description: "",
  });

  const [openDialog, setOpenDialog] = useState(false);

  const validateEmail = (email) => {
    const regEmial =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmial.test(email);
  };

  const validatePhone = (phone) => {
    const regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regPhone.test(phone);
  };

  const validateField = (name, value) => {
    if (typeof value === "boolean") {
      return "";
    }

    switch (name) {
      case "email":
        return validateEmail(value) ? "" : "Invalid email format";
      case "phone":
        return validatePhone(value)
          ? ""
          : "Invalid phone number, please enter 10 digits";
      default:
        return value.trim() ? "" : "This field is required";
    }
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        services: {
          ...prevState.services,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, type === "checkbox" ? checked : value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = Object.keys(formData).reduce((acc, key) => {
      if (key !== "services") {
        acc[key] = validateField(key, formData[key]);
      }
      return acc;
    }, {});

    setFormErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      console.log("Form has errors");
      return;
    }

    const apiGatewayUrl = process.env.REACT_APP_API_GATEWAY_URL;

    axios
      .post(apiGatewayUrl, JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Success: ", response.data);

        setFormData({
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
        setOpenDialog(true);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    console.log(formData);
  };

  return (
    <div className="Quote">
      <Nav />
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-text"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Submission Successful"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Thank you for your interest! We will reach out shortly!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            component={Link}
            to="/"
            color="primary"
            autoFocus
            onClick={() => setOpenDialog(false)}
          >
            Go to Home
          </Button>
        </DialogActions>
      </Dialog>
      <h1 className="quote-title">Reach Out To Us!</h1>
      <div className="quote-form">
        <FormControl component="form" onSubmit={handleSubmit} sx={{ m: 4 }}>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!formErrors.phone}
            helperText={formErrors.phone}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Address"
            variant="outlined"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={!!formErrors.address}
            helperText={formErrors.address}
            margin="normal"
            fullWidth
          />
          <FormLabel component="legend">Services Interested In</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.services.landscapeDesign}
                  onChange={handleChange}
                  name="landscapeDesign"
                />
              }
              label="Landscape Design"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.services.outdoorLivingSpaces}
                  onChange={handleChange}
                  name="outdoorLivingSpaces"
                />
              }
              label="Outdoor Living Spaces"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.services.irrigation}
                  onChange={handleChange}
                  name="irrigation"
                />
              }
              label="Irrigation"
            />
          </FormGroup>
          <TextField
            label="Whats your budget"
            variant="outlined"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            error={!!formErrors.budget}
            helperText={formErrors.budget}
            margin="normal"
            fullWidth
          />
          <TextField
            label="Project Description"
            variant="outlined"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={!!formErrors.description}
            helperText={formErrors.description}
            multiline
            rows={4}
            margin="normal"
            fullWidth
            className="description-textfield"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </FormControl>
      </div>

      <Footer />
    </div>
  );
}

export default Quote;
