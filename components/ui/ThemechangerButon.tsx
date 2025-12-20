import { useTheme } from "next-themes";
import { motion } from "motion/react";
export default function ThemeBtn() {
  const { setTheme } = useTheme();
  return (
    <motion.div className="w-8 h-4 items-center p-1 bg-black flex shadow-[]">
      <button className="aspect-square h-full bg-white"></button>
    </motion.div>
  );
}
