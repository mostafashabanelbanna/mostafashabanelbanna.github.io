"use client";

import React from "react";
import { About } from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Sidebar from "@/components/Sidebar";

export default function HomeLayout() {
  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--primary-text)] font-sans">
      <div className="flex container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Sidebar />
        <main className="w-1/2 ml-[50%] min-h-screen bg-[color:var(--background)] text-[color:var(--primary-text)]">
          <div id="about">
            <About />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
        </main>
      </div>
    </div>
  );
}
