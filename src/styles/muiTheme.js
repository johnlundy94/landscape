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
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(5px)",
          boxShadow: "none",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#fbfbfb",
          "&.Mui-focused": {
            color: "#fbfbfb !important",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fbfbfb",
          "&.Mui-focused": {
            color: "#fbfbfb",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fbfbfb",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fbfbfb",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fbfbfb",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#fbfbfb",
          "&.Mui-checked": {
            color: "#fbfbfb",
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
