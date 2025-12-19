import { motion } from "motion/react";
interface Loaderprops extends React.ComponentProps<"div"> {
  percentage: string;
}
export default function Loader({
  className = "",
  children,
  percentage,
  ...props
}: Loaderprops) {
  return (
    <div className="w-full h-5 border-2 border-black bg-progressbg overflow-clip">
      <motion.div
        initial={{
          x: -600,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: "tween",
          duration: 2,
        }}
        className={`${className} bg-primary h-5`}
        style={{ width: percentage }}
      ></motion.div>
    </div>
  );
}
