import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function ThemeBtn() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-text transition-colors duration-300 shadow-boxbtn"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 bg-foreground flex items-center justify-center"
        animate={{
          x: isLight ? 0 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      ></motion.div>
    </button>
  );
}