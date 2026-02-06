import { useState, useEffect } from 'react';
import { bio } from '../data/bio';

const Typewriter = ({ text, delay = 0, speed = 70, onDone, className }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
      return () => clearTimeout(timeout);
    } else {
      onDone?.();
    }
  }, [started, displayed, text, speed, onDone]);

  return <span className={className}>{displayed}</span>;
};

const ScrollArrow = () => (
  <button
    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float bg-transparent border-none cursor-pointer"
    aria-label="Scroll to content"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#888] hover:text-[#8A9A7B] transition-colors duration-300"
    >
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  </button>
);

const Hero = () => {
  const [phase, setPhase] = useState(0);

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 py-8">
      <h1
        className="font-instrument italic text-[clamp(3rem,8vw,6rem)] font-normal -tracking-wider leading-none mb-8 animate-hero-fade"
        onAnimationEnd={() => setPhase(1)}
      >
        {bio.name}
      </h1>
      <div className="relative">
        <p className="font-inter text-sm tracking-[0.15em] uppercase text-[#888] mb-2 invisible">
          {bio.role}
        </p>
        {phase >= 1 && (
          <p className="font-inter text-sm tracking-[0.15em] uppercase text-[#888] mb-2 absolute inset-0">
            <Typewriter text={bio.role} speed={50} onDone={() => setPhase(2)} />
          </p>
        )}
      </div>
      <div className="relative">
        <p className="font-inter text-xs text-[#888] tracking-widest invisible">
          {`${bio.location} — ${bio.employer}`}
        </p>
        {phase >= 2 && (
          <p className="font-inter text-xs text-[#888] tracking-widest absolute inset-0">
            <Typewriter text={`${bio.location} — ${bio.employer}`} speed={40} onDone={() => setPhase(3)} />
          </p>
        )}
      </div>
      <div className={`transition-opacity duration-500 ${phase >= 3 ? 'opacity-100' : 'opacity-0'}`}>
        <ScrollArrow />
      </div>
    </section>
  );
};

export default Hero;
