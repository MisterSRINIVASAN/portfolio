import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Development Intern",
    company: "SSV Traders (LTTS)",
    duration: "Aug 2024 – Sep 2024",
    details:
      "Developed a modular frontend module to showcase SSV's engineering services using HTML, JavaScript, and Material UI. Enhanced UI performance and collaborated with backend teams using Agile methodology."
  },
  {
    role: "Full-Stack Developer Intern",
    company: "BharatIntern",
    duration: "Jul 2024 – Aug 2024",
    details:
      "Built scalable full-stack applications using Node.js, Express, and MongoDB. Improved website load time by 25% and increased user engagement by 20%."
  },
  {
    role: "Frontend Developer Intern",
    company: "Internzo",
    duration: "May 2024",
    details:
      "Created responsive web interfaces with HTML, CSS, and JavaScript. Focused on UI/UX enhancements during a fast-paced 4-week internship."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-cyan-400 pl-6 relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
              <p className="text-cyan-400 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
              <p className="text-gray-300 leading-relaxed">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
