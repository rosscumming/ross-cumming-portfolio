import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Interests from './components/Interests';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className="bg-[#161616] text-[#E5E5E5] font-inter min-h-screen cursor-default select-none">
    <div className="grain" />
    <Hero />
    <About />
    <Experience />
    <Interests />
    <TechStack />
    <Contact />
    <Footer />
  </div>
);

export default App;
