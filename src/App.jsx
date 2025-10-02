import "./App.css";

function App() {
  return (
    <>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        {/* Dark mode toggle */}
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        {/* Header */}
        <header>
          <div className="header container flex">
            <div className="logo">
              <div>Roshan</div>
              <div className="line">Software Developer</div>
            </div>
            <div className="menu">
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
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section container" id="hero">
          <div className="grid hero">
            <div className="left flex">
              <div>
                Hi! I am <span>Roshan Magar.</span>
              </div>
              <div className="tag">Soft. Developer</div>
              <p>I love coding.</p>
              <div>
                <a href="src/assets/RoshanPunmagar.docx">
                  <button>
                    Download CV <i className="fa-solid fa-download"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="right flex">
              <img src="src/assets/roshan.jpeg" alt="Roshan's Profile" />
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="flex banner container">
          <div className="flex info-content">
            <div className="flex-center icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <span>IT</span>
              <p>Graduation</p>
            </div>
            <div className="info-divider"></div>
          </div>

          <div className="flex info-content">
            <div className="flex-center icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <span>3 Projects completed</span>
              <p>Completed</p>
            </div>
            <div className="info-divider"></div>
          </div>

          <div className="flex info-content">
            <div className="flex-center icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <span>1 year Experience</span>
              <p>Experience</p>
            </div>
            <div className="info-divider"></div>
          </div>
        </section>

        {/* Skills Section */}
        <div className="skills" id="skills">
          <h2 className="title">
            <span>Skills</span>
          </h2>
          <div className="container flex skills-container">
            <div>
              <i
                className="fa-brands fa-html5"
                style={{ color: "blueviolet" }}
              ></i>
              <span>HTML</span>
            </div>
            <div>
              <i
                className="fa-brands fa-css3-alt"
                style={{ color: "blue" }}
              ></i>
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

        {/* Projects Section */}
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
                  Built an app that is AI generative helps to give medications
                  in time. Side effects of medicine and recommendations were
                  generated from openAI API's.
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
                  Modern travel stories, insider tips, and inspiring
                  destinations, explore the world with us.
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
                  List that takes tasks, hours and types of tasks whether it is
                  good or bad and calculate total hour.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <h2 className="title">
            <span>About me</span>
          </h2>
          <div className="container flex about-content">
            <div className="flex-center myImg">
              <img
                src="src/assets/roshan.jpeg"
                alt="Roshan's picture"
                width="100%"
              />
            </div>
            <div className="my-bio container">
              <h2>Roshan Magar</h2>
              <p>
                Hi! I am Roshan. I am passionate about building web applications
                using HTML, CSS and Javascript. I love to be engaged in solving
                real world problems using modern technologies.
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

        {/* Contact Section */}
        <section className="contact container" id="contact">
          <h2 className="title">
            <span>Contact</span>
          </h2>
          <div className="flex social">
            <a href="https://www.linkedin.com/in/roshan-punmagar/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="mailto:rajuphakami2020@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </section>

        {/* Footer */}
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
      </div>
    </>
  );
}

export default App;
