"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
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

          {/* Mobile Menu Toggle */}
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
        className={`max-w-5xl mx-auto pt-24 transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl font-bold text-center mb-10 text-green-500">
          About Me
        </h1>

        {/* Profile Summary */}
        <section className="mb-12 text-green-300 text-lg leading-relaxed text-center">
          I’m Aarav Bhattarai, an ambitious IT student combining technical
          skills with strong communication and real-world experience. My goal is
          to create digital solutions with both function and impact.
        </section>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/Utsavizcool"
            target="_blank"
            className="hover:text-green-300 transition flex items-center space-x-1"
          >
            <span>GitHub</span>
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/aarav-bhattarai-238817365/"
            target="_blank"
            className="hover:text-green-300 transition flex items-center space-x-1"
          >
            <span>LinkedIn</span>
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
          <a
            href="/Aarav-Bhattarai-cv (5).pdf"
            target="_blank"
            className="hover:text-green-300 transition flex items-center space-x-1"
          >
            <span>Resume</span>
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Skills */}
        <section className="mb-14">
          <div className="flex items-center space-x-2 mb-4">
            <CodeBracketIcon className="h-6 w-6 text-green-400" />
            <h2 className="text-2xl font-semibold">Skills</h2>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-green-300">
            <li>HTML, CSS, JS</li>
            <li>Python</li>
            <li>Java</li>
            <li>C Programming</li>
            <li>Communication</li>
            <li>Teamwork</li>
          </ul>
        </section>

        {/* Education */}
        <section className="mb-14">
          <div className="flex items-center space-x-2 mb-4">
            <AcademicCapIcon className="h-6 w-6 text-green-400" />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <div className="border-l-2 border-green-600 pl-6 space-y-6">
            <div className="relative group pl-6">
              <div className="absolute left-0 top-1.5 w-3 h-3 bg-green-500 rounded-full transition-all duration-300 group-hover:shadow-[0_0_10px_#22c55e]" />
              <h3 className="font-bold">Islington College</h3>
              <p className="text-sm text-green-300">
                Bachelors in Information Technology (2024 – Present)
              </p>
            </div>
            <div className="relative group pl-6">
              <div className="absolute left-0 top-1.5 w-3 h-3 bg-green-500 rounded-full transition-all duration-300 group-hover:shadow-[0_0_10px_#22c55e]" />
              <h3 className="font-bold">Prasadi Academy</h3>
              <p className="text-sm text-green-300">+2 Science (2022 – 2024)</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-14">
          <div className="flex items-center space-x-2 mb-4">
            <BriefcaseIcon className="h-6 w-6 text-green-400" />
            <h2 className="text-2xl font-semibold">Experience</h2>
          </div>
          <div className="border-l-2 border-green-600 pl-6 space-y-6">
            <div className="relative group pl-6">
              <div className="absolute left-0 top-1.5 w-3 h-3 bg-green-500 rounded-full transition-all duration-300 group-hover:shadow-[0_0_10px_#22c55e]" />
              <h3 className="font-bold">Rosso Education Services</h3>
              <p className="text-sm text-green-300">
                Content Writer & Researcher (Dec 2024 – Feb 2025)
              </p>
            </div>
            <div className="relative group pl-6">
              <div className="absolute left-0 top-1.5 w-3 h-3 bg-green-500 rounded-full transition-all duration-300 group-hover:shadow-[0_0_10px_#22c55e]" />
              <h3 className="font-bold">United World Manpower</h3>
              <p className="text-sm text-green-300">
                Computer Operator (Jun – Aug 2021) <br />
                Call Operator (Jun – Aug 2022) <br />
                Content Writer (May – Jun 2022)
              </p>
            </div>
          </div>
        </section>

        {/* Footer Quote */}
        <section className="text-center mt-16">
          <p className="italic text-green-500 text-lg animate-fade-in-slow">
            “My goal is to merge code and communication to create a lasting
            impact in the world of tech.”
          </p>
        </section>
      </div>
    </div>
  );
}
