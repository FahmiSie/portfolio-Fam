"use client";

import { motion } from "framer-motion";
import Lanyard3D from "@/components/lanyard-3d";

export default function AboutPage() {
  const experiences = [
    {
      year: "2026 — Present",
      title: "Full Stack Developer",
      desc: "Building and contributing to real-world web applications, SaaS platforms, management systems, and backend services using Next.js, NestJS, TypeScript, Prisma, and PostgreSQL.",
    },
    {
      year: "2026 — Present",
      title: "Backend & AI Integration",
      desc: "Exploring backend engineering, AI integration, and automation by combining modern APIs and AI services with practical applications and development workflows.",
    },
    {
      year: "2024 — Present",
      title: "Software Engineering",
      desc: "Studying Software Engineering (RPL) at SMK Telkom Malang, with a focus on web development, backend systems, databases, and software architecture.",
    },
  ];

  return (
    <section className="about-page page-transition">
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <div className="about-content">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Lanyard3D />
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-text">
              <h2>
                Software Engineering Student · Full Stack Developer ·
                AI & Cloud Enthusiast
              </h2>

              <p>
                I'm Fahmi Aqila Maulana, a Software Engineering student at
                SMK Telkom Malang with a strong interest in Full Stack
                Development, Backend Engineering, AI Integration, and Cloud
                Computing.
              </p>

              <p>
                I enjoy turning ideas into functional applications — from
                designing database structures and building REST APIs to
                developing responsive interfaces and connecting applications
                with external services and AI technologies.
              </p>

              <p>
                My current work includes building SaaS products, management
                systems, backend services, and practical applications using
                technologies such as Next.js, NestJS, TypeScript, Laravel,
                PostgreSQL, Prisma, Docker, and Google Cloud.
              </p>

              <p>
                I'm continuously improving my engineering skills through
                real-world projects, collaborative development, and
                experimentation with cloud infrastructure, automation, and
                AI-powered applications.
              </p>
            </div>

            <div className="experience-timeline">
              <h3>Journey</h3>

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                  }}
                >
                  <div className="timeline-year">{exp.year}</div>

                  <div className="timeline-content">
                    <h4>{exp.title}</h4>
                    <p>{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
