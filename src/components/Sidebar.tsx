"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const MouseHighlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    // Observe all sections
    navItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <MouseHighlight />
      <div className="fixed left-0 top-0 w-1/2 h-screen bg-[color:var(--background)] py-20 flex justify-between items-center flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-1 flex-col justify-between"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2 text-slate-200">
              Mostafa Elbanna
            </h1>
            <h2 className="text-xl mb-12 secondary-text text-slate-200">
              Frontend Developer
            </h2>
          </div>

          <nav className="space-y-6">
            {navItems.map((item, index) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`w-8 h-[1px] bg-[color:var(--accent)] transition-all duration-300 ${
                      isActive ? "h-16 w-16" : "h-[1px] w-8"
                    }`}
                  />
                  <a
                    href={item.href}
                    className={`block text-lg transition-colors duration-300 font-medium ${
                      isActive
                        ? "text-[color:var(--accent)]"
                        : "secondary-text hover:text-[color:var(--accent)]"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                        setActiveSection(sectionId);
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </motion.div>
              );
            })}
          </nav>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex space-x-4 mt-8"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--secondary-text)] hover:text-[color:var(--accent)] transition-colors duration-300"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--secondary-text)] hover:text-[color:var(--accent)] transition-colors duration-300"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
