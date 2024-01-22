import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "./styles/muiTheme";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
