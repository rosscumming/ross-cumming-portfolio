import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import './App.scss';

const PageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-4QNWY8D6X6');
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
};

const App = () => (
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

export default App;
