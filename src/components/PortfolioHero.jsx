// components/PortfolioHero.js
import { useEffect } from "react";
import { Github, Linkedin, FileText, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function PortfolioHero() {
  useEffect(() => {
    document.title = "B. Srinivasan | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 relative">
      <motion.div
        className="text-center flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 👤 Text Section */}
        <div className="md:text-left text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Hi, I'm{" "}
            <span className="text-green-400">B.Srinivasan</span>
            <br />
            Solutions born in logic,
            <br />
            shaped by design.
          </h1>
          <p className="mt-6 text-sm uppercase tracking-widest">
            Explore Works
          </p>
          <Link to="projects" smooth={true} duration={1500} offset={-50}>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
              View Projects
            </button>
          </Link>
        </div>

        {/* 🖼️ Profile Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-400/30 hover:scale-105 transition-all duration-500">
          <img
            src="/images/profile.jpg"
            alt="Srinivasan"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* 🌐 Footer Icons */}
      <footer className="absolute bottom-6 flex gap-6 text-white text-sm">
        <a
          href="https://github.com/BSrinivasan007"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/srinivasan-balaji-64b3262b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://www.instagram.com/__.s.r.i.n.i.v.a.s.a.n.__/?next=%2F"
          target="_blank"
        >
          <Instagram />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileText />
        </a>
      </footer>
    </div>
  );
}
