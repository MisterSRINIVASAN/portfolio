import React, { useState, useEffect } from "react";
import PortfolioHero from "./components/PortfolioHero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SkillsSection from "./components/SkillsSection";
import Experience from "./components/Experience";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Throttled mouse position update
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];


  return (
    <div className="bg-[#050505] min-h-screen selection:bg-fuchsia-500/40 overflow-x-hidden relative">
      {/* 3D Perspective Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ perspective: "1500px" }}>
        <motion.div 
          className="absolute inset-[-10%] bg-grid opacity-20"
          animate={{
            rotateX: (mousePos.y / window.innerHeight - 0.5) * 5,
            rotateY: (mousePos.x / window.innerWidth - 0.5) * -5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      </div>

      {/* Subtle Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-fuchsia-500/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/[0.08] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-cyan-400 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold text-gradient cursor-pointer"
        >
          Srinivasan.
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex glass-card px-8 py-3 gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={1000}
              offset={-100}
              className="cursor-pointer text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 glass-card"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-24 left-6 right-6 glass-card p-6 flex flex-col gap-4 md:hidden z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={1000}
                offset={-100}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer text-gray-400 hover:text-cyan-400 transition-colors text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Page Sections */}
      <main className="relative z-10 w-full space-y-0 perspective-container">
        <PortfolioHero mousePos={mousePos} />
        <AboutMe />
        <SkillsSection />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}


export default App;

