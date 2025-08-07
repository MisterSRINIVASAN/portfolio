import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
          About Me
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Hello! I'm <strong>B. Srinivasan</strong>, a passionate full-stack developer with a knack for solving real-world problems through clean, scalable code.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          With hands-on experience in React, Node.js, Django, and MongoDB, I bridge the gap between design and logic to craft performant, responsive applications.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I've contributed to diverse projects — from intelligent PDF readers and job portals to DALL·E-powered image generators — always focused on performance, user experience, and real-world value.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I’m driven by curiosity, creativity, and a desire to turn abstract ideas into seamless digital experiences. Whether it's enhancing UI/UX, integrating APIs, or building from the ground up, I bring clarity and energy to every line of code.
        </p>

        <p className="text-base text-center">
          Want to dive deeper into my tech journey?{" "}
          <a
            href="/resume.pdf"
            className="underline text-blue-400 hover:text-blue-500"
            download
          >
            Check out my resume.
          </a>
        </p>
      </div>
    </motion.section>
  );
}
