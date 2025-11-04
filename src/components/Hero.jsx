import React from "react";
import roshan from "../assets/roshan.jpeg";

const Hero = () => {
  return (
    <>
      <section className="hero-section container" id="hero">
        <div className="grid hero">
          <div className="left flex">
            <div>
              Hi! I am <span>Roshan Magar.</span>
            </div>
            <div className="tag">Soft. Developer</div>
            <p>I love coding.</p>
            <div>
              <a href="/RoshanPunmagar.pdf">
                <button>
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="right flex">
            <img src={roshan} alt="Roshan's Profile" />
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
    </>
  );
};

export default Hero;
