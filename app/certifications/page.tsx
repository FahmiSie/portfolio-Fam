"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CertificationsPage() {
  const certifications = [
    {
      title: "UKK — Full-Stack Web Development",
      issuer: "SMK Telkom Malang",
      type: "Competency Certificate",
      achievement: "Sangat Kompeten",
      image: "/certif/competency_certificate_1.jpg",
      link: "/certif/competency_certificate_1.jpg"
    },
    {
      title: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      type: "Certificate",
      image: "/certif/javascript_intermediate_certificate.jpg",
      link: "/certif/javascript_intermediate certificate.pdf"
    },
    {
      title: "SQL (Advanced)",
      issuer: "HackerRank",
      type: "Certificate",
      image: "/certif/sql_advanced_certificate_1.jpg",
      link: "/certif/sql_advanced_certificate_1.jpg"
    },
    {
      title: "REST API (Intermediate)",
      issuer: "HackerRank",
      type: "Certificate",
      image: "/certif/rest_api_intermediate_certificate_1.jpg",
      link: "/certif/rest_api_intermediate_certificate_1.jpg"
    },
    {
      title: "Build With AI",
      issuer: "GDG Surabaya",
      type: "Certificate of Participation",
      image: "/certif/bwai_-_fahmi_maulana.jpg",
      link: "/certif/bwai_-_fahmi_maulana.jpg"
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      type: "Course Certificate",
      image: "/certif/introduction_to_data_science.jpg",
      link: "/certif/introduction_to_data_science.jpg"
    },
    {
      title: "Introduction to IoT",
      issuer: "Cisco Networking Academy",
      type: "Course Certificate",
      image: "/certif/introduction_to_iot.jpg",
      link: "/certif/introduction_to_iot.jpg"
    },
    {
      title: "Information Technology Specialist: Artificial Intelligence",
      issuer: "Certiport / Pearson",
      type: "Specialist Certificate",
      date: "October 25, 2026",
      credentialId: "wKc2i-2Fdp",
      image: "/certif/ai_specialist_certiport.jpg",
      link: "/certif/ai_specialist_certiport.pdf"
    },
    {
      title: "AWS Certified DevOps Engineer — Professional",
      issuer: "AWS Training & Certification",
      type: "Exam Prep Completion",
      date: "November 04, 2026",
      image: "/certif/aws_devops_engineer.jpg",
      link: "/certif/aws_devops_engineer.pdf"
    }
  ];

  return (
    <section className="projects-page page-transition">
      <div className="container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h1>

        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My professional certifications and credentials
        </motion.p>

        <div className="projects-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="project-image-wrapper">
                <a href={cert.link || cert.image} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="project-image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'contain' }}
                  />
                </a>
              </div>
              
              <div className="project-status">{cert.type}</div>
              
              <h2 className="project-title">{cert.title}</h2>
              <p className="project-description">{cert.issuer}</p>
              
              {cert.date && (
                <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
              )}

              {cert.credentialId && (
                <p className="text-xs text-gray-500 mt-1">ID: {cert.credentialId}</p>
              )}
              
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
      </div>
    </section>
  );
}
