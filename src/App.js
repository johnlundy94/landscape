import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "./styles/muiTheme";
import Home from "./pages/Home";
import Design from "./pages/Design";
import Outdoor from "./pages/Outdoor"; 
import Irrigation from "./pages/Irrigation"; 
import Property from "./pages/Property";
import Quote from "./pages/Quote"; 
import Arcadian from "./pages/properties/Arcadian"
import Eden from "./pages/properties/Eden"
import Elysian from "./pages/properties/Elysian"
import Oasis from "./pages/properties/Oasis"
import Serenity from "./pages/properties/Serenity"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={muiTheme}>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/outdoor" element={<Outdoor/>}/>
        <Route path="/irrigation" element={<Irrigation/>}/>
        <Route path="/property" element={<Property/>}/>
        <Route path="/quote" element={<Quote/>}/>
        <Route path="/arcadian" element={<Arcadian/>}/>        
        <Route path="/eden" element={<Eden/>}/>        
        <Route path="/elysian" element={<Elysian/>}/>       
         <Route path="/oasis" element={<Oasis/>}/>        
        <Route path="/serenity" element={<Serenity/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
