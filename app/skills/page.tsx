"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#000000" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Tailwind CSS", color: "#38B2AC" },
      { name: "Shadcn/UI", color: "#000000" },
      { name: "Framer Motion", color: "#E902B5" },
      { name: "Recharts", color: "#22B3B8" },
      { name: "Vite", color: "#646CFF" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", color: "#339933" },
      { name: "NestJS", color: "#E0234E" },
      { name: "Laravel", color: "#FF2D20" },
      { name: "Prisma ORM", color: "#2D3748" },
      { name: "tRPC", color: "#3178C6" },
      { name: "Python", color: "#3776AB" },
      { name: "MySQL", color: "#4479A1" },
      { name: "PostgreSQL", color: "#336791" }
    ]
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "Google Gemini", color: "#1A73E8" },
      { name: "AI Integration", color: "#FF9900" },
      { name: "Prompt Eng.", color: "#F05032" },
      { name: "Automation", color: "#4CAF50" },
      { name: "Local AI Search", color: "#9C27B0" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", color: "#FF9900" },
      { name: "Google Cloud", color: "#4285F4" },
      { name: "Linux", color: "#FCC624" },
      { name: "Ubuntu Server", color: "#E95420" },
      { name: "Docker", color: "#2496ED" },
      { name: "GitHub Actions", color: "#2088FF" },
      { name: "Apache2", color: "#D22128" },
      { name: "CI/CD", color: "#4CAF50" }
    ]
  },
  {
    category: "Desktop",
    skills: [
      { name: "C#", color: "#239120" },
      { name: ".NET 8", color: "#512BD4" },
      { name: "Windows Forms", color: "#0088CC" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#FFFFFF" },
      { name: "Cloudinary", color: "#3448C5" },
      { name: "Postman", color: "#FF6C37" }
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
                    className="skill-chip"
                    style={{ ["--skill-color" as string]: skill.color }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + catIndex * 0.15 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.06, y: -3 }}
                  >
                    {skill.name}
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