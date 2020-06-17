import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Home exact path="/" />
          <About exact path="/about" />
          <Projects exact path="/projects" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
