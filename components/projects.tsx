/**
 * PROJECTS DATA
 * 
 * Untuk menggunakan gambar lokal:
 * 1. Letakkan file gambar di folder public/image/projects/
 * 2. Gunakan path yang dimulai dengan "/" (tanpa "/public")
 *    Contoh: "/image/projects/nama-file.png"
 * 
 * Untuk menggunakan gambar dari URL eksternal:
 * - Gunakan URL lengkap dengan https://
 * - Pastikan domain sudah ditambahkan di next.config.ts (remotePatterns)
 * 
 * Jika gambar tidak ditemukan, akan otomatis menampilkan emoji icon sebagai fallback
 */

export const projectsData = [
    {
        "title": "BlockMaps SaaS",
        "slug": "blockmaps-saas",
        "description": "Enterprise SaaS platform untuk commercial real estate mapping dengan advanced filtering dan multi-user management",
        "category": "saas",
        "tech": "Next.js, tRPC, Prisma, TypeScript, Tailwind CSS",
        "image": "🗺️",
        "imagePath": "",
        "status": "Active"
    },
    {
        "title": "PDAM Management Dashboard",
        "slug": "pdam-management",
        "description": "Web dashboard untuk monitoring dan management sistem air bersih dengan real-time analytics",
        "category": "web",
        "tech": "Next.js, React, Recharts, TypeScript, Tailwind CSS",
        "image": "📊",
        "imagePath": "",
        "status": "Active"
    },
    {
        "title": "AgroConnect Hub",
        "slug": "agroconnect-hub",
        "description": "Platform pertanian digital yang menghubungkan petani dengan buyer menggunakan AI untuk smart recommendations",
        "category": "web",
        "tech": "React, Vite, TypeScript, Lovable AI, Tailwind CSS",
        "image": "🌾",
        "imagePath": "",
        "status": "Development"
    },
    {
        "title": "Smart Inventory System",
        "slug": "smart-inventory",
        "description": "Full-stack inventory management SaaS dengan real-time stock tracking dan automated alerts",
        "category": "saas",
        "tech": "NestJS, React, TypeScript, Prisma, PostgreSQL",
        "image": "📦",
        "imagePath": "",
        "status": "Development"
    },
    {
        "title": "Personal Portfolio Website",
        "slug": "personal-portfolio",
        "description": "Showcase portfolio dengan smooth animations dan modern design untuk display professional work",
        "category": "web",
        "tech": "Next.js, Framer Motion, TypeScript, Tailwind CSS",
        "image": "💼",
        "imagePath": "",
        "status": "Active"
    },
    {
        "title": "Translator Pro",
        "slug": "translator-pro",
        "description": "Desktop application untuk real-time translation dengan support multiple languages",
        "category": "desktop",
        "tech": "C#, Windows Forms, .NET 8.0",
        "image": "🔤",
        "imagePath": "",
        "status": "Active"
    },
    {
        "title": "TechMaster Python",
        "slug": "techmaster-python",
        "description": "Educational project demonstrating OOP principles, inheritance, dan polymorphism dalam Python",
        "category": "backend",
        "tech": "Python, OOP, Design Patterns",
        "image": "🐍",
        "imagePath": "",
        "status": "Active"
    },
    {
        "title": "Local Finder Gemini",
        "slug": "local-finder-gemini",
        "description": "Smart local file management system dengan Google Gemini API integration untuk intelligent file searching",
        "category": "ai",
        "tech": "Python, Google Gemini API, File System",
        "image": "🤖",
        "imagePath": "",
        "status": "Development"
    }
];

export function ProjectsList({ data }: { data: typeof projectsData }) {
    return (
        <div className="grid gap-4">
            {data.map((project) => (
                <div key={project.slug} className="p-4 border rounded">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <small>{project.tech}</small>
                </div>
            ))}
        </div>
    );
}