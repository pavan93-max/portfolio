"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Brain, Cpu, Database } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-start/10 via-base to-purple-end/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,47,247,0.1),transparent_50%)]" />
      
      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="neural-network" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-purple-start" />
              <line x1="20" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-purple-start/30" />
              <line x1="20" y1="20" x2="20" y2="40" stroke="currentColor" strokeWidth="0.5" className="text-purple-start/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-network)" />
        </svg>
      </div>
      
      {/* Floating ML icons */}
      <motion.div
        className="absolute top-20 left-10 text-purple-start/20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Brain className="w-16 h-16" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-purple-end/20"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Cpu className="w-12 h-12" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-1/4 text-purple-start/20"
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Database className="w-14 h-14" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border border-purple-start/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-purple-start" />
            <span className="text-sm font-medium">AI/ML Engineer | Data Science</span>
            <span className="text-xs text-gray-400 font-mono">• Research</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text">Pavan Raut</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Building scalable systems and intelligent ML solutions, one project at a time.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono">Deep Learning</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-start animate-pulse" />
              <span className="font-mono">LLM Systems</span>
            </span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-end animate-pulse" />
              <span className="font-mono">Computer Vision</span>
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-purple text-white font-semibold hover:bg-gradient-purple-hover transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full glass text-white font-semibold hover:glass-strong transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }}
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}

