import { Container } from "@/components/layout/Container";
import { OverView } from "@/components/overViewSection";

export default function Home() {
  return (
    <section className="py-20 bg-neutral-25 h-screen flex justify-center items-center">
      <Container>
        <OverView />
      </Container>
    </section>
  );
}
