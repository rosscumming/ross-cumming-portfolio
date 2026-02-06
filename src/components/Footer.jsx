import { bio } from '../data/bio';

const Footer = () => (
  <footer className="relative z-10 text-center px-6 py-8 font-inter text-xs text-[#888] tracking-widest uppercase">
    {bio.name} &copy; {new Date().getFullYear()}
  </footer>
);

export default Footer;
