// components/Contact.js
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, FileText } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-black text-white py-24 px-6 flex flex-col items-center"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-xl w-full text-center">
        <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
          Contact Me
        </h2>

        {/* ✅ Formspree-powered Contact Form */}
        <form
          action="https://formspree.io/f/mrbloplp"
          method="POST"
          className="space-y-6 mb-12"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* 🔗 Social Icons */}
        <div className="flex justify-center gap-6 text-white text-sm mb-6">
          <a
            href="https://github.com/BSrinivasan007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/srinivasan-balaji-64b3262b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/__.s.r.i.n.i.v.a.s.a.n.__"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="mailto:kbcsrinivasan@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FileText className="w-6 h-6" />
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          Thanks for visiting! Let’s build something amazing together.
        </p>
      </div>
    </motion.section>
  );
}
