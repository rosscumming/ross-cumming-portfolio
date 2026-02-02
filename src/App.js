import React, { useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ReactGA from 'react-ga4';

const PageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-4QNWY8D6X6');
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
};

const App = () => {
  return (
    <main id="App">
      <Router>
        <Navbar />
        <PageView />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
