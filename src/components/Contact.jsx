import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <section className="contact container" id="contact">
      <Title title="Contact" />

      <div className="flex social">
        <a href="https://www.linkedin.com/in/roshan-punmagar/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="mailto:rajuphakami2020@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
