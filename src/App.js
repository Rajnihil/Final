
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Events from "./Events";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";

document.body.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Helvetica Neue', Arial, sans-serif";


const PAGES = {
  Home: Home,
  Events: Events,
  Team: Team,
  Contact: Contact,
};


function App() {
 
  const [currentPage, setCurrentPage] = useState("Home");

  
  useEffect(() => {
    const readHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (PAGES[hash]) setCurrentPage(hash);
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const PageComponent = PAGES[currentPage] || Home;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#fff" }}>
      
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      
      <main style={{ flex: 1 }}>
        <PageComponent onNavigate={navigate} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
