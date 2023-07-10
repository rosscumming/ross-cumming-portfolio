import React from 'react';
import '../Footer/Footer.scss';

const year = new Date().getFullYear();

const Footer = () => {
  return <section id="footer"> © {year} Ross Cumming </section>;
};

export default Footer;
