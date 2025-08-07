import { motion } from "framer-motion";

export default function BackgroundGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* Blurred colored blob 1 */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] 
                   bg-gradient-to-r from-teal-300 to-indigo-500 
                   opacity-30 rounded-full filter blur-3xl 
                   animate-spin mix-blend-overlay"
      ></div>

      {/* Blurred colored blob 2 */}
      <div
        className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] 
                   bg-gradient-to-r from-sky-400 to-purple-600 
                   opacity-20 rounded-full filter blur-3xl 
                   animate-bounce mix-blend-overlay"
      ></div>

      {/* Optional 3rd blob for depth */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   w-[200px] h-[200px] bg-gradient-to-r from-pink-400 to-yellow-300 
                   opacity-10 rounded-full filter blur-2xl 
                   animate-pulse mix-blend-overlay"
      ></div>

      {/* 🌟 Background Image SVGs (Animated on Scroll) */}
      <motion.img
        src="/images/hero-dev.svg"
        alt="developer background"
        className="absolute top-[20%] left-[50%] w-[500px] max-w-full translate-x-[-50%] z-10 opacity-60"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.img
        src="/images/skills.svg"
        alt="skills graphic"
        className="absolute bottom-[10%] left-[10%] w-[300px] z-10 opacity-60"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.img
        src="/images/projects.svg"
        alt="projects graphic"
        className="absolute top-[30%] right-[10%] w-[250px] z-10 opacity-60"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.img
        src="/images/experience.svg"
        alt="experience graphic"
        className="absolute bottom-[20%] right-[15%] w-[300px] z-10 opacity-60"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      <motion.img
        src="/images/contact-me.svg"
        alt="contact graphic"
        className="absolute top-[5%] left-[5%] w-[200px] z-10 opacity-60"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </div>
  );
}
