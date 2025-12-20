"use client";
import { motion, HTMLMotionProps } from "motion/react";
interface SocialButtonProps extends Omit<HTMLMotionProps<"a">, "href"> {
  href: string;
}
export default function SocialButton({
  className = "",
  href,
  children,
  ...props
}: SocialButtonProps) {
  return (
    <motion.a
      whileHover={{
        x: 4,
        y: 4,
        boxShadow: "0px 0px 0px 0px var(--border)",
      }}
      transition={{}}
      initial={{
        x: 0,
        y: 0,
        boxShadow: "4px 4px 0px 0px var(--border)",
      }}
      href={href}
      className={`${className} flex w-full h-fit p-5 flex-col justify-center items-center border-2 border-border`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
