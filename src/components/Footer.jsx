import React from "react";

const Footer = () => {
  return (
    <footer className="flex">
      <div className="top flex">
        <h3>Links</h3>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
