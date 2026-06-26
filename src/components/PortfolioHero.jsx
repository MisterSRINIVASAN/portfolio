import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Eye } from "lucide-react";
import { Link } from "react-scroll";

export default function PortfolioHero({ mouseX, mouseY, isTouchDevice }) {
  const [typedText, setTypedText] = useState("");
  const fullText = "ERP Developer Intern @ Logitech | Full-Stack Developer | AI/ML Engineer";
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Motion transforms
  const titleRotateX = useTransform(mouseY, y => isTouchDevice ? 0 : (y / (typeof window !== 'undefined' ? window.innerHeight : 1000) - 0.5) * 10);
  const titleRotateY = useTransform(mouseX, x => isTouchDevice ? 0 : (x / (typeof window !== 'undefined' ? window.innerWidth : 1000) - 0.5) * -10);

  const textMoveX = useTransform(mouseX, x => isTouchDevice ? 0 : (x / (typeof window !== 'undefined' ? window.innerWidth : 1000) - 0.5) * 15);
  const textMoveY = useTransform(mouseY, y => isTouchDevice ? 0 : (y / (typeof window !== 'undefined' ? window.innerHeight : 1000) - 0.5) * 15);

  const socialMoveX = useTransform(mouseX, x => isTouchDevice ? 0 : (x / (typeof window !== 'undefined' ? window.innerWidth : 1000) - 0.5) * 20);
  const socialMoveY = useTransform(mouseY, y => isTouchDevice ? 0 : (y / (typeof window !== 'undefined' ? window.innerHeight : 1000) - 0.5) * 20);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = "B. Srinivasan | Portfolio";
  }, []);


  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">

      {/* Background blobs for depth with parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-6"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-cyan-400 font-mono text-sm tracking-widest mb-4 uppercase h-6"
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </motion.p>
        
        <motion.div
          style={{
            rotateX: titleRotateX,
            rotateY: titleRotateY,
            translateZ: 50,
            transformStyle: "preserve-3d"
          }}
          className="perspective-container will-change-transform"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            B. <span className="text-gradient">Srinivasan</span>
          </h1>
        </motion.div>
        
        <motion.p 
          style={{
            translateZ: 20,
            x: textMoveX,
            y: textMoveY,
          }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed will-change-transform"
        >
          Solutions born in logic, shaped by design. Crafting scalable web applications 
          and AI-driven insights from <span className="text-white">Chennai, India</span>.
        </motion.p>

        <div className="relative z-50 flex items-center justify-center gap-6 mb-12">
          {[
            { icon: <Github size={24} />, href: "https://github.com/MisterSRINIVASAN", label: "GitHub" },
            { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/srinivasan-balaji-64b3262b8/", label: "LinkedIn" },
            { icon: <Mail size={24} />, href: "mailto:kbcsrinivasan@gmail.com", label: "Email" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              style={{
                x: socialMoveX,
                y: socialMoveY,
              }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 211, 238, 0.1)", borderColor: "rgba(34, 211, 238, 0.3)" }}
              className="text-gray-400 transition-all p-3 glass-card block border border-white/10 will-change-transform"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative z-50 flex flex-wrap gap-4 justify-center"
        >
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            offset={-50}
            className="cursor-pointer px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            Explore Works
          </Link>
          <a
            href="/Srinivasan_Resume (2).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-4 border border-fuchsia-500/30 bg-fuchsia-500/10 hover:bg-fuchsia-500/20 text-fuchsia-100 font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]"
          >
            <Eye size={18} className="group-hover:scale-110 transition-transform" />
            Web Dev Resume
          </a>
          <a
            href="/Srini_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-4 border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-100 font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <Eye size={18} className="group-hover:scale-110 transition-transform" />
            AI/ML Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-gray-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

