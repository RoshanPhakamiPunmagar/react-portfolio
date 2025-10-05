import React from "react";
import Title from "./Title";
import roshan from "../assets/roshan.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <Title title="About me" />

      <div className="container flex about-content">
        <div className="flex-center myImg">
          <img src={roshan} alt="Roshan's picture" width="100%" />
        </div>
        <div className="my-bio container">
          <h2>Roshan Magar</h2>
          <p>
            Hi! I am Roshan. I am passionate about building web applications
            using HTML, CSS and Javascript. I love to be engaged in solving real
            world problems using modern technologies.
          </p>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Sydney, Australia
          </p>
          <div>
            <div
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
              className="tag"
            >
              Interests
            </div>
            <div className="flex">
              <span>Coding</span>
              <span>Playing Basketball</span>
              <span>Watching Movies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
