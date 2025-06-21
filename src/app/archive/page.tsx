import React from "react";
import Link from "next/link";

const archiveProjects = [
  {
    year: "2025",
    name: "Nua",
    madeAt: "Nua",
    builtWith: [
      "Next.js",
      "typescript",
      "Tailwind CSS",
      "LangGraph",
      "CopilotKit",
      "NextAuth",
      "Keycloak",
    ],
    link: "https://nuasec.netlify.app/",
  },
  {
    year: "2022 - 2024",
    name: "Trustline Platform",
    madeAt: "Trustline",
    builtWith: [
      "Next.js",
      "Redux",
      "Bootstrap",
      "React",
      "JavaScript",
      "TypeScript",
    ],
    link: "https://www.trustline.sa/",
  },
  {
    year: "2021",
    name: "Agriprice",
    madeAt: "IDSC",
    builtWith: ["React", "Redux", "Bootstrap", "TypeScript"],
    link: "http://empf2019-001-site8.htempurl.com/",
  },
  {
    year: "2021",
    name: "IDSC Website",
    madeAt: "IDSC",
    builtWith: ["javascript", "jquery", "Bootstrap", ".netcore"],
    link: "https://idsc.gov.eg/",
  },
  {
    year: "2022",
    name: "WeCare",
    madeAt: "Freelance",
    builtWith: ["React", "Redux", "Bootstrap", "JavaScript", "FullCalendar"],
    link: "http://empf2019-001-site8.htempurl.com/",
  },
];

export default function Archive() {
  return (
    <section className="py-12 bg-[color:var(--background)] text-[color:var(--primary-text)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-200 hover:text-teal-300 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 rotate-180"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h1 className="font-medium leading-tight">Mostafa Elbanna</h1>
          </Link>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-12 secondary-text text-slate-200">
            All Projects
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#233554]">
                <th className="text-left py-4 px-4 text-sm font-medium text-slate-200">
                  Year
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-slate-200">
                  Project
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-slate-200">
                  Made at
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-slate-200">
                  Built with
                </th>
                <th className="text-left py-4 px-4 text-sm font-medium text-slate-200">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {archiveProjects.map((project, idx) => (
                <tr
                  key={idx}
                  className="border-b border-[#233554] hover:bg-[color:var(--section-bg)] transition-colors duration-300"
                >
                  <td className="py-4 px-4 text-sm text-slate-200">
                    {project.year}
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-200">
                    {project.name}
                  </td>
                  <td className="py-4 px-4 text-sm text-slate-200">
                    {project.madeAt}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-2">
                      {project.builtWith.map((tech, i) => (
                        <span
                          key={i}
                          className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-200 hover:text-teal-300 transition-colors duration-300"
                    >
                      <span className="text-sm">Visit</span>
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
