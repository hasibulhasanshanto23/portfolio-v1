import { data } from "@/data";
import { SkillPill } from "../atoms/skilsPill";
import { OrbitingCircles } from "../ui/orbiting-circles";
import {
  JavaScript,
  React,
  NextJs,
  TypeScript,
  Redux,
  Storybook,
  Git,
  NodeJs,
  MongoDB,
  HTML5,
  CSS,
  TailwindCSS,
  MaterialUI,
  ShadcnUI,
  ExpressJsLight,
} from "developer-icons";
import { SparklesText } from "../ui/sparkles-text";
<SparklesText
  className="text-[28px] leading-[42px]"
  text="Some of my favourite tools"
/>;
export const SkillSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
      {/* Orbiting Section */}
      <div className="relative flex h-[420px] w-full flex-col items-center justify-center">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Skills
        </span>

        <OrbitingCircles iconSize={40}>
          <JavaScript />
          <React />
          <NextJs />
          <TypeScript />
          <Redux />
          <Storybook />
          <Git />
          <NodeJs />
          <ExpressJsLight />
          <MongoDB />
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
          <HTML5 />
          <CSS />
          <TailwindCSS />
          <ShadcnUI />
          <MaterialUI />
        </OrbitingCircles>
      </div>

      {/* Text Section */}
      <div className="flex flex-wrap gap-2 items-center justify-center  px-4 md:px-6 lg:px-8 max-w-[600px]">
        <div className="pb-6">
          <SparklesText
            text="Some of my favourite tools"
            className="text-[28px] leading-[42px] text-dark-100 font-normal"
          />
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {data?.skillsSet?.map((skill, i) => (
            <SkillPill key={i} name={skill?.name} logo={skill?.logo} />
          ))}
        </div>
      </div>
    </div>
  );
};
