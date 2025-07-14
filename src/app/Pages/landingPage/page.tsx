"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function LandingPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
      {/* Navbar */}
      <nav className="w-full px-6 py-4 border-b border-green-800 bg-black/80 backdrop-blur-sm fixed top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link rel="stylesheet" href="/Pages/main">
            <h1 className="text-lg font-bold tracking-widest from:text-green-500 to:text-green-300 transition-colors duration-300">
              DijasH
            </h1>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-sm">
            <li>
              <Link
                href="/Pages/projects"
                className="hover:text-green-300 transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/Pages/about"
                className="hover:text-green-300 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Pages/contact"
                className="hover:text-green-300 transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon (Mobile) */}
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-black border-t border-green-800 px-4 py-4 space-y-3 text-sm animate-fade-in">
            <Link
              href="/Pages/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-green-300 transition"
            >
              Projects
            </Link>
            <Link
              href="/Pages/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-green-300 transition"
            >
              About
            </Link>
            <Link
              href="/Pages/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-green-300 transition"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div
        className={`flex flex-col items-center justify-center text-center px-4 min-h-screen transition-opacity duration-1000 ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pt-24 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-green-300 mb-4">
            Welcome to my{" "}
            <span className="text-green-500 neon-text">Portfolio</span>
          </h1>
          <p className="text-green-500 text-sm md:text-base max-w-xl mx-auto mb-6">
            "Code. Create. Conquer. Explore my digital journey—where
            communication meets code, research meets real-world solutions, and
            every project reflects a step toward building innovative IT
            experiences."
          </p>
          <button
            onClick={() => router.push("/Pages/about")}
            className="mt-4 px-6 py-3 bg-green-400/10 border border-green-500 rounded-full hover:bg-green-400/20 hover:shadow-[0_0_20px_#22c55e] transition duration-300 cursor-crosshair"
          >
            Explore More !
          </button>
        </div>
      </div>

      {/* Matrix Background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-10 text-green-700 text-xs leading-snug p-10 whitespace-pre-wrap overflow-hidden">
        {Array(100).fill("10110010111010010101011101010010\n").join("")}
      </div>

      {/* Footer */}
      <footer className="text-sm text-green-700 text-center pb-4 absolute bottom-0 w-full animate-fade-in-slow">
        made with ❤️ by Dijash
      </footer>
    </div>
  );
}
