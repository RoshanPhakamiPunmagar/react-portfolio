import React, { useState } from "react";
import { Link } from "react-router-dom";

// Navbar component
const Navbar = () => {
  // State to manage whether the menu is open (for mobile responsiveness)
  const [open, setOpen] = useState(false);

  return (
    <header>
      {/* Wrapper container with flex layout */}
      <div className="container flex header">
        {/* Logo section */}
        <div className="logo">
          <div>Roshan</div>
          <div className="line">Software Developer</div>
        </div>

        {/* Hamburger icon for toggling menu (visible on smaller screens) */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        {/* Navigation menu */}
        {/* The class 'show' is conditionally added based on the 'open' state */}
        <nav className={`menu ${open ? "show" : ""}`}>
          <ul>
            {/* Each link closes the menu on click (for mobile) */}
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={() => setOpen(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
