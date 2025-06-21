import {FC} from "react"
import "../styles/Home.css";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { useMediaQuery } from "@mui/material";

const Home: FC = () => {
  const isSmallScreen: boolean = useMediaQuery("(max-width:820px)");

  return (
    <div className="Home">
      {isSmallScreen && <Nav />}
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
