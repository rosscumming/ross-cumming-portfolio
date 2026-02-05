const navItems = [
  { to: '#about', label: 'About' },
  { to: '#tech-stack', label: 'Tech Stack' },
  { to: '#projects', label: 'Projects' },
  { to: '#contact', label: 'Contact' },
];

const Navbar = () => (
  <header>
    <nav className="flex justify-center items-center w-screen max-mobile:flex-col max-mobile:p-0">
      <div className="max-w-300 w-screen flex justify-between max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:px-5 max-lg:py-2.5 max-md:py-0">
        <div className="flex items-center text-[1.05em] uppercase font-bold max-md:pt-2.5 max-mobile:py-2.5 max-mobile:pt-2.5">
          <a className="no-underline text-title" href="#">
            rosscumming<span className="text-accent">.codes</span>
          </a>
        </div>
        <ul className="list-none m-0 p-0 flex max-mobile:text-[0.8em] max-mobile:w-screen max-mobile:justify-evenly">
          {navItems.map((item) => (
            <li key={item.to} className="no-underline p-3.75 font-bold max-sm:text-[0.8em] max-sm:p-0 max-mobile:p-0">
              <a className="text-[0.8em] uppercase no-underline text-title hover:text-accent hover:transition-colors duration-200" href={item.to}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
