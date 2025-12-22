"use client";
import { motion } from "motion/react";
import SocialButton from "../ui/socialbutton";
import { GrMail } from "react-icons/gr";
import Loader2 from "../ui/loader2";
import { FaCoffee, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { BiSolidSend } from "react-icons/bi";
import { BsBriefcase, BsBriefcaseFill } from "react-icons/bs";
export default function ContactMe() {
  return (
    <section
      id="contact"
      className="px-5 md:px-20 py-2.5 flex-col w-full h-full justify-center"
    >
      <div className="px-5 gap-8 flex flex-col w-full h-fit">
        <div className="gap-8 flex flex-col w-full h-fit">
          <div className="flex flex-col gap-2.5 py-2.5 h-fit w-full">
            <div className="w-fit h-fit flex flex-col">
              <p className="text-primary text-7xl md:text-8xl">Contact Me</p>
              <p className="font-vt text-xl">
                Communication Hub. Send a Transmission.
              </p>
              <Loader2 percentage="100%" />
            </div>
          </div>
          <MailSection />
        </div>
        <ContactCard />
      </div>
    </section>
  );
}

function MailSection() {
  return (
    <div className="gap-12 p-8 flex flex-col w-full h-fit relative border-2 border-border shadow-box">
      <div className="gap-2.5 w-full h-fit flex flex-col">
        <p className="text-5xl">Let&apos; Connect!!!</p>
        <p className="font-vt text-2xl">
          Drop me an email at atikshkhirbat0@gmail.com or say hi on my social
          media!!! I am always open to discussing your creative ideas and bring
          your visions to life!!!
        </p>
      </div>
      <div className="gap-3.5 flex flex-col w-full h-fit">
        <div className="gap-2.5 p-2.5 w-full h-fit flex flex-col md:flex-row border-2 border-border shadow-box items-center">
          <div className="border-2 border-border bg-primary p-2.5">
            <GrMail className="size-6 text-text" />
          </div>
          <p className="text-2xl">atikshkhirbat0@gmail.com</p>
        </div>
        <div className="w-full h-fit flex flex-col md:flex-row py-2.5 gap-3.5">
          <SocialButton href="https://github.com/AtikshKhirbat" target="_blank">
            <FaGithub className="size-7" />
            <p className="text-2xl">Github</p>
          </SocialButton>
          <SocialButton
            href="https://www.linkedin.com/in/atikshkhirbat/"
            target="_blank"
          >
            <FaLinkedin className="size-7" />
            <p className="text-2xl">Linkedin</p>
          </SocialButton>
          {/* <SocialButton href="">
            <FaXTwitter className="size-7" />
            <p className="text-2xl">X (Twitter)</p>
          </SocialButton> */}
        </div>
      </div>
    </div>
  );
}

export function ContactCard() {
  return (
    <div className="w-full h-fit px-5 py-2.5 grid grid-cols-2 md:grid-cols-4 justify-between border-t-2 border-dashed border-secondrytext">
      <div className="flex flex-col p-5">
        <div className="flex flex-col items-center justify-center text-center">
          <BiSolidSend className="size-5" />
          <p className="leading-none text-3xl">24hr</p>
          <p className="leading-none text-xl text-secondarytext">
            Response Time
          </p>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <div className="flex flex-col items-center justify-center text-center">
          <FaLocationDot className="size-5" />
          <p className="leading-none text-3xl">Eth</p>
          <p className="leading-none text-xl text-secondarytext">
            Location: Earth
          </p>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <div className="flex flex-col items-center justify-center text-center">
          <FaCoffee className="size-5" />
          <p className="leading-none text-3xl">Yes</p>
          <p className="leading-none text-xl text-secondarytext">Coffee Chat</p>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <div className="flex flex-col items-center justify-center text-center">
          <BsBriefcaseFill className="size-5" />
          <p className="leading-none text-3xl">Open</p>
          <p className="leading-none text-xl text-secondarytext">Status</p>
        </div>
      </div>
    </div>
  );
}
