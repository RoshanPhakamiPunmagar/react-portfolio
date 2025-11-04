import React from "react";
import Title from "./Title";
import Card from "./Card";
import finance from "../assets/finance.jpg";

export const Project = () => {
  const projects = [
    {
      image: finance,
      github: "https://finance-app-frontend-gamma.vercel.app/",
      title: "About finance tracker app",
      description: "Built an app that helps to track financial situations.",
      url: "Link",
    },
  ];
  return (
    <section className="project" id="projects">
      <Title title="My Projects" />
      <div className="project-container">
        {projects.map((proj, index) => (
          <Card
            key={index}
            image={proj.image}
            github={proj.github}
            title={proj.title}
            description={proj.description}
            url={proj.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
