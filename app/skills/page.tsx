"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90, color: "#61DAFB" },
      { name: "Next.js", level: 85, color: "#000000" },
      { name: "TypeScript", level: 88, color: "#3178C6" },
      { name: "JavaScript", level: 90, color: "#F7DF1E" },
      { name: "Tailwind CSS", level: 95, color: "#38B2AC" },
      { name: "Shadcn/UI", level: 85, color: "#000000" },
      { name: "Framer Motion", level: 80, color: "#E902B5" },
      { name: "Recharts", level: 75, color: "#22B3B8" },
      { name: "Vite", level: 85, color: "#646CFF" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 88, color: "#339933" },
      { name: "NestJS", level: 85, color: "#E0234E" },
      { name: "Prisma ORM", level: 85, color: "#2D3748" },
      { name: "tRPC", level: 75, color: "#3178C6" },
      { name: "REST API", level: 90, color: "#FF6B6B" },
      { name: "JWT Auth", level: 88, color: "#000000" },
      { name: "RBAC", level: 85, color: "#4CAF50" },
      { name: "MySQL", level: 85, color: "#4479A1" },
      { name: "PostgreSQL", level: 80, color: "#336791" }
    ]
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "Google Gemini", level: 90, color: "#1A73E8" },
      { name: "AI Integration", level: 85, color: "#FF9900" },
      { name: "Prompt Eng.", level: 88, color: "#F05032" },
      { name: "Automation", level: 85, color: "#4CAF50" },
      { name: "Google Workspace", level: 80, color: "#34A853" },
      { name: "Local AI Search", level: 85, color: "#9C27B0" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 75, color: "#FF9900" },
      { name: "Google Cloud", level: 70, color: "#4285F4" },
      { name: "Linux", level: 85, color: "#FCC624" },
      { name: "Ubuntu Server", level: 80, color: "#E95420" },
      { name: "Docker", level: 75, color: "#2496ED" },
      { name: "GitHub Actions", level: 80, color: "#2088FF" },
      { name: "Apache2", level: 70, color: "#D22128" },
      { name: "CI/CD", level: 75, color: "#4CAF50" }
    ]
  },
  {
    category: "Desktop",
    skills: [
      { name: "C#", level: 80, color: "#239120" },
      { name: ".NET 8", level: 75, color: "#512BD4" },
      { name: "Windows Forms", level: 80, color: "#0088CC" }
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", level: 88, color: "#3178C6" },
      { name: "JavaScript", level: 90, color: "#F7DF1E" },
      { name: "Python", level: 85, color: "#3776AB" },
      { name: "C#", level: 80, color: "#239120" },
      { name: "Java", level: 70, color: "#007396" },
      { name: "SQL", level: 85, color: "#4479A1" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 90, color: "#F05032" },
      { name: "GitHub", level: 90, color: "#FFFFFF" },
      { name: "Prisma Studio", level: 85, color: "#2D3748" },
      { name: "Cloudinary", level: 80, color: "#3448C5" },
      { name: "Postman", level: 88, color: "#FF6C37" },
      { name: "VS Code", level: 95, color: "#007ACC" }
    ]
  }
];

export default function SkillsPage() {
  return (
    <section className="skills-page page-transition">
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h1>

        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies and tools I work with
        </motion.p>

        <div className="skills-container">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + catIndex * 0.2 }}
            >
              <h2 className="category-title">{category.category}</h2>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="skill-header">
                      <h3>{skill.name}</h3>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + catIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
