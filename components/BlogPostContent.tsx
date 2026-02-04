"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-purple-start/20 text-purple-start"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="glass rounded-2xl p-8 md:p-12 prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex, rehypePrism]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}

