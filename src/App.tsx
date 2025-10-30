import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ProjectsGallery from "./components/ProjectsGallery";
import StatsSection from "./components/StatsSection";
import ContactForm from "./components/ContactForm";
import Sponsor from "./components/Sponsor";
// import Gallery from './components/Gallery';
// import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <ProjectsGallery />
      <StatsSection />
      <ContactForm />
      <Sponsor />
      {/* <Gallery /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
