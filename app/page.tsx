import Image from "next/image";
import NavBar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/herosection";
import AboutMe from "@/components/sections/aboutsection";
import ProjectSection from "@/components/sections/projectsection";
import ContactMe from "@/components/sections/contactme";
export default function Home() {
  return (
    <div className="flex flex-col md:gap-y-48 min-h-screen bg-background font-jersey">
      <NavBar />

      {/* Hero Section - centered on screen */}
      <div className="flex-1 flex items-center justify-center xl:px-20 min-h-screen mt-10 lg:mt-0">
        <HeroSection />
      </div>

      {/* About Section */}
      <div className="xl:px-20 h-fit justify-center flex flex-1 items-center overflow-clip">
        <AboutMe />
      </div>
      <div className="xl:px-20 min-fit justify-center flex flex-1 items-center">
        <ProjectSection />
      </div>
      <div className="xl:px-20 min-fit justify-center flex flex-1 items-center">
        <ContactMe />
      </div>
    </div>
  );
}