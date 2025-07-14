"use client";
import {
  CodeBracketIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Projects",
    icon: <CodeBracketIcon className="h-6 w-6 text-green-400" />,
    target: "/Pages/projects",
  },
  {
    label: "About",
    icon: <UserIcon className="h-6 w-6 text-green-400" />,
    target: "/Pages/about",
  },
  {
    label: "Contact",
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-400" />,
    target: "/Pages/contact",
  },
];

export default function LandingPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-green-400 font-mono scroll-smooth overflow-hidden">
      <div
        className={`relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center transition-opacity duration-1000 ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Icon Navigation */}
        <div className="flex space-x-6 mb-10 animate-fade-in">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.target)}
              className="group relative"
            >
              <div className="bg-green-400/10 border border-green-400/20 p-4 rounded-full hover:bg-green-400/20 hover:shadow-[0_0_15px_#22c55e] transition duration-300 cursor-pointer">
                {item.icon}
              </div>
              <span className="absolute bottom-[-2.2rem] left-1/2 -translate-x-1/2 text-xs bg-green-800 text-green-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-300 drop-shadow-md animate-fade-in">
          Welcome to the
          <br />
          <span className="text-green-500 neon-text">Matrix Portfolio</span>
        </h1>

        {/* Explore Button */}
        <button
          onClick={() => router.push("/Pages/landingPage")}
          className="mt-8 px-6 py-3 bg-green-400/10 border border-green-400/30 rounded-full hover:bg-green-400/20 hover:shadow-[0_0_20px_#22c55e] transition duration-300 animate-fade-in cursor-crosshair"
        >
          Explore More !
        </button>

        {/* Footer */}
        <p className="absolute bottom-8 text-sm text-green-700 animate-fade-in-slow">
          made with <span className="text-green-500">❤️</span> by Dijash
        </p>
      </div>

      {/* Optional flickering background text */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-10 text-green-700 text-xs leading-snug p-10 whitespace-pre-wrap overflow-hidden">
        {Array(100).fill("0101010011010101100011101010001110\n").join("")}
      </div>
    </div>
  );
}
