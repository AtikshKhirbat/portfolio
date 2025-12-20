import { motion } from "motion/react";
interface Loaderprops extends React.ComponentProps<"div"> {
  percentage: string;
}
export default function Loader2({
  className = "",
  children,
  percentage,
  ...props
}: Loaderprops) {
  return (
    <div className="w-full p-1 justify-center items-center h-5 border-2 border-border bg-progressbg overflow-clip">
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: percentage,
        }}
        transition={{
          type: "tween",
          duration: 2,
        }}
        className={`${className} bg-primary h-full`}
        // style={{ width: percentage }}
      ></motion.div>
    </div>
  );
}
