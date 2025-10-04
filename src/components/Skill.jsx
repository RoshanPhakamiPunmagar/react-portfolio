import React from "react";
import Title from "./Title";

const Skill = () => {
  return (
    <div className="skills" id="skills">
      <Title title="Skills" />

      <div className="container flex skills-container">
        <div>
          <i className="fa-brands fa-html5" style={{ color: "blueviolet" }}></i>
          <span>HTML</span>
        </div>
        <div>
          <i className="fa-brands fa-css3-alt" style={{ color: "blue" }}></i>
          <span>CSS</span>
        </div>
        <div>
          <i
            className="fa-brands fa-js"
            style={{ color: "rgb(101, 10, 25)" }}
          ></i>
          <span>Javascript</span>
        </div>
        <div>
          <i
            className="fa-brands fa-github"
            style={{ color: "rgb(61, 226, 43)" }}
          ></i>
          <span>GitHub</span>
        </div>
        <div>
          <i className="fa-brands fa-java" style={{ color: "black" }}></i>
          <span>Java</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
