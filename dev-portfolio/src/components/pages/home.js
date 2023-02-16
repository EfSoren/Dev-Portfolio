import "../../styles/home.css";
import React from "react";
export function Home({ currentPage, handlePageChange }) {
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
      <main className="main-cont">
        <h1>Hi, I'm Ethan.</h1>
        <h2>Welcome to my portfolio,</h2>
        <h3>please look around.</h3>
        <div className="btn-cont">
          <div className="link-btn">
            About Me
            <a href="/about"> </a>
          </div>
          <div className="link-btn">
            My Work
            <a href="/work"> </a>
          </div>
          <div className="link-btn">
            Contact Me
            <a href="/contact"> </a>
          </div>
        </div>
      </main>
      <footer> © 2023 Ethan Sorensen</footer>
    </div>
  );
}
