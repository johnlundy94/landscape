import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "./styles/muiTheme";
import Home from "./pages/Home";
import Design from "./pages/Design";
import Property from "./pages/Property";
import Quote from "./pages/Quote"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={muiTheme}>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/property" element={<Property/>}/>
        <Route path="/quote" element={<Quote/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
