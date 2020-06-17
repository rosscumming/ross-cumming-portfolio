import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Home from "./components/Home/Home"


const App = () => {
  return (
<Router>
<div className="App">
  <Navbar />
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/projects" component={Projects} />
  </Switch>
  </div>
  </Router>


  )}


export default App;
