import { FC, useState, useEffect, ChangeEvent, FormEvent } from "react";
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
import WebSocketManager from "../WebSocketManager";
import type {WSMessage} from "../types/WSMessage"

// The three service checkboxes
interface Services{
  landscapeDesign: boolean;
  outdoorLivingSpaces: boolean;
  irrigation: boolean; 
}

// Form data
export interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  services: Services;
  budget: string;
  description: string;
}

// The shape of error-strings for each field
interface FormErrors {
  name: string;
  email: string;
  phone: string;
  address: string;
  budget: string;
  description: string;
}

const Quote: FC = () => {
  const [formData, setFormData] = useState<FormData>({
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

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    address: "",
    budget: "",
    description: "",
  });

  const [openSuccessDialog, setOpenSuccessDialog] = useState<boolean>(false);
  const [openErrorDialog, setOpenErrorDialog] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateEmail = (email: string) => {
    const regEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(email);
  };

  const validatePhone = (phone: string) => {
    const regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regPhone.test(phone);
  };

  const validateField = (name: keyof FormData, value: string | boolean) => {
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
    WebSocketManager.setOnMessage((message: WSMessage) => {
      console.log("Message received", message);
      if (message.error) {
        setErrorMessage(message.error);
        setOpenErrorDialog(true);
      } else if (message.quote) {
        setOpenSuccessDialog(true);
      }
    });

    return () => {
      WebSocketManager.close();
    };
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
      [name]: validateField(name as keyof FormData, value),
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const hasErrors = Object.values(formErrors).some((error) => error);

    if (!hasErrors) {
      WebSocketManager.sendMessage({
        action: "postQuote",
        data: formData,
      });
      setOpenSuccessDialog(true);
    } else {
      setErrorMessage("Please correct the errors in the form.");
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
            Now that your quote has been submitted, take a look at the admin
            site so you can see your quote submission and the functionality of
            that site:{" "}
            <a
              href="https://verdantvisionslandscapingadmin.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "white",
                textDecoration: "underline",
              }}
            >
              Verdant Visions Admin Site
            </a>{" "}
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
            label="Email (Enter real email if you wish to use the admin sites messaging system)"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            margin="normal"
            fullWidth
            multiline
            rows={4}
            InputLabelProps={{
              sx: {
                whiteSpace: "normal",
                textAlign: "left",
                "&.MuiInputLabel-shrink": {
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "inline-block",
                  maxWidth: "calc(75% - 32px)",
                },
              },
            }}
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
