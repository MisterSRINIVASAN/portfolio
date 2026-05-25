import React from "react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-gradient"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed"
        >
          <p>
            I'm <span className="text-white font-semibold">B. Srinivasan</span>, 
            a skilled and adaptable <span className="text-pink-500">Full-Stack Developer</span>, 
            <span className="text-fuchsia-500"> AI/ML Engineer</span>, 
            <span className="text-purple-400"> ML Enthusiast</span>, and 
            <span className="text-cyan-400"> Data Analyst</span> with a passion for problem-solving 
            and optimal thinking.
          </p>
          
          <p>
            Based in Chennai, India, I specialize in designing and developing robust, 
            scalable web applications. My expertise spans across <span className="text-white">Python, 
            React, Node.js, and AI-driven solutions</span>. I thrive on turning complex 
            logic into seamless digital experiences.
          </p>

          <p className="text-base text-gray-500 pt-4">
            Currently pursuing my B.E. in Computer Science and Engineering at 
            <span className="text-white"> Chennai Institute of Technology</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

