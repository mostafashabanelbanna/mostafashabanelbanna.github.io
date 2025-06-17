"use client";

import React from "react";
import { motion } from "framer-motion";

export const About = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[color:var(--background)] text-[color:var(--primary-text)]">
    <div className="relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg secondary-text mb-8 max-w-2xl mx-auto"
          >
            I'm a Frontend Engineer crafting modern, user-centric web
            experiences with clean code and pixel-perfect design. With a strong
            foundation in React, Next.js, and Tailwind CSS, I build fast,
            responsive, and accessible interfaces that not only look great—but
            feel intuitive to use. I'm passionate about turning complex ideas
            into seamless, impactful digital experiences.
          </motion.p>
        </motion.div>
      </div>
    </div>
  </section>
);
