import { ExperienceSection } from "@/components/experienceSection";
import { Container } from "@/components/layout/Container";
import { OverView } from "@/components/overViewSection";
import { SkillSection } from "@/components/skillsSection";

export default function Home() {
  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[400px] backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-lg px-3 py-2 flex justify-center space-x-6  z-50">
        <a
          href="#"
          className="text-white/80 hover:text-white flex flex-col justify-center items-center"
        >
          <img
            src="images/inspection.png"
            className="w-10 h-10 object-cover "
          />
          <span className="text-[14px] leading-4">Overview</span>
        </a>
        <a
          href="#"
          className="text-white/80 hover:text-white flex flex-col justify-center items-center"
        >
          <img src="images/skill.png" className="w-10 h-10 object-cover" />
          <span className="text-[14px] leading-4">Skills</span>
        </a>
        <a
          href="#"
          className="text-white/80 hover:text-white flex flex-col justify-center items-center"
        >
          <img src="images/experience.png" className="w-10 h-10 object-cover" />
          <span className="text-[14px] leading-4">Experience</span>
        </a>
        <a
          href="#"
          className="text-white/80 hover:text-white flex flex-col justify-center items-center"
        >
          <img src="images/clipboard.png" className="w-10 h-10 object-cover" />
          <span className="text-[14px] leading-4">Projects</span>
        </a>
      </nav>
      <section className="py-20 flex justify-center items-center">
        <Container>
          <OverView />
        </Container>
      </section>
      <section className="py-4  flex justify-center items-center">
        <Container>
          <SkillSection />
        </Container>
      </section>
      <section className=" py-8 flex justify-center items-center">
        <Container>
          <ExperienceSection />
        </Container>
      </section>
    </>
  );
}
