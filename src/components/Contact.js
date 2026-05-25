import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {

  const contactInfo = [
    { icon: <Mail size={20} />, text: "kbcsrinivasan@gmail.com", href: "mailto:kbcsrinivasan@gmail.com" },
    { icon: <Phone size={20} />, text: "9841723638", href: "tel:9841723638" },
    { icon: <MapPin size={20} />, text: "Chennai, India", href: "#" },
  ];

  const socials = [
    { icon: <Github size={24} />, href: "https://github.com/MisterSRINIVASAN", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/srinivasan-balaji-64b3262b8/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gradient"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's build something together!</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Whether you have a question or just want to say hi, my inbox is always open. 
              I'm always looking for new opportunities and challenges.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.href}
                  className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-cyan-400/10 transition-colors text-cyan-400">
                    {info.icon}
                  </div>
                  <span className="font-medium">{info.text}</span>
                </a>
              ))}
            </div>

            <div className="flex gap-4 mt-12">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 211, 238, 0.1)", borderColor: "rgba(34, 211, 238, 0.3)" }}
                  className="text-gray-500 hover:text-cyan-400 transition-all p-3 bg-white/5 rounded-xl border border-white/5 block"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

