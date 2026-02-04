# Pavan Raut - Portfolio Website

A modern, fully responsive portfolio website built with Next.js 14, featuring a research-first aesthetic with glassmorphism design, smooth animations, and live GitHub integration.

## 🎨 Design System

- **Base Color**: Pure black `#0a0a0a`
- **Accent**: Purple gradient `#7b2ff7 → #f107a3`
- **Style**: Glassmorphism cards with backdrop blur
- **Animations**: Framer Motion for smooth transitions
- **Typography**: Inter font family
- **Responsive**: Mobile-first design

## ✨ Features

### Core Sections
- **Hero**: Animated introduction with gradient text
- **About**: Personal introduction and background
- **Timeline**: Education and experience timeline
- **Projects**: Case study cards with metrics
- **GitHub**: Live repository fetching with Featured/All toggle
- **Blog**: MDX-based blog system with KaTeX math support
- **LeetCode**: Stats integration (configurable)
- **Skills**: Categorized skill showcase
- **Contact**: Multiple contact methods

### Blog System
- MDX support with frontmatter
- KaTeX for mathematical equations
- Syntax highlighting with Prism
- Reading time calculation
- Tag system
- Responsive prose styling

### GitHub Integration
- Fetches repositories from GitHub API
- Displays stars, forks, languages, last commit
- Toggle between Featured and All repositories
- Real-time data fetching

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
Portfolio/
├── app/
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx          # Blog post pages
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── sections/                 # Section components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Timeline.tsx
│   │   ├── Projects.tsx
│   │   ├── GitHub.tsx
│   │   ├── Blog.tsx
│   │   ├── LeetCode.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── BlogPostContent.tsx       # Blog post renderer
│   ├── Footer.tsx
│   └── Navbar.tsx
├── content/
│   └── blog/                     # MDX blog posts
│       ├── hallucination-in-llms.mdx
│       ├── mediapipe-for-deepfake.mdx
│       └── rag-evaluation.mdx
├── lib/
│   └── blog.ts                   # Blog utilities
└── public/                       # Static assets
```

## 🛠️ Configuration

### GitHub Username

Update the GitHub username in `components/sections/GitHub.tsx`:

```typescript
const response = await fetch("https://api.github.com/users/YOUR_USERNAME/repos?sort=updated&per_page=100");
```

### LeetCode Integration

The LeetCode section currently uses mock data. To integrate with real data:

1. Set up an API route at `app/api/leetcode/route.ts`
2. Use LeetCode's GraphQL API or a scraping service
3. Update `components/sections/LeetCode.tsx` to fetch from your API

### Blog Posts

Add new blog posts by creating `.mdx` files in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "Post description"
date: "2024-01-01"
tags: ["Tag1", "Tag2"]
---

Your content here with **markdown** support.
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Manual Build

```bash
npm run build
npm start
```

### Environment Variables

No environment variables are required for basic functionality. If you add features like:
- Contact form backend
- Analytics
- API keys

Add them to `.env.local`:

```env
NEXT_PUBLIC_ANALYTICS_ID=your_id
```

## 📝 Customization

### Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  base: "#0a0a0a",
  purple: {
    start: "#7b2ff7",
    end: "#f107a3",
  },
}
```

### Personal Information

Update your details in:
- `components/sections/Hero.tsx` - Tagline
- `components/sections/About.tsx` - About text
- `components/sections/Timeline.tsx` - Education/Experience
- `components/sections/Contact.tsx` - Contact methods
- `app/layout.tsx` - SEO metadata

### Projects

Update projects in `components/sections/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project",
    status: "ONGOING",
    icon: TrendingUp,
    metrics: [...],
    description: "...",
    gradient: "from-purple-start to-purple-end",
  },
];
```

## 🎯 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Font Optimization**: Next.js font optimization

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [KaTeX](https://katex.org/)

---

Built with ❤️ by Pavan Raut

