import React from "react";
import "./Home.scss";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Tech from "../components/Tech/Tech";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
