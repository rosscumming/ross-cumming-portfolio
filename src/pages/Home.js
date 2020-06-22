import React from "react";
import "./Home.scss";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Tech from "../components/Tech/Tech";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Tech />
    </>
  );
};

export default Home;
