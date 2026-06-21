"use client";

export default function Marquee(){
    const skills = [
        "Full Stack Development",
        "Backend Dev",
        "Frontnd Dev",
        "AI Automation",
        "Cloud Computing",
        "Next.js",
        "React",
        "TypeScript",
        "NestJS",
        "Node.js",
        "Prisma",
        "MySQL",
        "AWS",
        "Google Cloud",
        "Linux",
        "Docker",
        "REST API",
        "Authentication & RBAC",
        "GitHub",
        "Tailwind CSS",
        "Telegram Bot Integration"
    ];

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