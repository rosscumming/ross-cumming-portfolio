import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return <section id="footer"> © {year} Ross Cumming </section>;
};

export default Footer;
