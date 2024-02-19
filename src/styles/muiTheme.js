import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#272727",
      light: "#4d4d4d",
      dark: "#1c1c1c",
      contrastText: "#fbfbfb",
    },
    text: {
      primary: "#fbfbfb",
      secondary: "#fbfbfb",
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // Label color when not focused
          color: "#fbfbfb",
          "&.Mui-focused": {
            // Label color when focused
            color: "#fbfbfb",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fbfbfb", // Change the border color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fbfbfb", // Change the border color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fbfbfb", // Change the border color when focused
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#fbfbfb", // Set the default color for the checkbox
          "&.Mui-checked": {
            color: "#fbfbfb", // Ensure the checkbox color remains the same when checked
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          backgroundColor: "#272727",
          color: "#fbfbfb",
          "& .MuiTypography-colorTextSecondary": {
            color: "#fbfbfb",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fbfbfb",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          color: "#fbfbfb",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#272727",
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default muiTheme;
