"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Blog & Research
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="glass rounded-xl p-6 hover:glass-strong transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-purple-start" />
                <span className="text-sm text-gray-400">{post.date}</span>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm line-clamp-3">{post.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-purple-start/20 text-purple-start"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm text-gray-400 group-hover:text-purple-start transition-colors"
              >
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

