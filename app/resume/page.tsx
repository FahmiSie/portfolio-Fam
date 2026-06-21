"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ResumePage() {
  const education = [
    {
      period: "2024 - Present",
      institution: "SMK Telkom Malang",
      program: "Rekayasa Perangkat Lunak (Software Engineering)",
      description: "Focused on full-stack development, software architecture, backend engineering, cloud technologies, databases, and AI-powered systems."
    }
  ];

  const experiences = [
    {
      period: "2026 - Present",
      title: "Full Stack Developer",
      company: "Freelance & Projects",
      description: "Building production-grade web applications using modern technologies such as Next.js, TypeScript, NestJS, Prisma, PostgreSQL, and cloud-based services. Key Projects: BlockMaps SaaS, PDAM Management Dashboard, AgroConnect Hub.",
      technologies: ["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Cloud Services"]
    },
    {
      period: "2026 - Present",
      title: "AI Automation Developer",
      company: "Projects",
      description: "Developing automation systems and AI-powered tools utilizing Google Gemini API, local AI search systems, workflow automation, and intelligent productivity solutions.",
      technologies: ["Google Gemini API", "Workflow Automation", "Local AI Search"]
    },
    {
      period: "2024 - Present",
      title: "Backend & Software Engineering Learner",
      company: "Self-Learning & Projects",
      description: "Exploring software architecture, OOP principles, business logic implementation, and scalable backend development through advanced personal projects. Key Projects: TechMaster Python, Enterprise Inventory Systems.",
      technologies: ["Software Architecture", "OOP", "Backend Development"]
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Computing Fundamentals",
      issuer: "Amazon Web Services",
      image: "/image/certificates/aws-cert.png"
    },
    {
      title: "Banyuwangi AI Certification",
      issuer: "Banyuwangi Tech",
      image: "/image/certificates/banyuwangi-ai.png"
    },
    {
      title: "AMD Technology Certification",
      issuer: "AMD",
      image: "/image/certificates/amd-cert.png"
    }
  ];

  return (
    <section className="resume-page page-transition">
      <div className="container">
        <motion.div
          className="resume-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Resume</h1>
          <motion.a
            href="/resume.pdf"
            download
            className="download-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Download PDF
          </motion.a>
        </motion.div>

        <div className="resume-content">
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Education</h2>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="resume-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="item-period">{edu.period}</div>
                <div className="item-content">
                  <h3>{edu.institution}</h3>
                  <p className="item-subtitle">{edu.program}</p>
                  <p className="item-description">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            className="resume-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">Experience</h2>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="resume-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="item-period">{exp.period}</div>
                <div className="item-content">
                  <h3>{exp.title}</h3>
                  <p className="item-subtitle">{exp.company}</p>
                  <p className="item-description">{exp.description}</p>
                  <div className="item-tech">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.section>

          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="section-title">Certifications</h2>
            <div className="projects-grid mt-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="project-image-wrapper">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="project-image"
                      style={{ objectFit: 'cover' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=800&q=80"
                      }}
                    />
                  </div>
                  <h2 className="project-title">{cert.title}</h2>
                  <p className="project-description text-orange-500">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
