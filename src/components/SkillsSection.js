import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Database, Cpu, Network } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 />,
    theme: {
      iconText: "text-cyan-400",
      hoverBorder: "hover:border-cyan-500/50",
      hoverShadow: "hover:shadow-cyan-500/20",
      tagText: "text-cyan-400/90",
      tagBg: "bg-cyan-400/10",
      tagBorder: "border-cyan-400/20",
      iconBg: "bg-cyan-400/10",
    },
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C", "C++"],
  },
  {
    title: "Web Development",
    icon: <Globe />,
    theme: {
      iconText: "text-fuchsia-400",
      hoverBorder: "hover:border-fuchsia-500/50",
      hoverShadow: "hover:shadow-fuchsia-500/20",
      tagText: "text-fuchsia-400/90",
      tagBg: "bg-fuchsia-400/10",
      tagBorder: "border-fuchsia-400/20",
      iconBg: "bg-fuchsia-400/10",
    },
    skills: ["React.js", "Next.js", "Node.js", "Express", "Django", "FastAPI", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "AI & Data Science",
    icon: <Cpu />,
    theme: {
      iconText: "text-purple-400",
      hoverBorder: "hover:border-purple-500/50",
      hoverShadow: "hover:shadow-purple-500/20",
      tagText: "text-purple-400/90",
      tagBg: "bg-purple-400/10",
      tagBorder: "border-purple-400/20",
      iconBg: "bg-purple-400/10",
    },
    skills: ["Machine Learning", "Deep Learning", "NLP", "LLM & RAG", "PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "Power BI"],
  },
  {
    title: "Database & Tools",
    icon: <Database />,
    theme: {
      iconText: "text-blue-400",
      hoverBorder: "hover:border-blue-500/50",
      hoverShadow: "hover:shadow-blue-500/20",
      tagText: "text-blue-400/90",
      tagBg: "bg-blue-400/10",
      tagBorder: "border-blue-400/20",
      iconBg: "bg-blue-400/10",
    },
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Git & GitHub", "Docker", "AWS", "Jupyter", "Figma"],
  },
  {
    title: "Networking & RPA",
    icon: <Network />,
    theme: {
      iconText: "text-emerald-400",
      hoverBorder: "hover:border-emerald-500/50",
      hoverShadow: "hover:shadow-emerald-500/20",
      tagText: "text-emerald-400/90",
      tagBg: "bg-emerald-400/10",
      tagBorder: "border-emerald-400/20",
      iconBg: "bg-emerald-400/10",
    },
    skills: ["Cisco CCNA", "UiPath (RPA)", "Cybersecurity", "Network Automation", "Wireshark"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient"
        >
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 transition-all duration-300 hover:bg-white/[0.08] ${category.theme.hoverBorder} ${category.theme.hoverShadow} group`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${category.theme.iconBg} ${category.theme.iconText} transition-colors duration-300`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold text-white transition-colors duration-300 group-hover:${category.theme.iconText}`}>{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-sm rounded-full border transition-colors duration-300 ${category.theme.tagText} ${category.theme.tagBg} ${category.theme.tagBorder}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

