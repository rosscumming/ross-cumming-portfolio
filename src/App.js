import React, { useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ReactGA from 'react-ga';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-4QNWY8D6X6');
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

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
