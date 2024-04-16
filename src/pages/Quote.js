import { useState, useEffect } from "react";
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

  const [ws, setWs] = useState(null);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  useEffect(() => {
    const webSocket = new WebSocket(process.env.REACT_APP_WS_API_GATEWAY_URL);

    webSocket.onopen = (event) => {
      console.log("WebSocket connection established", event);
    };

    webSocket.onerror = (event) => {
      console.error("WebSocket error observed:", event);
    };

    webSocket.onmessage = (event) => {
      console.log("Message received", event.data);
      const message = JSON.parse(event.data);
      if (message.error) {
        setErrorMessage(message.error);
        setOpenErrorDialog(true);
      } else if (message.quote) {
        setOpenSuccessDialog(true);
      }
    };

    setWs(webSocket);

    // Only close WebSocket when the component is unmounted
    return () => {
      if (webSocket.readyState === WebSocket.OPEN) {
        console.log("Closing WebSocket");
        webSocket.close();
      }
    };
  }, []);

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
    const hasErrors = Object.values(formErrors).some((error) => error);

    if (!hasErrors && ws && ws.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          action: "postQuote",
          data: formData,
        })
      );
    } else {
      if (hasErrors) {
        setErrorMessage("Please correct the errors in the form.");
      } else {
        setErrorMessage("WebSocket connection is not open.");
      }
      setOpenErrorDialog(true);
    }
  };

  return (
    <div className="Quote">
      <Nav />
      <Dialog
        open={openSuccessDialog}
        onClose={() => setOpenSuccessDialog(false)}
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
            onClick={() => setOpenSuccessDialog(false)}
          >
            Go to Home
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openErrorDialog} onClose={() => setOpenErrorDialog(false)}>
        <DialogTitle>{"Error Submitting Quote"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{errorMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenErrorDialog(false)}
            color="primary"
            autoFocus
          >
            Close
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
