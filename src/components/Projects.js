import { motion } from "framer-motion";

const projects = [
  {
    title: "Chat Application",
    tech: "React.js, Node.js, Socket.io",
    description:
      "A real-time chat application enabling users to join rooms, send messages, and communicate instantly. Built using Socket.io for WebSocket support and real-time interactions.",
  },
  {
    title: "Online Job Seeking Application",
    tech: "HTML, CSS, JavaScript, Django",
    description:
      "A job-seeking web app allowing users to create profiles, upload resumes, and apply for jobs. Built with Django for backend logic and dynamic routing.",
  },
  {
    title: "PDF Reader using RAG",
    tech: "Python, Streamlit, Google API, RAG",
    description:
      "An intelligent system that reads PDF documents and allows question-answering using Retrieval-Augmented Generation. Built with Streamlit UI and integrates Google API.",
  },
  {
    title: "AI Image Generator using DALL·E",
    tech: "Hugging Face Transformers, Google API, Streamlit",
    description:
      "A web app to generate images from text prompts using DALL·E model. Seamlessly integrates Hugging Face's transformer model with a Streamlit frontend.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" />

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Projects
        </h2>
        <p className="text-gray-400 mb-12">
          A collection of real-world projects I’ve built with modern tech stacks.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-tr from-[#1e1e1e] to-[#2a2a2a] p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-pink-500 transition duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2 text-blue-400">{project.title}</h3>
              <p className="text-gray-400 mb-2 text-sm italic">{project.tech}</p>
              <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
