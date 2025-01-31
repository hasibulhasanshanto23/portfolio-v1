import Image from "next/image";
import Link from "next/link";

export const NavSection = () => {
  return (
    <nav className="fixed max-h-[100px] xl:max-h-[66px] lg:max-h-[66px] lg:top-4 xl:top-4  left-1/2 transform -translate-x-1/2 lg:w-[400px] xl:w-[400px] w-full backdrop-blur-lg bg-white/10 lg:border xl:border lg:border-white/20 xl:border-white/20 lg:rounded-2xl xl:rounded-2xl shadow-lg px-4 lg:py-2 xl:lg:py-2 py-3 flex justify-center space-x-4  z-50 bottom-0 border-top border-t border-white/20">
      <Link
        href="#overview"
        className="text-white/80 hover:text-white flex flex-col justify-center items-center"
      >
        <Image
          src="/images/inspection.png"
          alt="Inspection Image"
          width={32}
          height={32}
          className="object-cover"
        />
        <span className="text-[14px] leading-4">Overview</span>
      </Link>
      <Link
        href="#skills"
        className="text-white/80 hover:text-white flex flex-col justify-center items-center"
      >
        <Image
          src="/images/skill.png"
          alt="skill Image"
          width={32}
          height={32}
          className="object-cover"
        />
        <span className="text-[14px] leading-4">Skills</span>
      </Link>
      <Link
        href="#experience"
        className="text-white/80 hover:text-white flex flex-col justify-center items-center"
      >
        <Image
          src="/images/experience.png"
          alt="experience Image"
          width={32}
          height={32}
          className="object-cover"
        />
        <span className="text-[14px] leading-4">Experience</span>
      </Link>
      <Link
        href="#projects"
        className="text-white/80 hover:text-white flex flex-col justify-center items-center"
      >
        <Image
          src="/images/clipboard.png"
          alt="clipboard Image"
          width={32}
          height={32}
          className="object-cover"
        />
        <span className="text-[14px] leading-4">Projects</span>
      </Link>

      <Link
        href="#education"
        className="text-white/80 hover:text-white flex flex-col justify-center items-center"
      >
        <Image
          src="/images/education.png"
          alt="education Image"
          width={32}
          height={32}
          className="object-cover"
        />
        <span className="text-[14px] leading-4">Education</span>
      </Link>
    </nav>
  );
};
