"use client";

import { motion } from "framer-motion";
import Lanyard3D from "@/components/lanyard-3d";

export default function AboutPage() {
  const experiences = [
    { year: "2026 — Present", title: "AI Automation Developer", desc: "Building intelligent workflows, local AI tools, Gemini integrations, automation systems, and productivity-focused applications." },
    { year: "2026 — Present", title: "Full Stack Developer", desc: "Developing SaaS platforms, inventory systems, management dashboards, and modern web applications using Next.js, NestJS, TypeScript, Prisma, and PostgreSQL." },
    { year: "2024 — Present", title: "Software Engineering Student", desc: "SMK Telkom Malang — Rekayasa Perangkat Lunak (RPL). Focused on software engineering, backend development, databases, cloud computing, and modern application architecture." }
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
              <h2>Software Engineering Student • Full Stack Developer • AI Automation Enthusiast</h2>
              <p>
                I'm Fahmi Aqila Maulana, a Software Engineering student at SMK Telkom Malang with a strong passion for Full Stack Development, Backend Engineering, Cloud Computing, and AI-powered Automation.
              </p>
              <p>
                I enjoy building scalable web applications, designing backend architectures, developing SaaS products, and integrating modern AI technologies into practical workflows. My projects range from enterprise inventory systems and utility management platforms to desktop applications, intelligent file search systems powered by Google Gemini, and backend-focused learning repositories.
              </p>
              <p>
                Beyond web development, I actively explore Linux server administration, cloud infrastructure, automation workflows, and software architecture to continuously improve my engineering skills.
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
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
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
