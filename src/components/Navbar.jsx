import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container flex header">
        <div className="logo">
          <div>Roshan</div>
          <div className="line">Software Developer</div>
        </div>

        {/* Hamburger Button */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>

        {/* Menu */}
        <nav className={`menu ${open ? "show" : ""}`}>
          <ul>
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
