import { summary } from "framer-motion/client";
import React from "react";

const experiences = [
  {
    title: "Front-End Developer",
    company: "Nua Security",
    date: "2025 - Present",
    summary: `Built responsive landing pages and contributed to AI-driven cybersecurity tools using Next.js, Tailwind CSS, and LangGraph. Focused on frontend performance, authentication, and integration of CopilotKit, NextAuth, and Keycloak for secure, modern user experiences.`,
    achievements: [
      "Developed high-quality front-end code adhering to best practices.",
      "Enhanced SEO performance, resulting in improved search engine rankings.",
      "Recommended and implemented new features to improve functionality and usability.",
    ],
    tools: [
      "Next.js",
      "typescript",
      "Tailwind CSS",
      "LangGraph",
      "CopilotKit",
      "NextAuth",
      "Keycloak",
    ],
  },
  {
    title: "Front-End Developer",
    company: "Information and Decision Support Center",
    date: "2020 – 2022",
    achievements: [
      "Translated UI/UX designs into fully functional front-end applications.",
      "Created reusable code and libraries to streamline development.",
      "Designed and developed data visualization components.",
    ],
    tools: [
      "javascript",
      "typescript",
      "react",
      "nextjs",
      "tailwindcss",
      "html",
      "css",
    ],
  },
  {
    title: "Front-End Developer",
    company: "",
    date: "2019 – 2020",
    achievements: [
      "Designed and developed responsive web applications for multiple platforms.",
      "Maintained and enhanced legacy systems to improve performance.",
      "Ensured cross-device compatibility and stability.",
    ],
  },
];

const Experience = () => (
  <section className="py-12 bg-[color:var(--background)] text-[color:var(--primary-text)]">
    <div className="max-w-4xl mx-auto px-4 mb-16">
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="group relative transition-all duration-300 hover:bg-[color:var(--section-bg)] hover:border-[#233554] rounded-lg p-4 border border-transparent"
          >
            <a
              href={
                exp.company ? `https://${exp.company.toLowerCase()}.com` : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4">
                  <span className="text-sm secondary-text block mt-1">
                    {exp.date}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium leading-tight text-slate-200 group-hover:text-teal-300 transition-colors duration-300">
                      {exp.title}
                      {exp.company && (
                        <span className="text-slate-200 group-hover:text-teal-300 transition-colors duration-300">
                          {" "}
                          @ {exp.company}
                        </span>
                      )}
                    </h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-teal-300"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm leading-normal mb-4 secondary-text">
                      {exp.summary}
                    </p>
                  </div>
                  {/* <ul className="list-disc list-inside ml-4 secondary-text text-sm leading-normal mb-4">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul> */}
                  {exp.tools && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-200 hover:text-teal-300 transition-colors duration-300"
        >
          <span className="font-medium leading-tight">View Full Résumé</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default Experience;
