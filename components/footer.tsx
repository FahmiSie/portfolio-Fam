"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Skills", href: "/skills" },
    { name: "Resume", href: "/resume" },
    // { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:famtech.co@gmail.com",
      icon: FaEnvelope
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/fahmiaqilamaulana",
      icon: FaLinkedinIn
    },
    {
      name: "GitHub",
      href: "https://github.com/fahmisie",
      icon: FaGithub
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/6282139163361",
      icon: FaWhatsapp
    }
  ];

  return (
    <footer className="footer border-t border-white/10"> 
      <div className="footer-container">
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="footer-logo text-2xl font-bold text-orange-500">Famco.</h3>
          <p className="footer-description text-gray-400 mt-4">
            Software Engineering Student & Full Stack Developer. 
            Building scalable enterprise applications, integrating AI automation, and designing robust backend architectures.
          </p>
          
          <div className="footer-social flex gap-4 mt-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link group w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} className="text-white group-hover:text-[#ff5a36] transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="footer-title font-semibold text-white">Quick Links</h4>
          <ul className="footer-links mt-4">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="footer-link text-gray-400 hover:text-orange-500 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="footer-bottom flex flex-col items-center justify-center text-center text-sm text-gray-500">
        <p>&copy; {currentYear} Fahmi Aqila Maulana. All rights reserved.</p>
        <p className="footer-made mt-2"></p>
      </div>
    </footer>
  );
}