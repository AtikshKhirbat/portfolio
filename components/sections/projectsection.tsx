"use client";
import { motion, AnimatePresence } from "motion/react";
import Loader2 from "../ui/loader2";
import { useState } from "react";
import Button from "../ui/Button";
import { FaFolderOpen } from "react-icons/fa";
import { FaTerminal, FaBug, FaFire } from "react-icons/fa";
import Image from "next/image";
import { IoCube } from "react-icons/io5";
export default function ProjectSection() {
  const projects = [
    {
      projecttitle: "Level 1: Landing Page",
      projectdesc:
        "A landing page made for a VPN brand, ZephyrVPN. The webpage increases the reach of the brand by making information about it accessible to the masses.",
      projectname: "Zephyr VPN",
      tags: [
        { tag: "React", color: "" },
        { tag: "Javascript", color: "bg-[#8c811f]!" },
      ],
      git: "https://github.com/zephiteofficial/zephyrvpn-website",
      host: "https://zephyrvpn.com/",
      image:
        "https://github.com/AtikshKhirbat/portfolio/blob/e1b85b5b1f4f6b275c44cf49f27f2f514ff2f3f9/public/image.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Calculate completion percentage based on current project
  const completionPercentage = Math.round(
    ((currentIndex + 1) / projects.length) * 100
  );

  const goToProject = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="px-5 md:px-20 py-2.5 flex-col w-full h-full justify-center"
    >
      <div className="w-full h-fit gap-10 px-5 flex flex-col">
        <div className="w-full h-fit gap-2.5 py-2.5">
          <div className="w-fit h-fit flex flex-col">
            <p className="text-primary text-7xl md:text-8xl">Projects</p>
            <div className="flex flex-col gap-2.5 w-full h-fit">
              <div className="flex w-full leading-none">
                <p className="text-xl text-secondarytext">
                  Select a project to view details. Total Completion:&nbsp;
                </p>
                <motion.p
                  key={completionPercentage}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl text-primary"
                >
                  {completionPercentage}%
                </motion.p>
              </div>
              <Loader2 percentage={`${completionPercentage}%`} />
            </div>
          </div>
        </div>
        <Carousel
          projects={projects}
          currentIndex={currentIndex}
          direction={direction}
          goToProject={goToProject}
          goToPrevious={goToPrevious}
          goToNext={goToNext}
        />
        <ProjectCard />
      </div>
    </section>
  );
}

interface ProjectData {
  projecttitle: string;
  projectname: string;
  projectdesc: string;
  tags: TagData[];
  git: string;
  host: string;
  image: string;
}

interface TagData {
  tag: string;
  color: string;
}

interface ProjectDataDisplayProps extends ProjectData {
  direction: number;
}

export function ProjectDataDisplay({
  projecttitle,
  projectname,
  projectdesc,
  tags,
  git,
  host,
  image,
  direction,
}: ProjectDataDisplayProps) {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      key={projectname}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="flex flex-col w-full h-fit"
    >
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-2.5 bg-secondary border-2 border-border shadow-box w-fit text-text text-2xl font-vt"
      >
        {projecttitle}
      </motion.p>
      <div className="w-full h-fit py-2.5 gap-2.5 flex-col flex xl:flex-row">
        <div className="w-full h-fit gap-2.5 flex-col order-1 xl:order-0">
          <div className="w-full h-fit gap-10">
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-jersey"
            >
              {projectname}
            </motion.p>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="border-l-2 border-secondarytext w-full pl-8"
            >
              <p className="w-full warp-normal font-spacegrot! text-2xl text-secondarytext">
                {projectdesc}
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full h-fit gap-2.5 flex flex-col mt-4"
          >
            <p className="text-xl leading-none text-secondarytext">
              Tech Stack:
            </p>
            <div className="flex gap-5">
              {tags.map((tagData, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Tags tag={tagData.tag} className={`${tagData.color}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="py-8 w-full gap-2.5 h-fit flex"
          >
            <Button href={host} className="bg-foreground! text-text!">
              <FaFolderOpen />
              Open
            </Button>
            <Button href={git} className="bg-text text-foreground!">
              <FaTerminal />
              View Work
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-full h-full flex order-0"
        >
          <div className="overflow-visible w-full h-fit mx-32 aspect-video bg-[url(/image.png)] bg-cover border-2 border-border shadow-box hidden relative lg:inline">
            <motion.p
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 6, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="p-1 border-2 border-border shadow-box absolute -bottom-4 -right-4 text-primary bg-white"
            >
              {projectname}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

interface CarouselProps {
  projects: ProjectData[];
  currentIndex: number;
  direction: number;
  goToProject: (index: number) => void;
  goToPrevious: () => void;
  goToNext: () => void;
}

export function Carousel({
  projects,
  currentIndex,
  direction,
  goToProject,
  goToPrevious,
  goToNext,
}: CarouselProps) {
  return (
    <div className="w-full h-fit flex flex-col gap-8">
      <div className="w-full relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <ProjectDataDisplay
            key={currentIndex}
            {...projects[currentIndex]}
            direction={direction}
          />
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="w-full flex flex-col items-center gap-4"
      >
        <div className="flex gap-2 items-center">
          <motion.button
            whileHover={{
              x: 4,
              y: 4,
              boxShadow: "0px 0px 0px 0px var(--border)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{
              x: 0,
              y: 0,
              boxShadow: "4px 4px 0px 0px var(--border)",
            }}
            onClick={goToPrevious}
            className="px-4 py-2 border-2 border-border bg-foreground transition-colors touch-none"
            aria-label="Previous project"
          >
            ←
          </motion.button>

          <div className="flex gap-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToProject(index)}
                whileHover={{
                  x: 4,
                  y: 4,
                  boxShadow: "0px 0px 0px 0px var(--border)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{
                  x: 0,
                  y: 0,
                  boxShadow: "4px 4px 0px 0px var(--border)",
                }}
                className={`w-10 h-10 border-2 border-border shadow-box touch-none ${
                  currentIndex === index ? "text-text bg-primary!" : ""
                }`}
              >
                {index + 1}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{
              x: 4,
              y: 4,
              boxShadow: "0px 0px 0px 0px var(--border)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{
              x: 0,
              y: 0,
              boxShadow: "4px 4px 0px 0px var(--border)",
            }}
            onClick={goToNext}
            className="px-4 py-2 border-2 border-border bg-foreground transition-colors touch-none"
            aria-label="Next project"
          >
            →
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

interface TagsInter extends React.ComponentProps<"div"> {
  tag: string;
}

export function Tags({ className = "", tag, ...props }: TagsInter) {
  return (
    <div
      className={`${className} p-2.5 border-2 border-border shadow-box bg-primary text-text`}
      {...props}
    >
      {tag}
    </div>
  );
}

export function ProjectCard() {
  return (
    <div className="w-full h-fit px-5 py-2.5 grid grid-cols-3 md:grid-cols-3 content-center justify-between border-t-2 border-dashed border-secondarytext">
      <div className="flex flex-col p-5">
        <div className="flex flex-col items-center justify-center text-center">
          <IoCube className="size-5" />
          <p className="leading-none text-3xl">20</p>
          <p className="leading-none text-xl text-secondarytext">
            Repos Pushed
          </p>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <div className="flex flex-col items-center justify-center text-center">
          <FaFire className="size-5" />
          <p className="leading-none text-3xl">15</p>
          <p className="leading-none text-xl text-secondarytext">Day Streak</p>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <div className="flex flex-col items-center justify-center text-center">
          <FaBug className="size-5" />
          <p className="leading-none text-3xl">0</p>
          <p className="leading-none text-xl text-secondarytext">
            Bugs (Officially)
          </p>
        </div>
      </div>
    </div>
  );
}
