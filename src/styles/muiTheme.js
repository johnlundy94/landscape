import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#272727',
      light: '#4d4d4d',
      dark: '#1c1c1c',
      contrastText: '#fbfbfb',
    },
    text: {
      primary: '#fbfbfb', 
      secondary: '#fbfbfb',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 30, 
          backgroundColor: '#272727',
          color: '#fbfbfb',
          '& .MuiTypography-colorTextSecondary': {
            color: '#fbfbfb',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#fbfbfb',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: { 
          color: '#fbfbfb', 
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#272727',
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default muiTheme;