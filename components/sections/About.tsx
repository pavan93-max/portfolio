"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="glass rounded-2xl p-8 md:p-12 border border-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 rounded-lg bg-black/20 border border-purple-start/20">
              <div className="text-3xl font-bold gradient-text mb-1">9.09</div>
              <div className="text-sm text-gray-400 font-mono">CGPA</div>
            </div>
            <div className="p-4 rounded-lg bg-black/20 border border-purple-start/20">
              <div className="text-3xl font-bold gradient-text mb-1">10+</div>
              <div className="text-sm text-gray-400 font-mono">ML Projects</div>
            </div>
            <div className="p-4 rounded-lg bg-black/20 border border-purple-start/20">
              <div className="text-3xl font-bold gradient-text mb-1">92%</div>
              <div className="text-sm text-gray-400 font-mono">RAG Success</div>
            </div>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I&apos;m a passionate <span className="gradient-text font-semibold">AI/ML Engineer</span> and{" "}
            <span className="gradient-text font-semibold">Data Science</span> researcher at IIIT Nagpur, specializing in
            building production-grade intelligent systems that solve complex real-world problems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            My research focuses on <span className="text-white font-medium font-mono">Large Language Models</span>,{" "}
            <span className="text-white font-medium font-mono">RAG architectures</span>,{" "}
            <span className="text-white font-medium font-mono">Computer Vision</span>, and{" "}
            <span className="text-white font-medium font-mono">Deep Learning</span>. I develop scalable ML pipelines
            with emphasis on model interpretability, performance optimization, and production deployment.
          </p>
          <div className="p-4 rounded-lg bg-black/20 border-l-4 border-purple-start mb-6">
            <p className="text-sm text-gray-400 font-mono leading-relaxed">
              <span className="text-purple-start">//</span>{" "}
              Current Research: Deepfake detection, LLM hallucination mitigation, 
              autonomous data science agents, and explainable AI systems.
            </p>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Currently pursuing B.Tech in Computer Science with Data Science specialization, maintaining a{" "}
            <span className="gradient-text font-semibold">GPA of 9.09</span>. Actively contributing to cutting-edge
            research with publications and open-source contributions in the ML/AI space.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

