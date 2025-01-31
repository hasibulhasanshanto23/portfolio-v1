import Link from "next/link";
import WordRotate from "../ui/word-rotate";
import { GitHubLight, LinkedIn } from "developer-icons";
import Image from "next/image";

export const OverView = () => {
  return (
    <div className="flex items-center justify-center gap-2 pt-[68px] max-lg:pt-0">
      <div className="flex flex-col items-center">
        <div className="w-[155px] h-[155px] rounded-[50%] overflow-hidden">
          <Image
            src="/images/logo3.JPG"
            alt="logo"
            width={155}
            height={155}
            className="object-cover"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="pt-6 flex items-center gap-1 max-lg:text-[70px] text-[120px]  font-bold text-dark-100">
          <span className="leading-[0.9]">H</span>
          <span className="leading-[0.9] text-red-600">A</span>
          <span className="leading-[0.9]">S</span>
          <span className="leading-[0.9]">i</span>
          <span className="leading-[0.9]">B</span>
          <span className="leading-[0.9]">U</span>
          <span className="leading-[0.9]">L</span>
        </div>
        <div className="flex items-center gap-1 max-lg:text-[70px] text-[120px]  font-bold text-dark-100">
          <span className="leading-[0.9]">H</span>
          <span className="leading-[0.9]">A</span>
          <span className="leading-[0.9]">S</span>
          <span className="leading-[0.9] text-yellow-400">A</span>
          <span className="leading-[0.9]">N</span>
        </div>
        <WordRotate
          className="text-[16px] sm:text-[18px] md:text-[20px] leading-[50px] font-medium text-red-400 dark:text-white tracking-[8px]"
          words={["Software Engineer", "Frontend Specialist"]}
        />
        <div className="flex items-center gap-3">
          <Link href="https://github.com/hasibulhasanshanto23" target="_blank">
            <GitHubLight size={25} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hasibul-hasan-shanto-b19b41207"
            target="_blank"
          >
            <LinkedIn size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};

// https://xandemon.github.io/developer-icons/icons/All/
