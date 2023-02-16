import "../../styles/work.css";
import React from "react";
export function Work() {
  return (
    <div className="home-body">
      <nav>
        <div className="nav-anchors">
          <a href="/">Home</a>
          <a href="/about">About Me</a>
        </div>
        <div className="nav-anchors">
          <a href="/work">My Work</a>
          <a href="/contact">Contact</a>
        </div>
      </nav>
      <main className="about-cont">
        <section className="bio">
          <p className="bio-text">
            <a href="https://town-crier-app.herokuapp.com/.">
              Town Crier Database -
            </a>
            - is a group project done using agile development practices. The
            purpose of this project is to allow users to connect with others
            based on their location. I developed the back end routing and
            database structure for this project
          </p>
          <p className="bio-text">
            <a href="https://immense-temple-15308.herokuapp.com/home">
              Tech Blog -
            </a>
            - A solo project I undertook to create a tech blog. Users can post
            and comment with others about all things tech
          </p>
          <p className="bio-text">
            <a href="https://efsoren.github.io/c6-weatherApp/">Weather App -</a>
            - A school assignment to create a website that can make calls to a
            restAPI and receive and format the data for user viewing
          </p>
          <p className="bio-text">
            <a href="https://jacee94.github.io/image-color-picker/">
              Color Theme Generator -
            </a>
            - Built in an agile development team. This project makes calls to
            restAPI's to receive images and select colors to generate a matching
            color scheme. I was in charge of the functionality for sending,
            receiving, and displaying color data.
          </p>
          <p className="bio-text">
            <a href="https://efsoren.github.io/c5-dailyPlanner/">
              Daily Planner -
            </a>
            - A school assignment to create a site to track daily activites and
            schedules that persists data in storage between page visits
          </p>
          <p className="bio-text">Source code for all projects</p>
          <p className="bio-text">
            <a href="https://github.com/EfSoren/Town-Crier">Town Crier -</a>
            <a href="https://github.com/EfSoren/c14-techBlog">- Tech Blog -</a>
            <a href="https://github.com/EfSoren/c6-weatherApp">
              - Weather App -
            </a>
            <a href="https://github.com/Jacee94/image-color-picker">
              - Color Theme Gen -
            </a>
            <a href="https://github.com/EfSoren/c5-dailyPlanner">
              - Daily Planner
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
