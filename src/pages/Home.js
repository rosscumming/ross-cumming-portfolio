import React from "react";
import "./Home.scss";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Tech from "../components/Tech/Tech";
import Projects from "../components/Projects/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Tech />
      <Projects />
    </>
  );
};

export default Home;
