import "../styles/Home.css";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="Home">
      <Nav />
      <Portfolio/>
      <Services/>
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
