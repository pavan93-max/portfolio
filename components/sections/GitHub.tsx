"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Star, GitFork, Calendar, Code, ExternalLink } from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  language: string;
  topics: string[];
}

const featuredRepos = [
  "deepfake-detection",
  "llm-hallucination",
  "moodwise",
  "autonomous-ds-agents",
];

export default function GitHub() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFeatured, setShowFeatured] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/pavan93-max/repos?sort=updated&per_page=100");
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const displayRepos = showFeatured
    ? repos.filter((repo) => featuredRepos.some((name) => repo.name.toLowerCase().includes(name.toLowerCase())))
    : repos;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0 gradient-text">
            GitHub Repositories
          </h2>

          <div className="flex items-center gap-2 glass rounded-full p-1">
            <button
              onClick={() => setShowFeatured(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                showFeatured
                  ? "bg-gradient-purple text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setShowFeatured(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !showFeatured
                  ? "bg-gradient-purple text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All Repos
            </button>
          </div>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-start"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayRepos.slice(0, 9).map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-6 hover:glass-strong transition-all group block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-gray-400" />
                    <h3 className="text-lg font-bold group-hover:gradient-text transition-all">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-start transition-colors" />
                </div>

                {repo.description && (
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">{repo.description}</p>
                )}

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <Code className="w-4 h-4" />
                      <span>{repo.language}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 rounded-full bg-purple-start/20 text-purple-start"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        )}

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/pavan93-max"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:glass-strong transition-all"
          >
            <Github className="w-5 h-5" />
            <span>View All on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

