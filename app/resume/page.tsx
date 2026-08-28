"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  const education = [
    {
      period: "2024 — Present",
      institution: "SMK Telkom Malang",
      program: "Rekayasa Perangkat Lunak (Software Engineering)",
      description: "Focused on software engineering, full-stack web development, backend engineering, databases, cloud computing, and AI integration."
    }
  ];

  const experiences = [
    {
      period: "2026 — Present",
      title: "Full Stack Developer",
      company: "Personal & Collaborative Projects",
      description: "Building and contributing to modern web applications and SaaS products across frontend and backend. Experienced in developing APIs, designing relational databases, implementing authentication and role-based access control, and integrating third-party services.",
      technologies: ["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Docker"]
    },
    {
      period: "2026 — Present",
      title: "Backend Developer",
      company: "Teaching Factory — SMK Telkom Malang",
      description: "Developing backend services for a management system in collaboration with frontend and backend teammates. Responsible for REST API development, database design, business logic, and transactional operations.",
      technologies: ["NestJS", "TypeScript", "Prisma", "MySQL", "REST API"]
    },
    {
      period: "2026 — Present",
      title: "Full Stack Developer",
      company: "Nusa Cafe Finder",
      description: "Building a cafe discovery platform that helps users find cafes based on Wi-Fi availability, power outlets, operating hours, and ambience. Integrating mapping services and AI capabilities into the application.",
      technologies: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Google Maps Platform", "Gemini API", "Docker"]
    },
    {
      period: "2026 — Present",
      title: "Backend & DevOps Developer",
      company: "MokeT",
      description: "Developing the backend architecture for an event and ticketing platform using Laravel and PostgreSQL. Working on authentication, multi-role authorization, organization membership, event management, and cloud deployment.",
      technologies: ["Laravel", "PHP", "PostgreSQL", "Sanctum", "Docker", "Google Cloud"]
    },
    {
      period: "2026 — Present",
      title: "Frontend Developer",
      company: "BlockMaps",
      description: "Contributing to a SaaS platform for commercial real-estate mapping. Responsible for frontend development and integration with backend services, authentication, role-based access control, and payment-related features.",
      technologies: ["Next.js", "TypeScript", "tRPC", "Prisma", "Tailwind CSS", "Midtrans", "NextAuth"]
    }
  ];

  const certifications = [
    {
      title: "UKK — Full-Stack Web Development",
      issuer: "SMK Telkom Malang",
      type: "Competency Certificate",
      achievement: "Sangat Kompeten",
      image: "🏆"
    },
    {
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      type: "Certificate",
      image: "💻"
    },
    {
      title: "REST API (Intermediate)",
      issuer: "HackerRank",
      type: "Certificate",
      image: "🔌"
    },
    {
      title: "Build With AI",
      issuer: "GDG Surabaya",
      type: "Certificate of Participation",
      image: "🤖"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      type: "Course Certificate",
      image: "📊"
    },
    {
      title: "Introduction to IoT",
      issuer: "Cisco Networking Academy",
      type: "Course Certificate",
      image: "🌐"
    }
  ];

  const technicalFocus = [
    { title: "Full Stack Development", skills: "Next.js · React · TypeScript · JavaScript · Tailwind CSS" },
    { title: "Backend Engineering", skills: "NestJS · Express.js · Laravel · REST API · Prisma" },
    { title: "Database", skills: "PostgreSQL · MySQL · MariaDB" },
    { title: "AI Integration", skills: "Google Gemini API · AI Integration · Prompt Engineering · AI Automation" },
    { title: "Cloud & DevOps", skills: "Google Cloud Platform · Docker · Git/GitHub · Linux" }
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
          <p className="section-subtitle !mt-2 !mb-8 md:!mb-12">
            Software Engineering Student · Full Stack Developer · Backend & AI Integration
          </p>
        </motion.div>

        <div className="resume-content">
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title !text-3xl md:!text-5xl !mb-6 md:!mb-8">Education</h2>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="resume-item !pb-6 md:!pb-10 !mb-6 md:!mb-10 !gap-4 md:!gap-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="item-period">{edu.period}</div>
                <div className="item-content">
                  <h3 className="!text-xl md:!text-2xl">{edu.institution}</h3>
                  <p className="item-subtitle">{edu.program}</p>
                  <p className="item-description">{edu.description}</p>
                </div>
              </motion.div>
            ))}

            <h2 className="section-title !text-3xl md:!text-5xl !mt-10 md:!mt-16 !mb-6 md:!mb-8">Technical Focus</h2>
            <div className="resume-item !pb-6 md:!pb-10 !mb-6 md:!mb-10" style={{ borderLeft: 'none', paddingLeft: 0 }}>
              <div className="item-content">
                {technicalFocus.map((focus, index) => (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{focus.title}</h3>
                    <p style={{ color: 'var(--text-color)', opacity: 0.8 }}>{focus.skills}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="section-title !text-3xl md:!text-5xl !mt-10 md:!mt-16 !mb-6 md:!mb-8">Currently Exploring</h2>
            <div className="resume-item !pb-6 md:!pb-10 !mb-6 md:!mb-10" style={{ borderLeft: 'none', paddingLeft: 0 }}>
              <div className="item-content">
                <p style={{ color: 'var(--text-color)', opacity: 0.8, fontSize: '1.1rem', lineHeight: '1.8' }}>
                  Cloud deployment · AI-powered applications · Backend architecture · Automation workflows · AWS
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            className="resume-section !mt-8 md:!mt-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title !text-3xl md:!text-5xl !mb-6 md:!mb-8">Experience</h2>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="resume-item !pb-6 md:!pb-10 !mb-6 md:!mb-10 !gap-4 md:!gap-10"
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

            <h2 className="section-title !text-3xl md:!text-5xl !mt-12 md:!mt-20 !mb-8 md:!mb-12">Certifications & Credentials</h2>
            <div className="projects-grid mt-6 pb-12">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="project-card !p-5 md:!p-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="project-image-wrapper !h-28 md:!h-36 !mb-4 md:!mb-6">
                    <div className="project-icon !text-4xl" style={{ display: "flex" }}>
                        {cert.image}
                    </div>
                  </div>
                  
                  <div className="project-status" style={{ background: 'rgba(255, 92, 53, 0.1)', color: '#ff5c35' }}>
                    {cert.type}
                  </div>
                  
                  <h2 className="project-title">{cert.title}</h2>
                  <p className="project-description">{cert.issuer}</p>
                  
                  {cert.achievement && (
                    <div className="mt-2">
                      <span className="text-xs font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 inline-block">
                        ★ {cert.achievement}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
