import React from "react";
import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    {
      id: "01",
      title: "Web & App Development",
      description:
        "I build responsive, high-performance websites and apps using React.js, Node.js, Express, and MongoDB. My focus is clean code, fast loading, and intuitive UI.",
      tech: "React.js, Node.js, Tailwind CSS, Express.js",
    },
    {
      id: "02",
      title: "Data Analytics",
      description:
        "With Python and Pandas, I analyze and visualize data to uncover actionable insights. I've built dashboards and intelligent systems like smart PDF readers.",
      tech: "Python, Pandas, Matplotlib, APIs",
    },
    {
      id: "03",
      title: "UI/UX Design",
      description:
        "Design is how it works. I use Figma to plan, wireframe, and prototype intuitive interfaces that turn user goals into beautiful digital journeys.",
      tech: "Figma, Canva, Design Systems",
    },
  ];

  return (
    <section id="skills" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-300 to-pink-300 text-transparent bg-clip-text mb-4">
          What I Do & Know
        </h2>
        <p className="text-gray-400 mb-12">
          Technologies and skills I’ve applied in real-world development and creative projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#111] p-6 rounded-3xl relative shadow-xl hover:shadow-blue-500/20 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{skill.description}</p>
              <p className="text-xs text-blue-400 uppercase tracking-wide">{skill.tech}</p>
              <div className="absolute right-4 bottom-4 text-6xl text-white/5 font-extrabold">
                {skill.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
