import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: ReactNode;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn("flex w-full   flex-wrap gap-3 grow", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={`${name}+${Icon}`}
    className={cn(
      " transform hover:scale-y-105 hover:scale-x-105 hover:z-40 transition duration-500 ease-in-out group relative  flex flex-col justify-between overflow-hidden rounded-xl w-full grow max-lg:max-w-full max-w-[300px] ",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <Link
      href={href}
      target="_blank"
      className="absolute top-0 bottom-0 left-0 right-0 z-50"
    ></Link>
    <div className="relative group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10">
      {background}
      {/* Add the overlay here */}
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300  dark:bg-neutral-800/50 group-hover:opacity-30" />
    </div>

    <div className="z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <div className="w-10 h-10 overflow-hidden flex justify-center items-center">
        {Icon}
      </div>
      <span className="text-xl font-semibold text-dark-100 dark:text-neutral-300">
        {name}
      </span>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
