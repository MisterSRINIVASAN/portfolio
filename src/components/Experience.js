import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "S.S.V Traders",
    role: "Web Developer Intern",
    period: "May 2024 – July 2024",
    location: "Remote",
    description: [
      "Developed high-impact website modules using HTML, CSS, and JavaScript with a focus on responsive design.",
      "Utilized Material-UI for a modular component library, ensuring a modern and scalable user interface.",
    ],
  },
  {
    company: "Bharat Intern",
    role: "Full-Stack Development Intern",
    period: "Dec 2023 – Jan 2024",
    location: "Remote",
    description: [
      "Mastered front-end (HTML/CSS/JS) and back-end technologies while optimizing server-side logic.",
      "Achieved a 25% reduction in load times and a 20% increase in user engagement through performance tuning.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient"
        >
          My Journey
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 glass-card-hover"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-cyan-400 font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-400 text-sm">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
