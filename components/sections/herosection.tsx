"use client";
import { FaTerminal } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Button from "../ui/Button";
import Image from "next/image";
import Loader from "../ui/loader";
 
export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full h-full px-5 md:px-20 flex flex-col gap-2.5"
    >
      {/* Parent Container */}
      <div className="w-full h-full flex flex-col lg:flex-row">
        {/* Left Section */}
        <LeftHero />
        {/* Left Section End */}
        {/* Right Section */}
        <RightHero />
        {/* Right Section End */}
      </div>
      {/*Parent Container End*/}
    </section>
  );
}

export function LeftHero() {
  return (
    <div className="px-5 gap-2.5 w-full flex flex-col justify-center items-center">
      {/* Left Card */}
      <div className="md:p-16 p-5 space-y-2.5 bg-card border-2 border-border w-full h-fit shadow-box   ">
        <div className="flex flex-col text-5xl font-jersey">
          <p>msg db</p>
          <p>Hello World! . . . </p>
          <div className="flex">
            <p>I am</p> <p className="text-primary">&nbsp;Atiksh</p>
          </div>
          <p className="bg-text w-fit text-foreground px-1">FullStack Dev</p>
        </div>
        <div className="flex h-fit stroke-2 border-t-2 border-dashed border-secondarytext">
          <p className="h-fit leading-none font-jersey text-primary">
            {">"}&nbsp;&nbsp;
          </p>
          <p className="text-xl h-fit leading-none font-vt text-secondarytext">
            Crafting pixel-perfect web experiences, one pixel at a time.{" "}
          </p>
        </div>
      </div>
      {/* Left Card End */}
      {/* Left Buttons */}
      <div className="py-2.5 flex w-full h-fit gap-8">
        <Button href="#projects" target="">
          <FaTerminal />
          View Projects
        </Button>
        <Button href="#contact" className="bg-foreground! !text-text" target="">
          <GrMail />
          Contact Me
        </Button>
      </div>
      {/* Left Buttons End */}
    </div>
  );
}
export function RightHero() {
  return (
    <div className="gap-2.5 p-5 w-full h-full flex justify-center items-center">
      {/*Right Card*/}
      <div className="w-full h-fit flex flex-col bg-card shadow-box border-2 border-border">
        <div className="bg-text flex justify-between p-2.5">
          <div className="flex w-fit h-fit gap-1.5 items-center">
            <div className="rounded-full bg-[#1f8c31] size-2.5"></div>
            <p className="text-2xl font-jersey text-foreground">Player_01</p>
          </div>
          <p className="text-2xl font-jersey text-foreground">LVL 21</p>
        </div>
        <div className="w-full h-fit p-2.5 gap-2.5 flex flex-col">
          <div className="p-2.5 gap-2.5 w-full h-full flex">
            <div className="border-2 border-border size-30 bg-[url(https://github.com/AtikshKhirbat/portfolio/blob/e1b85b5b1f4f6b275c44cf49f27f2f514ff2f3f9/public/png_1.jpg?raw=true)] bg-cover"></div>
            <div className="flex flex-col w-fit min-h-full justify-between">
              <div className="w-full h-fit flex flex-col">
                <div className="w-full h-full">
                  <p className="text-4xl leading-none h-fit">Atiksh</p>
                  <p className="text-secondarytext text-2xl leading-none h-fit">
                    Class: Web Wizard
                  </p>
                </div>
              </div>
              <div className="flex w-full h-fit gap-2 items-center">
                <p className="leading-none h-fit text-2xl text-secondarytext">
                  Int:
                </p>
                <div className="size-4 border-2 border-border bg-secondary"></div>
                <div className="size-4 border-2 border-border bg-secondary"></div>
                <div className="size-4 border-2 border-border bg-secondary"></div>
                <div className="size-4 border-2 border-border bg-transparent"></div>
              </div>
            </div>
          </div>
          <div className="gap-2.5 flex flex-col px-2.5 py-2 w-full h-fit">
            <div className="w-full h-fit flex-col py-2.5">
              <div className="w-full h-fit justify-between flex">
                <p className="text-2xl">Frontend</p>
                <p className="text-secondarytext text-2xl">6 / 12 Months</p>
              </div>
              <Loader percentage={`50%`} />
            </div>
          </div>
          <div className="gap-2.5 flex flex-col px-2.5 py-2 w-full h-fit">
            <div className="w-full h-fit flex-col py-2.5">
              <div className="w-full h-fit justify-between flex">
                <p className="text-2xl">Backend</p>
                <p className="text-secondarytext text-2xl">4 / 12 Months</p>
              </div>
              <Loader percentage="33%" className="bg-secondary!" />
            </div>
          </div>
          <div className="gap-2.5 flex flex-col px-2.5 py-2 w-full h-fit">
            <div className="w-full h-fit flex-col py-2.5">
              <div className="w-full h-fit justify-between flex">
                <p className="text-2xl">Design</p>
                <p className="text-secondarytext text-2xl">2 / 12 Months</p>
              </div>

              <Loader percentage="16%" className="bg-bar1!" />
            </div>
          </div>

          <div className="px-2.5">
            {/* Command Prompt */}
            <div className="w-full h-fit p-2.5 gap-2.5 bg-cardhome] md:flex flex-col text-secondarytext text-xl border-2 border-border hidden">
              <p>{">"} Initializing Portfolio . . . . . . </p>
              <p>{">"} Loading Assets . . . . . . </p>
              <p>{">"} Success!!!</p>
            </div>
            {/* Command Prompt End*/}
          </div>
        </div>
      </div>
      {/*Right card end*/}
    </div>
  );
}
