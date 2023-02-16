import "../../styles/about.css";
import React from "react";
export function About() {
  return (
    <div className="home-body">
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
          <h5 className="list-skill">Front End</h5>
          <div className="skill-item skill-cont">
            <h5 className="skill-item">HTML</h5>
            <h5 className="skill-item">CSS</h5>
            <h5 className="skill-item">JavaScript</h5>
            <h5 className="skill-item">React</h5>
            <h5 className="skill-item">PWA</h5>
            <h5 className="skill-item">BootStrap</h5>
          </div>
          <h5 className="list-skill">Back End</h5>
          <div className="skill-item skill-cont">
            <h5 className="skill-item">Node</h5>
            <h5 className="skill-item">Express</h5>
            <h5 className="skill-item">MySQL</h5>
            <h5 className="skill-item">MongoDB</h5>
            <h5 className="skill-item">NoSql</h5>
          </div>
          <h5 className="list-skill">Other Tech</h5>
          <div className="skill-item skill-cont">
            <h5 className="skill-item">Insomnia</h5>
            <h5 className="skill-item">Postman</h5>
            <h5 className="skill-item">NPM</h5>
            <h5 className="skill-item">Jest</h5>
          </div>
        </section>
      </main>
    </div>
  );
}
