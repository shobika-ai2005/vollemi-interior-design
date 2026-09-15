import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import useScrollReveal from "./useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;