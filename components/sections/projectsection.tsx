"use client";
import Loader2 from "../ui/loader2";
import Button from "../ui/Button";
import { FaFolderOpen } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import Image from "next/image";
export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="px-5 md:px-20 py-2.5 flex-col w-full h-full justify-center"
    >
      <div className="w-full h-fit gap-10 px-5 flex flex-col">
        <div className="w-full h-fit gap-2.5 py-2.5">
          <div className="w-fit h-fit flex flex-col">
            <p className="text-primary text-8xl">Projects</p>
            <div className="flex flex-col gap-2.5 w-full h-fit">
              <div className="flex w-full leading-none">
                <p className="text-xl text-secondarytext">
                  Select a project to view details. Total Completion:&nbsp;
                </p>
                <p className="text-xl text-primary">25%</p>
              </div>
              <Loader2 percentage="25%" />
            </div>
          </div>
        </div>
        <ProjectData
          projecttitle="Level 1: Landing Page"
          projectdesc="A landing page made for a VPN brand, ZephyrVPN. The webpage increases the reach of the brand by making information about it accessible to the masses."
          projectname="Zephyr VPN"
          tags={[
            { tag: "React", color: "" },
            { tag: "Javascript", color: "bg-[#8c811f]!" },
          ]}
          git=""
          host=""
          image=""
        />
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
export function ProjectData({
  projecttitle,
  projectname,
  projectdesc,
  tags,
  git,
  host,
  image,
}: ProjectData) {
  return (
    <div className="flex flex-col w-full h-fit">
      <p className="p-2.5 bg-secondary border-2 border-black shadow-box w-fit text-white text-2xl font-vt">
        {projecttitle}
      </p>
      <div className="w-full h-fit py-2.5 gap-2.5 flex-col flex xl:flex-row">
        <div className="w-full h-fit gap-2.5 flex-col order-1 xl:order-0">
          <div className="w-full h-fit gap-10">
            <p className="text-6xl font-jersey">{projectname}</p>
            <div className="border-l-2 border-secondarytext w-full pl-8">
              <p className="w-full warp-normal font-spacegrot! text-2xl text-secondarytext">
                {projectdesc}
              </p>
            </div>
          </div>
          <div className="w-full h-fit gap-2.5 flex flex-col mt-4">
            <p className="text-xl leading-none text-secondarytext">
              Tech Stack:
            </p>
            <div className="flex gap-5">
              {tags.map((tagData, index) => (
                <Tags
                  key={index}
                  tag={tagData.tag}
                  className={`${tagData.color}`}
                />
              ))}
            </div>
          </div>
          <div className="py-8 w-full gap-2.5 h-fit flex">
            <Button href={host} className="bg-black! text-white!">
              <FaFolderOpen />
              Open
            </Button>
            <Button href={git} className="bg-white text-black!">
              <FaTerminal />
              View Work
            </Button>
          </div>
        </div>
        <div className="w-full h-full flex order-0">
          <div className="overflow-visible w-full h-fit mx-32 aspect-video bg-[url(/image.png)] bg-cover border-2 border-black shadow-box hidden relative lg:inline">
            <p className="p-1 border-2 border-black shadow-box absolute -bottom-4 -right-4 rotate-6 text-primary bg-white">
              {projectname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TagsInter extends React.ComponentProps<"div"> {
  tag: string;
}

export function Tags({ className = "", tag, ...props }: TagsInter) {
  return (
    <div
      className={`${className} p-2.5 border-2 border-black shadow-box bg-primary text-white`}
      {...props}
    >
      {tag}
    </div>
  );
}
