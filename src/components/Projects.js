import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Autonomous Research Agent",
    tech: ["Python", "FastAPI", "LangGraph", "React"],
    description: "An autonomous agent system for conducting intelligent research and data analysis.",
    githubLink: "https://github.com/MisterSRINIVASAN/Autonomous-Research-Agent"
  },
  {
    title: "Anomaly Detection System",
    tech: ["Python", "Machine Learning", "Streamlit"],
    description: "Real-time anomaly detection system with interactive dashboards.",
    githubLink: "https://github.com/MisterSRINIVASAN/Anomaly-Detection-System"
  },
  {
    title: "Chatty (Real-Time Chat)",
    tech: ["React.js", "Express", "Node.js", "MongoDB"],
    description: "Full-stack chat application facilitating real-time communication with user authentication.",
    githubLink: "https://github.com/MisterSRINIVASAN/CHAT-APP"
  },
  {
    title: "Vendor Management System",
    tech: ["Python", "FastAPI", "Streamlit", "SQLite"],
    description: "Engineered a comprehensive system to streamline vendor onboarding, product tracking, and order management.",
    githubLink: "https://github.com/MisterSRINIVASAN/Vendor-ManagementSystem"
  },
  {
    title: "Office Automation System",
    tech: ["Python", "Django", "SQLite", "Bootstrap"],
    description: "Developed a web-based suite to manage office operations like order processing and customer details.",
    githubLink: "https://github.com/MisterSRINIVASAN/Office-automation-system"
  },
  {
    title: "Data Science Projects",
    tech: ["Python", "Pandas", "Scikit-Learn", "Jupyter"],
    description: "A collection of data science and machine learning projects and explorations.",
    githubLink: "https://github.com/MisterSRINIVASAN/DATA-SCIENCE"
  },
  {
    title: "PDF Reader / Analyzer",
    tech: ["Python", "LLM", "RAG", "Google API"],
    description: "A RAG-based system utilizing Google APIs to analyze PDFs and provide context-aware answers.",
    githubLink: "https://github.com/MisterSRINIVASAN/Pdf-Reader"
  },
  {
    title: "AI Image Generator",
    tech: ["Python", "PyTorch", "Hugging Face"],
    description: "Integrated Hugging Face Transformers to create a text-to-image generation application.",
    githubLink: "https://github.com/MisterSRINIVASAN/IMAGE-GENERATOR"
  },
  {
    title: "Boutique Project",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    description: "A modern e-commerce web application for a boutique clothing store.",
    githubLink: "https://github.com/MisterSRINIVASAN/Boutique-Project"
  },
  {
    title: "My Portfolio",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    description: "Personal developer portfolio showcasing my projects, skills, and experience.",
    githubLink: "https://github.com/MisterSRINIVASAN/portfolio"
  },
  {
    title: "GitHub Profile",
    tech: ["Markdown", "HTML"],
    description: "A customized and professional GitHub profile README to showcase my developer journey.",
    githubLink: "https://github.com/MisterSRINIVASAN/MisterSRINIVASAN"
  },
  {
    title: "Git Practice",
    tech: ["Git", "GitHub"],
    description: "Repository used for practicing advanced Git commands and version control workflows.",
    githubLink: "https://github.com/MisterSRINIVASAN/git-practice"
  }
];

const themes = [
  { // Cyan
    hoverBorder: "hover:border-cyan-500/50",
    hoverShadow: "hover:shadow-cyan-500/20",
    titleHover: "group-hover:text-cyan-400",
    tagText: "text-cyan-400/90",
    tagBg: "bg-cyan-400/10",
    tagBorder: "border-cyan-400/20",
  },
  { // Fuchsia
    hoverBorder: "hover:border-fuchsia-500/50",
    hoverShadow: "hover:shadow-fuchsia-500/20",
    titleHover: "group-hover:text-fuchsia-400",
    tagText: "text-fuchsia-400/90",
    tagBg: "bg-fuchsia-400/10",
    tagBorder: "border-fuchsia-400/20",
  },
  { // Emerald
    hoverBorder: "hover:border-emerald-500/50",
    hoverShadow: "hover:shadow-emerald-500/20",
    titleHover: "group-hover:text-emerald-400",
    tagText: "text-emerald-400/90",
    tagBg: "bg-emerald-400/10",
    tagBorder: "border-emerald-400/20",
  },
  { // Amber
    hoverBorder: "hover:border-amber-500/50",
    hoverShadow: "hover:shadow-amber-500/20",
    titleHover: "group-hover:text-amber-400",
    tagText: "text-amber-400/90",
    tagBg: "bg-amber-400/10",
    tagBorder: "border-amber-400/20",
  },
  { // Purple
    hoverBorder: "hover:border-purple-500/50",
    hoverShadow: "hover:shadow-purple-500/20",
    titleHover: "group-hover:text-purple-400",
    tagText: "text-purple-400/90",
    tagBg: "bg-purple-400/10",
    tagBorder: "border-purple-400/20",
  },
  { // Rose
    hoverBorder: "hover:border-rose-500/50",
    hoverShadow: "hover:shadow-rose-500/20",
    titleHover: "group-hover:text-rose-400",
    tagText: "text-rose-400/90",
    tagBg: "bg-rose-400/10",
    tagBorder: "border-rose-400/20",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient"
        >
          Selected Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const theme = themes[index % themes.length];
            return (
              <div key={index} className="group perspective-container">
                <motion.div
                  onClick={() => window.open(project.githubLink, '_blank')}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: index % 2 === 0 ? 8 : -8,
                    rotateY: index % 2 === 0 ? -8 : 8,
                    translateZ: 30
                  }}
                  className={`glass-card p-6 flex flex-col h-full border border-white/5 transition-all duration-500 cursor-pointer ${theme.hoverBorder} ${theme.hoverShadow}`}
                >
                <h3 className={`text-xl font-bold text-white mb-3 transition-colors ${theme.titleHover}`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className={`text-[10px] uppercase tracking-wider font-bold py-1 px-2 rounded border ${theme.tagText} ${theme.tagBg} ${theme.tagBorder}`}>
                      {t}
                    </span>
                  ))}
                </div>
  
                <div className="flex gap-4 border-t border-white/5 pt-4 mt-auto">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                    <Github size={18} />
                  </a>
                </div>
              </motion.div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

