import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ReactGA from "react-ga";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-171409240-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <main id="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
