"use client";

import React, { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiVite,
  SiBootstrap,
  SiFirebase,
  SiMui,
  SiVercel,
} from "react-icons/si";

// These are your tools, like crayons for building websites
const techStack = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "ReactJS", icon: SiReact },
  { name: "Vite", icon: SiVite },
  { name: "Node JS", icon: SiNodedotjs },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Firebase", icon: SiFirebase },
  { name: "Material UI", icon: SiMui },
  { name: "Vercel", icon: SiVercel },
  { name: "Vercel", icon: SiVercel },
];
// These are your finished drawings (projects)
const projects = [
  {
    title: "WebPage Development",
    description: "Responsive site using HTML, CSS, and JS.",
    url: "https://utsavizcool-webpage.vercel.app",
    techStack: [SiHtml5, SiCss3, SiJavascript],
  },
  {
    title: "Python Final Project",
    description: "Python automation for data handling.",
    url: "https://utsavizcool-python-final.vercel.app",
    techStack: [],
  },
  {
    title: "Avanya Legal Solutions",
    description: "Professional legal website with Tailwind.",
    url: "https://avanya-legal-solutions.vercel.app",
    techStack: [SiHtml5, SiJavascript, SiTailwindcss],
  },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"projects" | "tech">("projects");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6">
      {/* Tab Buttons at the Top */}
      <div className="flex justify-center gap-6 mb-10">
        <button
          onClick={() => setActiveTab("projects")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeTab === "projects"
              ? "bg-green-600 text-white"
              : "bg-white/10 text-gray-300 hover:bg-green-600/30"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab("tech")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeTab === "tech"
              ? "bg-green-600 text-white"
              : "bg-white/10 text-gray-300 hover:bg-green-600/30"
          }`}
        >
          Tech Stack
        </button>
      </div>

      {/* If Projects Tab is On */}
      {activeTab === "projects" && (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:shadow-lg hover:shadow-green-400/20 transition"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-white/70 mb-4">{project.description}</p>

              {/* Show tech logos used in the project */}
              <div className="flex gap-3 flex-wrap mb-4">
                {project.techStack.map((Icon, i) => (
                  <div key={i} className="text-2xl p-2 bg-white/10 rounded-lg">
                    <Icon />
                  </div>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-2 bg-green-600 hover:bg-green-700 py-2 rounded-lg font-semibold"
              >
                🚀 Live Demo
              </a>
            </div>
          ))}
        </div>
      )}

      {/* If Tech Tab is On */}
      {activeTab === "tech" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {techStack.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center p-6 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 transition"
              >
                <Icon className="text-4xl text-white mb-2" />
                <p className="text-sm text-white/80">{tech.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
