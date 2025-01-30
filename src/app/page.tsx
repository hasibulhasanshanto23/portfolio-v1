import { Container } from "@/components/layout/Container";
import { OverView } from "@/components/overViewSection";
import { SkillSection } from "@/components/skillsSection";

export default function Home() {
  return (
    <>
      <section className="py-20 bg-neutral-25  flex justify-center items-center">
        <Container>
          <OverView />
        </Container>
      </section>
      <section className="  flex justify-center items-center">
        <Container>
          <SkillSection />
        </Container>
      </section>
    </>
  );
}
