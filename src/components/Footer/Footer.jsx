const Footer = () => {
  const year = new Date().getFullYear();

  return <footer id="footer" className="bg-accent flex justify-center pb-2.5 text-white"> &copy; {year} Ross Cumming </footer>;
};

export default Footer;
