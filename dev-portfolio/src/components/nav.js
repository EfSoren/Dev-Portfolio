import React from "react";

export function Nav({ currentPage, handlePageChange }) {
  return (
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
  );
}
