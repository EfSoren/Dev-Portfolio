import React, { useState } from "react";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Work } from "./pages/work";
import { Contact } from "./pages/contact";
import { Nav } from "./nav";
export function Project() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    console.log(currentPage);
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
