import React, { useState, useEffect } from "react";
import PortfolioHero from "./components/PortfolioHero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SkillsSection from "./components/SkillsSection";
import Experience from "./components/Experience";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, AnimatePresence } from "framer-motion";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Use MotionValues instead of React state for mouse position to prevent re-renders
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth springs for cursor followers
  const cursorX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
  const cursorY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });
  const dotX = useSpring(mouseX, { stiffness: 300, damping: 20, mass: 0.2 });
  const dotY = useSpring(mouseY, { stiffness: 300, damping: 20, mass: 0.2 });

  // Transforms for background grid
  const bgRotateX = useTransform(mouseY, y => {
    if (isTouchDevice) return 0;
    const height = typeof window !== 'undefined' ? window.innerHeight : 1000;
    return (y / height - 0.5) * 5;
  });
  const bgRotateY = useTransform(mouseX, x => {
    if (isTouchDevice) return 0;
    const width = typeof window !== 'undefined' ? window.innerWidth : 1000;
    return (x / width - 0.5) * -5;
  });

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
    };
    const touch = checkTouch();
    setIsTouchDevice(touch);

    if (touch) return; // Disable mouse tracking on touch devices

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
          className="absolute inset-[-10%] bg-grid opacity-20 will-change-transform"
          style={{
            rotateX: bgRotateX,
            rotateY: bgRotateY,
          }}
        />
      </div>

      {/* Subtle Background Glows */}
      <div className="hidden md:block fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-fuchsia-500/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden md:block fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/[0.08] rounded-full blur-[120px] pointer-events-none" />
      
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

      {/* Custom Cursor */}
      {!isTouchDevice && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 pointer-events-none z-[999] mix-blend-difference hidden md:block will-change-transform"
            style={{
              x: useTransform(cursorX, x => x - 16),
              y: useTransform(cursorY, y => y - 16),
            }}
          />
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 rounded-full bg-fuchsia-500 pointer-events-none z-[1000] hidden md:block will-change-transform"
            style={{
              x: useTransform(dotX, x => x - 4),
              y: useTransform(dotY, y => y - 4),
            }}
          />
        </>
      )}

      {/* Page Sections */}
      <main className="relative z-10 w-full space-y-0 cursor-none md:cursor-auto">
        <PortfolioHero mouseX={mouseX} mouseY={mouseY} isTouchDevice={isTouchDevice} />
        <AboutMe />
        <SkillsSection />
        <Experience />
        <Projects onProjectSelect={setSelectedProject} />
        <Contact />
      </main>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}


export default App;

