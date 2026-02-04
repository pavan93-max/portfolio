import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Timeline from "@/components/sections/Timeline";
import Projects from "@/components/sections/Projects";
import GitHub from "@/components/sections/GitHub";
import Blog from "@/components/sections/Blog";
import LeetCode from "@/components/sections/LeetCode";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { getAllBlogPosts } from "@/lib/blog";

export default function Home() {
  let blogPosts;
  try {
    blogPosts = getAllBlogPosts();
  } catch (error) {
    console.error("Error loading blog posts:", error);
    blogPosts = [];
  }

  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <GitHub />
      <Blog posts={blogPosts} />
      <LeetCode />
      <Skills />
      <Contact />
    </div>
  );
}

