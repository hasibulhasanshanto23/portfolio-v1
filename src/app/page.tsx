// import { ContactSection } from "@/components/contactSection";
import { EducationSection } from "@/components/educationSection";
import { ExperienceSection } from "@/components/experienceSection";
import { FooterSection } from "@/components/footerSection";
import { Container } from "@/components/layout/Container";
import { NavSection } from "@/components/navSection";
import { OthersSection } from "@/components/otherSection";
import { OverView } from "@/components/overViewSection";
import { ProjectsSection } from "@/components/projectsSection";
import { SkillSection } from "@/components/skillsSection";

export default function Home() {
  return (
    <>
      <NavSection />
      <section
        id="overview"
        className="pt-20 pb-12 flex justify-center items-center"
      >
        <Container>
          <OverView />
        </Container>
      </section>
      <section id="skills" className="py-4  flex justify-center items-center">
        <Container>
          <SkillSection />
        </Container>
      </section>
      <section
        id="experience"
        className=" py-8 flex justify-center items-center"
      >
        <Container>
          <ExperienceSection />
        </Container>
      </section>

      <section id="projects" className=" py-8 flex justify-center items-center">
        <Container>
          <ProjectsSection />
        </Container>
      </section>

      <section
        id="education"
        className=" py-8 flex justify-center items-center"
      >
        <Container>
          <EducationSection />
        </Container>
      </section>

      <section className=" py-8 flex justify-center items-center">
        <Container>
          <OthersSection />
        </Container>
      </section>

      {/* <section className=" py-8 flex justify-center items-center">
        <Container>
          <ContactSection />
        </Container>
      </section> */}

      <section className=" py-8 flex justify-center items-center">
        <Container>
          <FooterSection />
        </Container>
      </section>
    </>
  );
}
