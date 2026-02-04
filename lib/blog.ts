import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime: string;
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((name) => name.endsWith(".mdx"))
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.mdx$/, "");
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data, content } = matter(fileContents);

          const stats = readingTime(content);

          return {
            slug,
            title: data.title || "Untitled",
            description: data.description || "",
            date: data.date || new Date().toISOString(),
            tags: data.tags || [],
            readTime: stats.text,
            content,
          } as BlogPost;
        } catch (error) {
          console.error(`Error reading blog post ${fileName}:`, error);
          return null;
        }
      })
      .filter((post): post is BlogPost => post !== null);

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      readTime: stats.text,
      content,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

