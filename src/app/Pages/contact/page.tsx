"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsMounted(true); // Trigger animation on mount
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

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
        </div>
      </nav>

      {/* Main Content */}
      <div
        className={`max-w-2xl mx-auto pt-24 transition-opacity duration-1000 ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl font-bold mb-6 text-center text-green-500">
          Get in Touch
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-black border border-green-700 p-8 rounded-lg shadow-[0_0_20px_#22c55e]/30 animate-fade-in"
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-green-600 rounded text-green-300 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-green-600 rounded text-green-300 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border border-green-600 rounded text-green-300 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Type your message..."
            />
          </div>

          <button
            type="submit"
            className="self-start px-6 py-2 border border-green-500 rounded hover:bg-green-600/20 transition"
          >
            Send Message
          </button>
        </form>

        {/* Email */}
        <div className="text-center mt-10 text-sm text-green-600">
          Prefer email? Reach me at{" "}
          <a
            href="mailto:utsavbhattarai29@gmail.com"
            className="underline hover:text-green-400"
          >
            utsavbhattarai29@gmail.com
          </a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-8 text-green-400 text-xl">
          <a
            href="https://github.com/Dijash"
            target="_blank"
            className="hover:text-green-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aarav-bhattarai-238817365/"
            target="_blank"
            className="hover:text-green-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Senpai06100325"
            target="_blank"
            className="hover:text-green-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
