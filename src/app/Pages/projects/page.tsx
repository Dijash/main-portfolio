"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const projects = [
  {
    title: "WebPage Development",
    description:
      "A multipage responsive website project built using HTML, CSS, and JS.",
    github: "https://github.com/Utsavizcool/WebPage_Development.git",
    demo: "https://utsavizcool.github.io/WebPage_Development/",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Python Final Project",
    description:
      "Final year Python project involving data processing and GUI integration.",
    github: "https://github.com/Utsavizcool/Python_Final_Project.git",
    demo: "", // No live demo
    stack: ["Python", "Tkinter"],
  },
  {
    title: "Avanya Legal Solutions Website",
    description:
      "Business website for a law firm with sleek UI and responsive design.",
    github: "https://github.com/Dijash/Avanya-Legal-Solutions.git",
    demo: "https://avanya-legal.vercel.app/",
    stack: ["React", "Tailwind"],
  },
  {
    title: "Everest Legal Associates Website",
    description:
      "Corporate legal website designed for Everest Legal Associates.",
    github: "https://github.com/Dijash/Santosh-Dada.git",
    demo: "https://everest-legal.netlify.app/",
    stack: ["React", "Tailwind"],
  },
];


export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-black text-green-400 font-mono min-h-screen px-6 py-16">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 border-b border-green-800 bg-black/80 backdrop-blur-sm fixed top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/Pages/main">
            <h1 className="text-lg font-bold tracking-widest text-green-500">
              DijasH
            </h1>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-sm">
            <li>
              <Link href="/Pages/projects" className="hover:text-green-300">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/Pages/about" className="hover:text-green-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/Pages/contact" className="hover:text-green-300">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-green-400 hover:text-green-300"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black border-t border-green-800 px-4 py-4 space-y-3 text-sm">
            <Link
              href="/Pages/projects"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="hover:text-green-300">Projects</p>
            </Link>
            <Link href="/Pages/about" onClick={() => setMobileMenuOpen(false)}>
              <p className="hover:text-green-300">About</p>
            </Link>
            <Link
              href="/Pages/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <p className="hover:text-green-300">Contact</p>
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div
        className={`max-w-6xl mx-auto pt-24 transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-green-500">
          My Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-green-700 bg-black p-6 rounded-lg hover:shadow-[0_0_20px_#22c55e] transition-all duration-300 group"
            >
              <h2 className="text-xl font-bold text-green-300 mb-2 group-hover:text-green-400">
                {project.title}
              </h2>
              <p className="text-sm text-green-500 mb-4">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-green-800/30 border border-green-500 text-xs rounded hover:bg-green-700/50 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-sm px-4 py-2 border border-green-500 rounded hover:bg-green-600/20 transition"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="text-sm px-4 py-2 border border-green-500 rounded hover:bg-green-600/20 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 text-sm text-green-700">
          Want more?{" "}
          <Link
            href="/Pages/contact"
            className="underline hover:text-green-400"
          >
            Let's collaborate
          </Link>
        </div>
      </div>
    </div>
  );
}
