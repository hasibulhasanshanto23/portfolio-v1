import { PulsatingButton } from "../ui/pulsating-button";

export const ContactSection = () => {
  return (
    <div className="flex items-center gap-8 justify-center ">
      <PulsatingButton href="mailto:hasibulhasan23sept@gmail.com">
        Contact Me
      </PulsatingButton>
      <PulsatingButton href="/Hasibul-Hasan.pdf" download={true}>
        Download CV
      </PulsatingButton>
    </div>
  );
};
