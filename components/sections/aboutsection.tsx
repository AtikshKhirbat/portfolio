"use client";
import { FaBugSlash, FaListCheck } from "react-icons/fa6";
import { useInView } from "motion/react";
import { motion } from "motion/react";
import { useRef } from "react";
import { FaCoffee } from "react-icons/fa";
import InventoryComp from "../ui/inventory";
export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="about"
      className="px-5 md:px-20 py-2.5 flex-col w-full h-full justify-center"
    >
      <div className="flex px-5 text-7xl md:text-8xl">
        <h1>About&nbsp;</h1>
        <h1 className="text-primary">Me</h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <AboutLeft />
        <AboutRight />
      </div>
    </section>
  );
}

export function AboutRight() {
  return (
    <div className="px-5 py-2.5 gap-2.5 w-full min-h-full flex flex-col justify-center">
      <div className="h-fit w-full flex flex-col border-2 border-border shadow-box bg-card">
        <div className="bg-text p-2.5 h-fit w-full text-foreground flex justify-between items-center">
          <p className="text-2xl font-vt">Character_Profile.exe</p>
          <div className="gap-2.5 w-fit h-fit flex">
            <div className="border-2 border-foreground bg-primary size-4"></div>
            <div className="border-2 border-foreground bg-destructive size-4"></div>
          </div>
        </div>

        <div className="p-2.5 gap-2.5 w-full h-fit flex flex-col">
          {/* Character Top */}
          <div className="gap-2.5 p-2.5 flex w-full h-fit">
            <div className="size-30 shrink-0 border-2 border-border relative bg-[url(/png_1.jpg)] bg-cover">
              <p className="absolute bottom-0 right-0 bg-primary outline-2 px-0.5 outline-border text-text">
                LVL 21
              </p>
            </div>
            <div className="w-full h-full justify-between flex flex-col">
              <div className="w-fit h-fit flex flex-col">
                <p className="font-jersey text-2xl leading-3 h-fit">Rigbyte</p>
                <p className="text-xl text-secondarytext">
                  (Fullstack Developer)
                </p>
              </div>
              <div className="w-full h-fit flex flex-col">
                <div className="w-full h-fit leading-0 justify-between flex">
                  <p className="text-xl text-secondarytext">Hit Points</p>
                  <p className="text-xl text-secondarytext">55 / 100</p>
                </div>
                <div className="w-full h-3 border-2 border-border bg-progressbg p-0.5">
                  <div className="w-[55%] bg-destructive h-full"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Character Top End */}
          {/* Achievment Cards */}
          <AchievmentCards />
          {/* Achivement Cards End*/}
          <Inventory />
        </div>
      </div>
    </div>
  );
}
export function Inventory() {
  return (
    <div className="p-2.5 gap-2.5 flex flex-col w-full h-fit">
      <p className="text-2xl text-secondarytext">Inventory</p>

      <div className="lg:grid-cols-2 xl:grid-cols-5 grid gap-2 w-full h-fit text-2xl leading-none">
        <InventoryComp tip="Javascript: 6 months">JS</InventoryComp>
        <InventoryComp tip="React: 6 months">React</InventoryComp>
        <InventoryComp tip="Tailwind CSS: 6 months">Tailwind CSS</InventoryComp>
        <InventoryComp tip="Next.JS: 6 months">Next.JS</InventoryComp>
        <InventoryComp tip="Python: 2 years">Python</InventoryComp>
        {/* <p className="p-5 flex items-center text-center justify-center bg-mutedcard border-2 border-border">
          JS
        </p>
        <p className="p-5 flex items-center text-center justify-center bg-mutedcard  border-2 border-border">
          React
        </p>
        <p className="p-5 flex items-center text-center justify-center bg-mutedcard  border-2 border-border">
          Tailwind CSS
        </p>
        <p className="p-5 flex items-center text-center justify-center bg-mutedcard  border-2 border-border">
          Next.JS
        </p>
        <p className="p-5 flex items-center text-center justify-center bg-mutedcard  border-2 border-border">
          Python
        </p> */}
      </div>
    </div>
  );
}
export function AchievmentCards() {
  return (
    <div className="p-2.5 gap-2.5 flex flex-col md:flex-row w-full h-fit">
      <div className="flex flex-col justify-between w-full py-4 px-2.5 border-2 border-border text-center items-center">
        <FaListCheck className="text-primary size-5" />
        <p className="text-2xl leading-none">2</p>
        <p className="text-secondarytext text-xl leading-none">Projects</p>
      </div>
      <div className="flex flex-col justify-between w-full py-4 px-2.5 border-2 border-border text-center items-center">
        <FaCoffee className="text-primary size-5" />
        <p className="text-2xl leading-none">525</p>
        <p className="text-secondarytext text-xl leading-none">Fuel</p>
      </div>
      <div className="flex flex-col justify-between w-full py-4 px-2.5 border-2 border-border text-center items-center">
        <FaBugSlash className="text-primary size-5" />
        <p className="text-2xl leading-none">430</p>
        <p className="text-secondarytext text-xl leading-none">Bugs Slayed</p>
      </div>
    </div>
  );
}
export function AboutLeft() {
  return (
    <div className="px-5 py-2.5 w-full min-h-full gap-5 flex flex-col justify-start">
      <div className="px-2.5 py-3 md:px-10 md:py-10 h-fit gap-4 flex flex-col relative border-2 bg-card border-border shadow-box w-full wrap-normal font-vt text-3xl">
        <p>
          Hey! My name is Test, i am a fullstack developer with a
          bachelor&apos;s degree in Computer Science.
        </p>
        <p>
          I work on making interactive and responsive webapps that can push your
          business forward.
        </p>
        <p>
          Outside of the web you can find me playing the occasional games,
          cooking or behind a camera.
        </p>
      </div>
    </div>
  );
}
