"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Trophy, TrendingUp, Target } from "lucide-react";

interface LeetCodeStats {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  contestRating: number;
  ranking: number;
}

export default function LeetCode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch("/api/leetcode");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to fetch LeetCode stats");
        }
        const data = await response.json();
        
        // Check if response has error field
        if (data.error) {
          throw new Error(data.message || data.error);
        }
        
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load LeetCode stats");
        console.error("LeetCode fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  return (
    <section id="leetcode" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          LeetCode
        </motion.h2>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-start"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12 text-red-400">{error}</div>
        ) : stats ? (
          <motion.div
            className="glass rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-purple flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">LeetCode Profile</h3>
                <p className="text-gray-400 text-sm">pavanraut93</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{stats.totalSolved}</div>
                <div className="text-sm text-gray-400">Total Solved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{stats.easy}</div>
                <div className="text-sm text-gray-400">Easy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stats.medium}</div>
                <div className="text-sm text-gray-400">Medium</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400 mb-2">{stats.hard}</div>
                <div className="text-sm text-gray-400">Hard</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-strong rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-5 h-5 text-purple-start" />
                  <span className="font-semibold">Contest Rating</span>
                </div>
                <div className="text-3xl font-bold gradient-text">{stats.contestRating}</div>
              </div>

              <div className="glass-strong rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-purple-start" />
                  <span className="font-semibold">Global Ranking</span>
                </div>
                <div className="text-3xl font-bold gradient-text">#{stats.ranking.toLocaleString()}</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://leetcode.com/u/pavanraut93"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-purple text-white font-semibold hover:bg-gradient-purple-hover transition-all"
              >
                <Target className="w-5 h-5" />
                <span>View Profile</span>
              </a>
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

