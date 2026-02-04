import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pavan Raut | AI/ML Engineer | Data Science",
  description: "Building scalable systems and intelligent ML solutions, one project at a time.",
  keywords: ["AI", "Machine Learning", "Data Science", "Deep Learning", "LLM", "RAG", "Computer Vision"],
  authors: [{ name: "Pavan Raut" }],
  creator: "Pavan Raut",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pavanraut.dev",
    title: "Pavan Raut | AI/ML Engineer | Data Science",
    description: "Building scalable systems and intelligent ML solutions, one project at a time.",
    siteName: "Pavan Raut Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Raut | AI/ML Engineer | Data Science",
    description: "Building scalable systems and intelligent ML solutions, one project at a time.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

