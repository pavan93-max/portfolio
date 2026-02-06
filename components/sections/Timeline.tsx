"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Calendar, Trophy } from "lucide-react";

const timelineItems = [
  {
    type: "education",
    icon: GraduationCap,
    title: "B.Tech CSE (Data Science)",
    organization: "IIIT Nagpur",
    period: "2023–2027",
    details: "GPA: 9.09",
    color: "from-purple-start to-purple-end",
  },
  {
    type: "experience",
    icon: Briefcase,
    title: "Gen-AI Engineer Intern",
    organization: "QuickIntell",
    period: "Sep 2025 – Nov 2025",
    details: [
      "LLM automation → 40% effort reduction",
      "FastAPI services ~65 req/min, 99.9% uptime",
      "RAG success 92%",
      "−0.7s latency",
    ],
    color: "from-purple-end to-purple-start",
  },
  {
    type: "achievement",
    icon: Trophy,
    title: "Winner — UI to Code Hackathon",
    organization: "IIIT Nagpur",
    period: "2024",
    details: "Winner — UI to Code Hackathon, IIIT Nagpur",
    color: "from-purple-start to-purple-end",
  },
  {
    type: "achievement",
    icon: Trophy,
    title: "Winner — Hackwise Hackathon",
    organization: "IIM Indore",
    period: "2024",
    details: "Winner — Hackwise Hackathon, IIM Indore",
    color: "from-purple-end to-purple-start",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Timeline
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-start via-purple-end to-purple-start transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center glass-strong`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-32 md:ml-0 md:w-1/2 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left md:ml-auto"
                    }`}
                  >
                    <div className="glass rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1 gradient-text">{item.title}</h3>
                      <p className="text-lg text-gray-300 mb-3">{item.organization}</p>
                      {typeof item.details === "string" ? (
                        <p className="text-gray-400">{item.details}</p>
                      ) : (
                        <ul className="space-y-1">
                          {item.details.map((detail, i) => (
                            <li key={i} className="text-gray-400 text-sm">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

