import "../styles/Home.css";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Calculator from "../components/Calculator";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="Home">
      <Nav />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
      <Calculator />
      <Footer />
    </div>
  );
}

export default Home;
