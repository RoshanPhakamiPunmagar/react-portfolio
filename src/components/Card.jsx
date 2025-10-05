import React from "react";

const Card = ({ image, github, title, description, url }) => {
  return (
    <div className="project-item">
      <div className="project-image">
        <img src={image} alt="Roshan's picture" />
      </div>
      <div className="project-desc">
        <a href={github} style={{ fontSize: "20px" }}>
          <i className="fa-solid fa-link"></i> {url}
        </a>
        <div style={{ fontSize: "18px" }}>{title}</div>
        <div style={{ fontSize: "15px" }}>{description}</div>
      </div>
    </div>
  );
};

export default Card;
