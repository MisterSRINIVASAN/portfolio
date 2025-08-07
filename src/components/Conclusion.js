// components/Conclusion.js
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Conclusion() {
  return (
    <motion.section
      id="conclusion"
      className="bg-black text-white px-6 py-24 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">
        Don't be a stranger!
      </h2>

      <p className="text-gray-300 text-lg mb-10">
        I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.
      </p>

      {/* 🔗 Social Links with Icons */}
      <div className="flex justify-center gap-8 mb-12">
        <a
          href="https://github.com/BSrinivasan007"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 text-white transition"
        >
          <Github className="w-6 h-6" />
        </a>

        <a
          href="https://www.linkedin.com/in/srinivasan-balaji-64b3262b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 text-white transition"
        >
          <Linkedin className="w-6 h-6" />
        </a>

        <a
          href="https://www.instagram.com/__.s.r.i.n.i.v.a.s.a.n.__"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 text-white transition"
        >
          <Instagram className="w-6 h-6" />
        </a>

        <a
          href="mailto:kbcsrinivasan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 text-white transition"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>

      <p className="text-xl font-semibold text-gray-200 leading-relaxed max-w-2xl mx-auto">
        Thanks for visiting! If you believe I’d be a great fit for your team or project, send me an{" "}
        <a
          href="mailto:kbcsrinivasan@gmail.com"
          className="underline text-sky-400 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          email
        </a>{" "}
        — I'd love to connect.
      </p>
    </motion.section>
  );
}
