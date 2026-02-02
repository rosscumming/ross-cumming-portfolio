import { NavHashLink } from 'react-router-hash-link';
import './Navbar.scss';

const navItems = [
  { to: '/#about', label: 'About' },
  { to: '/#tech-stack', label: 'Tech Stack' },
  { to: '/#projects', label: 'Projects' },
  { to: '/#contact', label: 'Contact' },
];

const Navbar = () => (
  <header>
    <nav className="nav-container">
      <span className="nav-wrap">
        <div className="logo">
          <NavHashLink className="logo-text" to="/">
            rosscumming<span className="codes">.codes</span>
          </NavHashLink>
        </div>
        <ul className="nav-ul">
          {navItems.map((item) => (
            <li key={item.to} className="nav-li">
              <NavHashLink smooth to={item.to}>
                {item.label}
              </NavHashLink>
            </li>
          ))}
        </ul>
      </span>
    </nav>
  </header>
);

export default Navbar;
