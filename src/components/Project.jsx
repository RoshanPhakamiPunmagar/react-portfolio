import React from "react";

const Project = () => {
  return (
    <section className="project" id="projects">
      <div className="heading">My Projects</div>
      <div className="project-container">
        <div className="project-item">
          <div className="project-image">
            <img src="src/assets/roshan.jpeg" alt="Roshan's picture" />
          </div>
          <div className="project-desc">
            <a
              href="https://github.com/RoshanPhakamiPunmagar/medication-app"
              style={{ fontSize: "20px" }}
            >
              <i className="fa-solid fa-link"></i> Link1
            </a>
            <div style={{ fontSize: "18px" }}>About medication app</div>
            <div style={{ fontSize: "15px" }}>
              Built an app that is AI generative helps to give medications in
              time. Side effects of medicine and recommendations were generated
              from openAI API's.
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <img src="src/assets/roshan.jpeg" alt="Roshan's picture" />
          </div>
          <div className="project-desc">
            <a
              href="https://roshanphakamipunmagar.github.io/Week2_FrontendFlex/"
              style={{ fontSize: "20px" }}
            >
              <i className="fa-solid fa-link"></i> Link2
            </a>
            <div style={{ fontSize: "18px" }}>Responsive Travel Blog</div>
            <div style={{ fontSize: "15px" }}>
              Modern travel stories, insider tips, and inspiring destinations,
              explore the world with us.
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <img src="src/assets/roshan.jpeg" alt="Roshan's picture" />
          </div>
          <div className="project-desc">
            <a
              href="https://roshanphakamipunmagar.github.io/not_to_do_list/"
              style={{ fontSize: "20px" }}
            >
              <i className="fa-solid fa-link"></i> Link3
            </a>
            <div style={{ fontSize: "18px" }}>Not to do list</div>
            <div style={{ fontSize: "15px" }}>
              List that takes tasks, hours and types of tasks whether it is good
              or bad and calculate total hour.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
