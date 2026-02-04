import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import BlogPostContent from "@/components/BlogPostContent";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} | Pavan Raut`,
    description: post.description,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) {
    notFound();
  }
  return <BlogPostContent post={post} />;
}

