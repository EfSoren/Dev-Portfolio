import "../../styles/about.css";
import React from "react";
export function About({ currentPage, handlePageChange }) {
  return (
    <div className="home-body">
      <nav>
        <div className="nav-anchors">
          <a href="#home" onClick={() => handlePageChange("Home")}>
            Home
          </a>
          <a href="#about" onClick={() => handlePageChange("About")}>
            About Me
          </a>
        </div>
        <div className="nav-anchors">
          <a href="#work" onClick={() => handlePageChange("Work")}>
            My Work
          </a>
          <a href="#contact" onClick={() => handlePageChange("Contact")}>
            Contact
          </a>
        </div>
      </nav>
      <main className="about-cont">
        <section className="bio">
          <p>Hey there, my name is Ethan Sorensen.</p>
          <p>
            I am a full stack web developer located in Lehi, Utah. I recently
            completed a web dev course from the University of Utah and loved
            every minute of it!
          </p>
          <p>
            During my education I learned a large array of new skills including
            HTMl, CSS, JavaScript, React. As well as back end skills like Node,
            Express, MySQL, MongoDB, NoSQL, Postman, and Insomnia
          </p>
          <p>
            I have a love for web development and a strong desire to continue
            learning as new things come my way
          </p>
        </section>
        <section className="skills-list">
          <p className="skill-title">Skills</p>
          <text className="list-skill">Front End</text>
          <div className="skill-item skill-cont">
            <text className="skill-item">HTML</text>
            <text className="skill-item">CSS</text>
            <text className="skill-item">JavaScript</text>
            <text className="skill-item">React</text>
            <text className="skill-item">PWA</text>
            <text className="skill-item">BootStrap</text>
          </div>
          <text className="list-skill">Back End</text>
          <div className="skill-item skill-cont">
            <text className="skill-item">Node</text>
            <text className="skill-item">Express</text>
            <text className="skill-item">MySQL</text>
            <text className="skill-item">MongoDB</text>
            <text className="skill-item">NoSql</text>
          </div>
          <text className="list-skill">Other Tech</text>
          <div className="skill-item skill-cont">
            <text className="skill-item">Insomnia</text>
            <text className="skill-item">Postman</text>
            <text className="skill-item">NPM</text>
            <text className="skill-item">Jest</text>
          </div>
        </section>
      </main>
    </div>
  );
}
