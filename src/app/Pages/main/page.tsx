"use client";
import {
  CodeBracketIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
const navItems = [
  {
    label: "Projects",
    icon: <CodeBracketIcon className="h-6 w-6" />,
    target: "/Pages/projects",
  },
  {
    label: "About",
    icon: <UserIcon className="h-6 w-6" />,
    target: "/Pages/about",
  },
  {
    label: "Contact",
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
    target: "/Pages/contact",
  },
];

export default function Page() {
  const router = useRouter();

  return (
    <div className="scroll-smooth">
      {/* HERO SECTION */}
      <div className="min-h-screen bg-transparent relative z-10 flex flex-col items-center justify-center text-white px-4">
        {/* Icon Navigation */}
        <div className="flex space-x-6 mb-10">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.target)}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-full hover:bg-white/20 transition duration-300 cursor-pointer">
                {item.icon}
              </div>
              <span className="absolute bottom-[-2.2rem] left-1/2 -translate-x-1/2 text-xs bg-black/70 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Welcome To My <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 text-transparent bg-clip-text">
            Portfolio Website
          </span>
        </h1>

        {/* Redirect Button */}
        <button
          onClick={() => router.push("/Pages/main")}
          className="mt-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition duration-300"
        >
          Explore More!
        </button>

        {/* Footer */}
        <p className="absolute bottom-8 text-sm text-white/40 blur-[0.3px]">
          made with ❤️ by Dijash
        </p>
      </div>
    </div>
  );
}
