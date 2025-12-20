"use client";
import { motion } from "motion/react";
interface SocialButtonProps extends React.ComponentProps<"a"> {
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
        boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
      }}
      transition={{}}
      initial={{
        x: 0,
        y: 0,
        boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
      }}
      href={href}
      className={`${className} flex w-full h-fit p-5 flex-col justify-center items-center border-2 border-black`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
