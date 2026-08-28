"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/components/projects";

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="project-detail-page page-transition">
      <div className="container">
        <Link href="/projects" className="back-link">
          ← Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          className="project-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="project-icon-large">{project.image}</div>
          <div className="project-detail-meta">
            <span className="project-status-badge">{project.status}</span>
            <span className="project-role-badge">{project.role}</span>
            {project.period && (
              <span className="project-period-badge">{project.period}</span>
            )}
          </div>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-description">{project.overview}</p>
          {project.team && (
            <p className="project-team-info">👥 Team: {project.team}</p>
          )}
        </motion.div>

        {/* Links (GitHub / Demo) */}
        {(project.github || project.demo || project.githubExtra) && (
          <motion.div
            className="project-links-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-ext-link github-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub Repository
              </a>
            )}
            {project.githubExtra && (
              <a
                href={project.githubExtra.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-ext-link github-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                {project.githubExtra.label}
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-ext-link demo-link"
              >
                🌐 Live Demo
              </a>
            )}
          </motion.div>
        )}

        {/* Hero Image */}
        {project.imagePath && (
          <motion.div
            className="project-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={project.imagePath}
              alt={project.title}
              width={1200}
              height={675}
              className="project-detail-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </motion.div>
        )}

        <div className="project-content">
          {/* My Contributions */}
          <motion.section
            className="project-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>My Contributions</h2>
            <ul className="feature-list">
              {project.contributions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.section>

          {/* Key Features */}
          <motion.section
            className="project-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>Key Features</h2>
            <ul className="feature-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            className="project-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Tech Stack</h2>
            <div className="project-tech-badges">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Bottom Actions */}
        <motion.div
          className="project-actions"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/projects" className="project-action-btn secondary">
            View All Projects
          </Link>
          <Link href="/contact" className="project-action-btn primary">
            Discuss This Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
