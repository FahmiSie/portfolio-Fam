"use client";

    export default function Marquee() {
        const skills = [
            "Full Stack Development",
            "Backend Engineering",
            "Frontend Development",
            "AI Integration",
            "Cloud Computing",
            "Next.js",
            "React",
            "TypeScript",
            "NestJS",
            "Node.js",
            "PHP",
            "Laravel",
            "Prisma",
            "PostgreSQL",
            "MySQL",
            "Google Cloud",
            "Cloudflare",
            "Docker",
            "Linux",
            "REST API",
            "Authentication & RBAC",
            "Git",
            "GitHub",
            "Tailwind CSS",
            "Gemini API",
            "Telegram Bot Integration"
]


    return (
        <div className="marquee">
            <div className="marquee-track">
                {[...skills, ...skills].map((skill, index) => (
                    <span key={index} className="marquee-span">{skill}</span>
                ))}
            </div>
        </div>
    )
}