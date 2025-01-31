import Link from "next/link";
import { SparklesText } from "../ui/sparkles-text";
import Image from "next/image";

export const OthersSection = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center  text-dark-100">
      <SparklesText
        text="Activities"
        className="text-[28px] leading-[42px] text-dark-100 font-normal"
      />
      <div className=" flex items-center gap-4 w-full max-w-[800px] border !border-neutral-800 bg-dark-400 text-dark-100 rounded-xl p-4">
        <Image
          src="/images/npm.png"
          alt="NPM Logo"
          width={56}
          height={56}
          className="object-cover "
        />

        <div className="flex flex-col gap-1">
          <Link
            href="https://www.npmjs.com/package/bangla-geo"
            target="_blank"
            className="text-[22px] font-medium leading-[28px] hover:underline transition-all duration-200"
          >
            bangla-geo
          </Link>
          <span className="text-[16px] leading-6">
            It&apos;s a Reactjs hook to get the information(divisions,
            districts, division details) of bangladesh.
          </span>
        </div>
      </div>
    </div>
  );
};
