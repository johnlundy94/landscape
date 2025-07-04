import { FC } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "./styles/muiTheme";
import Home from "./pages/Home";
import Quote from "./pages/Quote";
import Eden from "./pages/properties/Eden";
import Elysian from "./pages/properties/Elysian";
import Oasis from "./pages/properties/Oasis";
import Serenity from "./pages/properties/Serenity";
import Design from "./pages/services/Design";
import Irrigation from "./pages/services/Irrigation";
import Outdoor from "./pages/services/Outdoor";
import BackToTop from "./components/BackToTop";
import ToQuote from "./components/ToQuote";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <BackToTop />
        <Router>
          <ToQuote />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/outdoor" element={<Outdoor />} />
            <Route path="/irrigation" element={<Irrigation />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/eden" element={<Eden />} />
            <Route path="/elysian" element={<Elysian />} />
            <Route path="/oasis" element={<Oasis />} />
            <Route path="/serenity" element={<Serenity />} />
            <Route path="/design" element={<Design />} />
            <Route path="/outdoor" element={<Outdoor />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
