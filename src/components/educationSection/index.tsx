import { SparklesText } from "../ui/sparkles-text";

export const EducationSection = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center ">
      <SparklesText
        text="Education Qualification"
        className="text-[28px] leading-[42px] text-dark-100 font-normal"
      />

      <div className="w-full max-w-[800px] border !border-neutral-800 bg-dark-400 text-dark-100 rounded-xl">
        <div className="p-4 flex items-center gap-3 border-b !border-b-neutral-800">
          <div className="w-[8px] h-[8px] rounded-[50%] bg-red-700"></div>
          <div className="w-[8px] h-[8px] rounded-[50%] bg-yellow-500"></div>
          <div className="w-[8px] h-[8px] rounded-[50%] bg-success-600"></div>
        </div>

        <div className="flex flex-col gap-1 p-4">
          <span className="text-[18px]">&gt; yarn education-qualification</span>
          <span className="text-green-500 text-[16px] leading-6">
            ✔ BSC in CSE - Eastern University - CGPA: 3.61 ✓ Compiled in
            126,144,000,000ms
          </span>

          <span className="text-green-500 text-[16px] leading-6">
            ✔ HSC - DMRC - GPA: 4.78
          </span>

          <span className="text-green-500 text-[16px] leading-6">
            ✔ SSC - KOAHS - GPA: 5.00
          </span>

          <span className="text-blue-500 text-[16px] leading-6">
            ℹ &nbsp; 3 files updated
          </span>

          <span>Success! Project initialization completed.</span>
        </div>
      </div>
    </div>
  );
};
