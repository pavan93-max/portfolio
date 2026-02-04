"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Core Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "ML/AI Domains",
    icon: "🧠",
    skills: [
      { name: "LLM & NLP", level: 90 },
      { name: "RAG Systems", level: 88 },
      { name: "Computer Vision", level: 85 },
      { name: "Deep Learning", level: 92 },
    ],
  },
  {
    title: "ML Frameworks",
    icon: "⚙️",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Hugging Face", level: 88 },
      { name: "LangChain", level: 82 },
    ],
  },
  {
    title: "Production Stack",
    icon: "🚀",
    skills: [
      { name: "FastAPI", level: 90 },
      { name: "Docker", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "React", level: 75 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="glass rounded-xl p-6 border border-white/5 hover:border-purple-start/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold gradient-text">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-1.5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-300 font-mono">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-black/30 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-start to-purple-end rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

