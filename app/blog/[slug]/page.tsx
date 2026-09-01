"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts: Record<string, { title: string; date: string; category: string; readTime: string; content: string }> = {
  "building-rbac-authentication-nestjs": {
    title: "Building RBAC Authentication with NestJS",
    date: "June 20, 2026",
    category: "Backend Development",
    readTime: "3 min read",
    content: `
      Implementing authentication is relatively straightforward, but managing permissions for different user roles requires a more structured approach. While building the TEFA Marketplace platform, I implemented a Role-Based Access Control (RBAC) system using NestJS, Prisma, JWT, and custom authorization guards.

      ## Managing Multiple Roles

      The system supports multiple user roles including administrators, operators, marketing teams, internal students, teachers, and external clients. Each role has different permissions and access levels across the application.

      ## Separating Auth and Authz

      One of the biggest challenges was ensuring that authorization remained scalable as new features and roles were introduced. To solve this, I separated authentication from authorization and used custom decorators combined with NestJS guards to validate permissions before executing protected routes.

      ## The Role of Prisma and JWT

      Using Prisma also simplified user management and role relationships through a well-structured database schema. JWT authentication was implemented to maintain stateless sessions while ensuring secure access across API endpoints.

      ## Conclusion

      This project taught me the importance of designing authorization systems early in development. A well-planned RBAC architecture reduces technical debt and makes enterprise applications easier to maintain as they grow.
    `
  }
};

import { use } from "react";

export default function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts[slug];

  if (!post) {
    return (
      <section className="blog-detail-page page-transition">
        <div className="container">
          <h1>Blog Post Not Found</h1>
          <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="back-link">← Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-detail-page page-transition">
      <div className="container">
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>

        <motion.article
          className="blog-post"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <header className="blog-post-header">
            <span className="blog-category">{post.category}</span>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/```bash\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
                .replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>')
                .replace(/`([^`]+)`/g, '<code>$1</code>')
                .replace(/## (.*?)(\n|$)/g, '<h2>$1</h2>')
                .replace(/### (.*?)(\n|$)/g, '<h3>$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/^(.*)$/, '<p>$1</p>')
                .replace(/<p><h2>/g, '<h2>')
                .replace(/<\/h2><\/p>/g, '</h2>')
                .replace(/<p><h3>/g, '<h3>')
                .replace(/<\/h3><\/p>/g, '</h3>')
                .replace(/<p><pre>/g, '<pre>')
                .replace(/<\/pre><\/p>/g, '</pre>')
                .replace(/<p><ul>/g, '<ul>')
                .replace(/<\/ul><\/p>/g, '</ul>')
                .replace(/<p><li>/g, '<li>')
                .replace(/<\/li><\/p>/g, '</li>')
            }}
          />

          <div className="blog-post-footer">
            <Link href="/blog" className="blog-action-btn secondary">
              ← More Articles
            </Link>
            <Link href="/contact" className="blog-action-btn primary">
              Share Feedback
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
