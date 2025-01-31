import { data } from "@/data";
import { BentoCard } from "../ui/bento-grid";
import { SparklesText } from "../ui/sparkles-text";

export const ProjectsSection = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full grow">
      <SparklesText
        text="Projects"
        className="text-[28px] leading-[42px] text-dark-100 font-normal"
      />

      <div className="flex justify-center items-center flex-wrap gap-3 w-full grow">
        {data?.features?.map((feature) => (
          <BentoCard key={`${feature?.name}+${feature?.Icon}`} {...feature} />
        ))}
      </div>
    </div>
  );
};
