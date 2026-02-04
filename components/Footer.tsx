"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/pavan93-max", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/pavan-raut93", label: "LinkedIn" },
    { icon: Mail, href: "mailto:pavanraut060@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+919325541871", label: "Phone" },
  ];

  return (
    <footer className="glass-strong border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} Pavan Raut. All rights reserved.
          </motion.p>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

