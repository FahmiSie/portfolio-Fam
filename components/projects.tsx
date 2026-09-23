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

export interface ProjectData {
  title: string;
  slug: string;
  description: string;
  category: string;
  tech: string;
  image: string;
  imagePath: string;
  status: string;
  role: string;
  period: string;
  overview: string;
  contributions: string[];
  features: string[];
  technologies: string[];
  team?: string;
  github: string | null;
  githubExtra?: { label: string; url: string } | null;
  demo: string | null;
}

export const projectsData: ProjectData[] = [
  {
    title: "Nusa Cafe Finder",
    slug: "nusa-cafe-finder",
    description: "A full-stack cafe discovery platform combining location-based services with AI-powered recommendations.",
    category: "web",
    tech: "Next.js, NestJS, TypeScript, PostgreSQL, Gemini API",
    image: "☕",
    imagePath: "/image/Projects/nusa-cafe-finder.png",
    status: "Compeleted",
    role: "Full Stack Developer",
    period: "June 2026 – Present",
    overview: "Nusa Cafe Finder is a full-stack platform focused on making cafe discovery more useful and personalized. The application combines location-based services with AI capabilities to help users discover cafes based on practical working and lifestyle preferences such as Wi-Fi availability, power outlets, opening hours, and ambience.",
    contributions: [
      "Developed full-stack application architecture",
      "Built backend APIs using NestJS",
      "Designed and managed PostgreSQL database with Prisma",
      "Integrated Google Maps Platform for location-based functionality",
      "Integrated Gemini API for AI-powered features",
      "Implemented cloud storage using Google Cloud Storage",
      "Containerized the application using Docker",
      "Developed responsive interfaces using Next.js and Tailwind CSS"
    ],
    features: [
      "Cafe discovery with smart search",
      "Location-based cafe information",
      "AI-powered cafe recommendations",
      "Wi-Fi and power outlet availability info",
      "Opening hours & ambience details",
      "Google Maps integration",
      "AI integration with Gemini API"
    ],
    technologies: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Google Maps Platform", "Gemini API", "Google Cloud Storage", "Docker", "Tailwind CSS"],
    github: null,
    demo: null
  },
  {
    title: "MokeT",
    slug: "moket",
    description: "An event management backend focused on authentication, multi-role access control, organization management, and event operations.",
    category: "backend",
    tech: "Laravel, PHP, PostgreSQL, Docker, Google Cloud",
    image: "🎫",
    imagePath: "/image/Projects/mokeT.jpeg",
    status: "In Development",
    role: "Backend & DevOps Developer",
    period: "2026 – Present",
    overview: "MokeT is an event management platform where I focus primarily on backend development and DevOps. The project uses Laravel and PostgreSQL to build a structured API with authentication, role management, organization membership, and event-related functionality.",
    contributions: [
      "Designed and developed backend APIs using Laravel",
      "Implemented authentication using Laravel Sanctum",
      "Designed PostgreSQL database structure",
      "Implemented global and contextual role management",
      "Designed organization and organization membership system",
      "Implemented authorization using Laravel Policies",
      "Developed event management functionality",
      "Worked on Docker-based development environment",
      "Worked on Google Cloud deployment"
    ],
    features: [
      "Token-based authentication with Laravel Sanctum",
      "Multi-role access control (Global & Organization roles)",
      "Organization management & membership",
      "Event management functionality",
      "Authorization policies",
      "REST API architecture"
    ],
    technologies: ["Laravel", "PHP", "PostgreSQL", "Laravel Sanctum", "Docker", "Google Cloud", "REST API", "Git"],
    team: "Collaborative Development",
    github: "https://github.com/FahmiSie/moket-backend",
    demo: null
  },
  {
    title: "BlockMaps SaaS",
    slug: "blockmaps-saas",
    description: "A commercial real-estate mapping SaaS platform with advanced filtering and multi-user management.",
    category: "saas",
    tech: "Next.js, TypeScript, tRPC, Prisma, Tailwind CSS",
    image: "🗺️",
    imagePath: "/image/Projects/blockmaps.png",
    status: "Active",
    role: "Frontend Engineer",
    period: "2026 – Present",
    overview: "BlockMaps is a SaaS platform designed for commercial real-estate mapping. The application provides an interactive mapping experience combined with filtering, user management, authentication, and role-based access control.",
    contributions: [
      "Developed frontend application using Next.js and TypeScript",
      "Built reusable UI components",
      "Implemented data interaction using tRPC",
      "Integrated Prisma-based data models",
      "Implemented responsive UI with Tailwind CSS",
      "Worked with authentication and role-based access control",
      "Integrated Cloudinary for media management",
      "Integrated payment functionality using Midtrans"
    ],
    features: [
      "Interactive commercial real-estate mapping",
      "Advanced filtering system",
      "Multi-user management",
      "Authentication & role-based access control",
      "Media management with Cloudinary",
      "Payment integration with Midtrans"
    ],
    technologies: ["Next.js", "TypeScript", "tRPC", "Prisma", "Tailwind CSS", "Cloudinary", "Midtrans", "NextAuth", "RBAC"],
    team: "2 Developers (1 Frontend, 1 Backend)",
    github: "https://github.com/FahmiSie/blockmaps-SaaS",
    demo: null
  },
  {
    title: "Teaching Factory Management System",
    slug: "teaching-factory",
    description: "A backend management system for Teaching Factory operations, providing structured REST APIs and database management.",
    category: "backend",
    tech: "NestJS, TypeScript, Prisma, MySQL",
    image: "🏭",
    imagePath: "/image/Projects/teaching-factory.jpeg",
    status: "Completed",
    role: "Backend Developer",
    period: "2025 – 2026",
    overview: "Teaching Factory Management System is a web-based management application where I contributed primarily to the backend. The system uses NestJS to provide REST APIs and Prisma to manage relational data stored in MySQL.",
    contributions: [
      "Developed backend REST APIs using NestJS",
      "Designed database interactions using Prisma ORM",
      "Worked with MySQL database",
      "Implemented backend business logic",
      "Managed database transactions",
      "Collaborated with frontend developer"
    ],
    features: [
      "REST API architecture",
      "Database management with Prisma",
      "Transaction handling",
      "Backend business logic"
    ],
    technologies: ["NestJS", "TypeScript", "Prisma", "MySQL", "REST API"],
    team: "2 Developers (1 Frontend, 1 Backend)",
    github: null,
    demo: null
  },
  {
    title: "Smart Inventory System",
    slug: "smart-inventory",
    description: "A full-stack inventory management system focused on real-time stock tracking and inventory operations.",
    category: "saas",
    tech: "NestJS, React, TypeScript, Prisma, PostgreSQL",
    image: "📦",
    imagePath: "/image/Projects/smart-inventory-system.png",
    status: "Compeleted",
    role: "Backend Developer",
    period: "2026 – Present",
    overview: "Smart Inventory System is an inventory management application designed to handle product and stock-related operations. My primary contribution is on the backend, building APIs and database functionality using NestJS, Prisma, and PostgreSQL.",
    contributions: [
      "Developed backend APIs using NestJS",
      "Designed database models using Prisma",
      "Worked with PostgreSQL",
      "Implemented backend inventory logic",
      "Integrated backend with the frontend application"
    ],
    features: [
      "Inventory management",
      "Real-time stock tracking",
      "Backend API",
      "Database management",
      "Frontend integration"
    ],
    technologies: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "React"],
    github: "https://github.com/FahmiSie/smart_inventory-backend",
    githubExtra: { label: "Frontend Repo", url: "https://github.com/FahmiSie/smart_inventory-frontend" },
    demo: null
  },
  {
    title: "PDAM Management Dashboard",
    slug: "pdam-management",
    description: "A web-based management dashboard for monitoring and visualizing PDAM operational data through an interactive interface.",
    category: "web",
    tech: "Next.js, React, TypeScript, Recharts, Tailwind CSS",
    image: "📊",
    imagePath: "/image/Projects/pdam-management-system.png",
    status: "In Development",
    role: "Frontend Developer",
    period: "2026 – Present",
    overview: "PDAM Management Dashboard is a web dashboard focused on presenting management and operational information through an interactive frontend interface. The project uses Next.js and React with Recharts for data visualization.",
    contributions: [
      "Developed frontend interface using Next.js",
      "Built interactive dashboard components with React",
      "Implemented responsive UI using Tailwind CSS",
      "Integrated data visualization using Recharts",
      "Structured frontend components using TypeScript"
    ],
    features: [
      "Management dashboard",
      "Interactive data visualization",
      "Real-time analytics charts",
      "Responsive interface"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"],
    github: "https://github.com/FahmiSie/pdam-management-system",
    demo: null
  },

  {
    title: "SpotSpace",
    slug: "spotspace",
    description: "A production-grade coworking space reservation platform featuring proximity-based space discovery, secure Midtrans payment integration, dual-action QR code ticketing, and cloud deployment on GCP.",
    category: "web",
    tech: "Next.js 16, NestJS 11, TypeScript, PostgreSQL, Docker Compose, GCP, Midtrans",
    image: "🏢",
    imagePath: "/image/Projects/spotspace.png",
    status: "Completed",
    role: "Full Stack & DevOps Engineer",
    period: "August 2026 – Present",
    overview: "SpotSpace is an end-to-end coworking space booking and management platform built for vocational competency assessment (UKK) and real-world commercial operations. The application automates the full workspace rental lifecycle — from GPS-based nearest space discovery (Haversine algorithm) and automated schedule conflict validation to multi-channel digital payment, dual-action QR check-in/check-out, and financial reporting. Deployed live on a Google Cloud Platform VM with automated SSL and reverse proxy.",
    contributions: [
      "Architected modular backend services using NestJS 11 and Prisma ORM with PostgreSQL database",
      "Implemented proximity-based space discovery utilizing the Haversine formula and Google Geocoding API to calculate distance directly on the server with minimal latency",
      "Integrated Midtrans Payment Gateway (Snap & Webhooks) secured with SHA-512 signature hash validation and transactional state machine handling",
      "Engineered a dual-action dynamic QR Code ticketing system enabling camera-based Check-In and Check-Out with native Web Audio API acoustic feedback",
      "Built automated background cron tasks (@nestjs/schedule) to handle automated session checkout and release expired reservations",
      "Developed automated financial report generation pipelines exporting monthly summaries to PDF (PDFKit) and Excel (ExcelJS)",
      "Implemented JWT multi-role authentication (Member & Space Admin) with route guards and Google OAuth 2.0 integration",
      "Built responsive client interface using Next.js 16, React 19, Tailwind CSS v4, and Radix/shadcn UI primitives",
      "Containerized multi-tier stack (Frontend, Backend, PostgreSQL) using Docker Compose and deployed to GCP Compute Engine behind Nginx reverse proxy with Let's Encrypt SSL"
    ],
    features: [
      "Proximity-based space discovery with Haversine distance calculation",
      "Real-time space availability checking and overlap prevention",
      "Midtrans multi-channel payment gateway (QRIS, VA, e-Wallet)",
      "Secure webhook processing with SHA-512 signature verification",
      "Dual-action QR code digital e-ticket (Check-In & Check-Out)",
      "Automated background checkout scheduler (Cron)",
      "Role-based access control (Member & Coworking Admin)",
      "Review and rating system with official admin replies",
      "Financial reporting engine with PDF and Excel spreadsheet export",
      "Production deployment on GCP VM with Docker, Nginx, and HTTPS"
    ],
    technologies: [
      "Next.js 16",
      "NestJS 11",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Docker Compose",
      "Google Cloud Platform",
      "Nginx",
      "Midtrans Gateway",
      "Tailwind CSS",
      "shadcn/ui"
    ],
    github: "https://github.com/FahmiSie/spotspace",
    demo: "https://spotspace.my.id"
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