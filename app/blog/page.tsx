"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    slug: "building-rbac-authentication-nestjs",
    title: "Building RBAC Authentication with NestJS",
    excerpt: "Implementing a structured Role-Based Access Control (RBAC) system using NestJS, Prisma, and JWT for scalable enterprise applications.",
    date: "June 20, 2026",
    category: "Backend Development",
    readTime: "3 min read"
  }
];

export default function BlogPage() {
  return (
    <section className="blog-page page-transition">
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Blog
        </motion.h1>

        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Insights on web development, finance, and my journey as a Fullstack Developer
        </motion.p>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              className="blog-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div className="blog-card-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <span className="blog-date">{post.date}</span>
                <Link href={`/blog/${post.slug}`} className="blog-link">
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
