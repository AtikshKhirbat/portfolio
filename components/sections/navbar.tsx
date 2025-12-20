"use client";
import { User, Briefcase, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeBtn from "../ui/ThemechangerButon";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 px-5 md:px-20 py-5 w-full h-fit flex-row justify-between items-center bg-background">
        <a href="#home" className="flex gap-0 font-jersey text-6xl">
          <h1>{"<"}</h1>
          <h1 className="text-primary">Rigbyte</h1>
          <h1>{"/>"}</h1>
        </a>

        <div className="w-fit h-fit flex text-4xl gap-5 items-center">
          <a href="#about" className="hover:text-primary transition-all">
            About
          </a>
          <a href="#projects" className="hover:text-primary transition-all">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition-all">
            Contact Me
          </a>
          <ThemeBtn />
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
        <div className="flex justify-around items-center py-3 px-2">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 px-4 py-2 hover:text-primary transition-colors"
          >
            <User size={24} />
            <span className="text-xs">About</span>
          </a>

          <a
            href="#projects"
            className="flex flex-col items-center gap-1 px-4 py-2 hover:text-primary transition-colors"
          >
            <Briefcase size={24} />
            <span className="text-xs">Projects</span>
          </a>

          <a
            href="#contact"
            className="flex flex-col items-center gap-1 px-4 py-2 hover:text-primary transition-colors"
          >
            <Mail size={24} />
            <span className="text-xs">Contact</span>
          </a>

          {mounted && (
            <button
              onClick={toggleTheme}
              className="flex flex-col items-center gap-1 px-4 py-2 hover:text-primary transition-colors"
            >
              {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
              <span className="text-xs">Theme</span>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}