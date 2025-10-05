import React from "react";
import Title from "./Title";
import Card from "./Card";
import roshan from "../assets/roshan.jpeg";

export const Project = () => {
  const projects = [
    {
      image: roshan,
      github: "https://github.com/RoshanPhakamiPunmagar/medication-app",
      title: "About medication app",
      description:
        "Built an app that is AI generative helps to give medications in time. Side effects of medicine and recommendations were generated from openAI API's.",
      url: "Link1",
    },

    {
      image: roshan,
      github: "https://roshanphakamipunmagar.github.io/Week2_FrontendFlex/",
      title: "Responsive Travel Blog",
      description:
        "Modern travel stories, insider tips, and inspiring destinations, explore the world with us.",
      url: "Link2",
    },

    {
      image: roshan,
      github: "https://roshanphakamipunmagar.github.io/not_to_do_list/",
      title: "Not to do list",
      description:
        " List that takes tasks, hours and types of tasks whether it is good or bad and calculate total hour.",
      url: "Link3",
    },
  ];
  return (
    <section className="project" id="projects">
      <Title title="My Projects" />
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
    </section>
  );
};

export default Project;
