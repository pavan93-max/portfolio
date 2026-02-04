"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "pavanraut060@gmail.com",
    href: "mailto:pavanraut060@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9325541871",
    href: "tel:+919325541871",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "pavan93-max",
    href: "https://github.com/pavan93-max",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "pavan-raut93",
    href: "https://linkedin.com/in/pavan-raut93",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          className="glass rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-300 text-center mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-strong rounded-xl p-6 hover:bg-gradient-purple hover:text-white transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-purple group-hover:bg-white/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 group-hover:text-white/80 mb-1">
                        {method.label}
                      </div>
                      <div className="font-semibold">{method.value}</div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="mailto:pavanraut060@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-purple text-white font-semibold hover:bg-gradient-purple-hover transition-all"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

