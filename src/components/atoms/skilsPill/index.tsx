import { ReactNode } from "react";

export const SkillPill = ({
  name,
  logo,
}: {
  name: string;
  logo: ReactNode;
}) => {
  return (
    <div className="flex items-center gap-2 bg-dark-400 px-2 py-1 rounded-[8px] ">
      <div className="w-5 h-5 rounded-[50%] overflow-hidden flex items-center justify-center object-cover">
        {logo}
      </div>
      <span className="text-[16px] leading-[22px] font-medium text-dark-100">
        {name}
      </span>
    </div>
  );
};
