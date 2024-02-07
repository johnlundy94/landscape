import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#272727',
      light: '#4d4d4d',
      dark: '#1c1c1c',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

export default muiTheme;
