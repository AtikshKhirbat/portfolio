import { motion } from "motion/react";
interface ButtonProps extends React.ComponentProps<"a"> {
  href: string;
}

export default function Button({
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  return (
    <motion.a
      href={href}
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
      className={`${className} p-2.5 border-2 text-xl md:text-2xl font-jersey border-black bg-primary text-white justify-center flex items-center w-fit h-fit gap-2.5 `}
      {...props}
    >
      {children}
    </motion.a>
  );
}
