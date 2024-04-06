import Navbar01 from "@/components/Navbars/Navbar01";
import AboutSection from "@/components/about-section/AboutSection";
import ContactSection from "@/components/contact-section/ContactSection";
import DancingLines from "@/components/cursor-animation/DancingLines";
import HomeSection from "@/components/home-section/HomeSection";
import ProjectSection from "@/components/project-section/ProjectSection";
import SkillSection from "@/components/skill-section/SkillSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full z-10 relative min-h-screen  flex flex-col gap-20 ">
      <div className="w-full relative flex flex-col gap-20 px-0 md:px-10 py-8">
        <Navbar01 />
        <div className="w-full min-h-[100vh] ">
          <DancingLines backgroundColor={"#020E0F"}></DancingLines>
          <HomeSection />
        </div>
      </div>
      <div className="w-full min-h-[40vh] px-0 md:px-10">
        <AboutSection />
      </div>
      <div className="w-full min-h-[40vh] px-0 md:px-10 ">
        <SkillSection />
      </div>
      <div className="w-full min-h-[40vh] px-0 md:px-10 ">
        <ProjectSection />
      </div>
      <div className="w-full min-h-[40vh] px-0 md:px-10">
        <ContactSection />
        <div className="">
          <div className="w-full pl-4">
            <p className="text-secondary dancing-script text-lg">{`</body>`}</p>
          </div>

          <div className="w-full">
            <p className="text-secondary dancing-script text-lg">{`</html>`}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
