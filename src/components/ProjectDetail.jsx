import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, CheckCircle } from 'lucide-react';

export default function ProjectDetail({ project, onClose }) {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto"
    >
      {/* Background elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24 relative z-10">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {project.title}
            </h1>
            {project.liveLink && (
              <span className="px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-sm font-bold flex items-center gap-2 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                Hosted & Live
              </span>
            )}
          </div>

          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            {project.detailedDescription || project.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          {/* Tech Stack */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-cyan-400 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
              <ul className="space-y-4 text-gray-300">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-fuchsia-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-8 py-5 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center justify-center gap-3 text-lg"
            >
              View Live Project
              <ExternalLink size={24} />
            </a>
          )}
          
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-8 py-5 glass-card border border-white/10 hover:border-white/30 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 text-lg"
          >
            View Source on GitHub
            <Github size={24} />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
