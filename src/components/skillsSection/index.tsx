import { OrbitingCircles } from "../ui/orbiting-circles";
import { JavaScript ,React,NextJs,TypeScript,Redux,Storybook,Git,NodeJs,ExpressJsDark,MongoDB,HTML5,CSS,TailwindCSS,MaterialUI,ShadcnUI} from "developer-icons";

export const SkillSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
    {/* Orbiting Section */}
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Skills
      </span>
  
      <OrbitingCircles iconSize={40}>
        <JavaScript />
        <React/>
        <NextJs/>
        <TypeScript/>
        <Redux/>
        <Storybook/>
        <Git/>
        <NodeJs/>
        <ExpressJsDark/>
        <MongoDB/>
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <HTML5/>
        <CSS/>
        <TailwindCSS/>
        <ShadcnUI/>
        <MaterialUI/>
      </OrbitingCircles>
    </div>
  
    {/* Text Section */}
    <div className="flex items-center justify-center px-4 md:px-6 lg:px-8 max-w-[600px]">
      <span className="text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </span>
    </div>
  </div>
  
  );
};
