import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        JP.
      </Link>

      <ul className="nav-links">

        {isHomePage ? (
          <>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </>
        ) : (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}

      </ul>

    </nav>
  );
}

export default Navbar;