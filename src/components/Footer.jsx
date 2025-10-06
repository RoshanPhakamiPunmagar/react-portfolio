import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex">
      <div className="top flex">
        <h3>Links</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        &copy; Copy right all reserved 2025 || Made by Roshan.
      </div>
    </footer>
  );
};

export default Footer;
