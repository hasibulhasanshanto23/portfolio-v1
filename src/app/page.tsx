import { Container } from "@/components/layout/Container";
import { OverView } from "@/components/overViewSection";

export default function Home() {
  return (
    <>
      <section className="py-20 bg-neutral-50 h-screen flex justify-center items-center">
        <Container>
          <OverView />
        </Container>
      </section>
      <section className="py-20  flex justify-center items-center">
        <Container>Skills Section</Container>
      </section>
    </>
  );
}
