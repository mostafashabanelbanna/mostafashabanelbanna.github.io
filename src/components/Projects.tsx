import React from "react";
import Link from "next/link";

const projects = [
  {
    name: "Trustline Platform",
    year: "2022",
    description:
      "Official website for the 2021 FIE Cairo Fencing World Championships, featuring event schedules, results, and live updates.",
    link: "trustline_platform.png", // Replace with actual link if available
    screenshot: "/images/trustline_platform.png",
    technologies: [
      "react",
      "nextjs",
      "typescript",
      "tailwindcss",
      "nodejs",
      "mongodb",
    ],
  },
  {
    name: "Cairo Opera House Official Website",
    year: "2022",
    description:
      "Redesigned and developed the official website for Cairo Opera House, focusing on accessibility, performance, and user experience.",
    link: "#", // Replace with actual link if available
    screenshot: "/images/opera-website.jpg", // Add your screenshot path
    technologies: [
      "react",
      "nextjs",
      "typescript",
      "tailwindcss",
      "nodejs",
      "postgresql",
    ],
  },
];

const Projects = () => (
  <section className="py-12 bg-[color:var(--background)] text-[color:var(--primary-text)]">
    <div className="max-w-4xl mx-auto px-4 mb-16">
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative transition-all duration-300 hover:bg-[color:var(--section-bg)] hover:border-[#233554] rounded-lg p-4 border border-transparent"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4">
                  <img
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="md:w-3/4">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium leading-tight text-slate-200 group-hover:text-teal-300 transition-colors duration-300">
                      {project.name}
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
                  <p className="secondary-text text-sm leading-normal mb-4 mt-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/archive"
          className="inline-flex items-center gap-2 text-slate-200 hover:text-teal-300 transition-colors duration-300"
        >
          <span className="font-medium leading-tight">
            View Full Project Archive
          </span>
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
        </Link>
      </div>
    </div>
  </section>
);

export default Projects;
