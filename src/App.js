import React from "react";
import PortfolioHero from "./components/PortfolioHero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Conclusion from "./components/Conclusion";
import Contact from "./components/Contact";
import SkillsSection from "./components/SkillsSection";
import BackgroundGraphic from "./components/BackgroundGraphic";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="relative bg-black text-white">
      {/* 🌌 Animated Background */}
      <BackgroundGraphic />

      {/* ✨ Top Thin Gradient Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 via-green-400 to-blue-500 z-[60]" />

      {/* 🚀 Sticky Navigation */}
      <nav className="flex justify-center gap-8 py-6 bg-black text-white fixed top-1 w-full z-[50] shadow-md">
        <Link
          to="about"
          smooth={true}
          duration={2000}
          offset={-50}
          className="cursor-pointer hover:text-cyan-400 transition-colors"
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={2000}
          offset={-50}
          className="cursor-pointer hover:text-cyan-400 transition-colors"
        >
          What I Do
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={2000}
          offset={-50}
          className="cursor-pointer hover:text-cyan-400 transition-colors"
        >
          Projects
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={2000}
          offset={-50}
          className="cursor-pointer hover:text-cyan-400 transition-colors"
        >
          Experience
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={2000}
          offset={-50}
          className="cursor-pointer hover:text-cyan-400 transition-colors"
        >
          Contact
        </Link>
      </nav>

      {/* 🔥 Page Sections */}
      <div className="pt-28">
        <PortfolioHero />
        <AboutMe />
        <SkillsSection />
        <Projects />
        <Experience />
        <Conclusion />
        <Contact />
      </div>
    </div>
  );
}

export default App;
