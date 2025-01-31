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
import Image from "next/image";

export const data = {
  skillsSet: [
    {
      id: 0,
      name: "JavaScript",
      logo: <JavaScript />,
    },
    {
      id: 1,
      name: "React",
      logo: <React />,
    },
    {
      id: 2,
      name: "Next.js",
      logo: <NextJs />,
    },
    {
      id: 3,
      name: "TypeScript",
      logo: <TypeScript />,
    },
    {
      id: 4,
      name: "Redux",
      logo: <Redux />,
    },
    {
      id: 15,
      name: "Mobx",
      logo: <></>,
    },
    {
      id: 16,
      name: "Recoil",
      logo: <></>,
    },
    {
      id: 5,
      name: "Storybook",
      logo: <Storybook />,
    },
    {
      id: 6,
      name: "Git",
      logo: <Git />,
    },
    {
      id: 7,
      name: "Node.js",
      logo: <NodeJs />,
    },
    {
      id: 8,
      name: "Express.js",
      logo: <ExpressJsLight />,
    },
    {
      id: 9,
      name: "MongoDB",
      logo: <MongoDB />,
    },
    {
      id: 10,
      name: "HTML5",
      logo: <HTML5 />,
    },
    {
      id: 11,
      name: "CSS",
      logo: <CSS />,
    },
    {
      id: 12,
      name: "Tailwind CSS",
      logo: <TailwindCSS />,
    },
    {
      id: 13,
      name: "Material UI",
      logo: <MaterialUI />,
    },
    {
      id: 14,
      name: "Shadcn UI",
      logo: <ShadcnUI />,
    },
  ],
  features : [
    {
      Icon: (
        <Image
          src="/images/flight.png"
          alt="Flight Icon"
          className="flex justify-center items-center object-cover w-full h-full"
          width={298}
          height={233}
        />
      ),
      name: "Flight Booking",
      description: "Flight search & booking platform",
      href: "https://sharetrip.net/flight",
      cta: "Live",
      background: (
        <Image
          src="/images/flightP.png"
          alt="Flight Background"
          className="flex justify-center items-center object-cover w-full"
          width={298}
          height={233}
        />
      ),
      className: " bg-dark-400 text-dark-100 border !border-neutral-800",
    },
    {
      Icon: (
        <Image
          src="/images/hotel.png"
          alt="Hotel Icon"
          className="flex justify-center items-center object-cover w-full h-full"
          width={298}
          height={233}
        />
      ),
      name: "Hotel Booking",
      description: "Hotel search & reservation system",
      href: "https://sharetrip.net/hotel",
      cta: "Live",
      background: (
        <Image
          src="/images/hotelP.png"
          alt="Hotel Background"
          className="flex justify-center items-center object-cover w-full"
          width={298}
          height={233}
        />
      ),
      className: " bg-dark-400 text-dark-100 border !border-neutral-800",
    },
    {
      Icon: (
        <Image
          src="/images/paybill.png"
          alt="Pay Bill Icon"
          className="flex justify-center items-center object-cover w-full h-full"
          width={298}
          height={233}
        />
      ),
      name: "Pay Bill",
      description: "Pay your utility bill online",
      href: "https://sharetrip.net/pay-bill",
      cta: "Live",
      background: (
        <Image
          src="/images/paybillP.png"
          alt="Pay Bill Background"
          className="flex justify-center items-center object-cover w-full"
          width={298}
          height={233}
        />
      ),
      className: " bg-dark-400 text-dark-100 border !border-neutral-800",
    },
    {
      Icon: (
        <Image
          src="/images/shop.png"
          alt="Shop Icon"
          className="flex justify-center items-center object-cover w-full h-full"
          width={298}
          height={233}
        />
      ),
      name: "Shop",
      description: "Purchase your life style products",
      href: "https://sharetrip.net/shop",
      cta: "Live",
      background: (
        <Image
          src="/images/shopP.png"
          alt="Shop Background"
          className="flex justify-center items-center object-cover w-full"
          width={298}
          height={233}
        />
      ),
      className: " bg-dark-400 text-dark-100 border !border-neutral-800",
    },
    {
      Icon: (
        <Image
          src="/images/businessClass.png"
          alt="Business Class Icon"
          className="flex justify-center items-center object-cover w-full h-full"
          width={298}
          height={233}
        />
      ),
      name: "Business Class Flight",
      description: "Book your business class flight",
      href: "https://sharetrip.net/business-class",
      cta: "Live",
      background: (
        <Image
          src="/images/bcP.png"
          alt="Business Class Background"
          className="flex justify-center items-center object-cover w-full"
          width={298}
          height={233}
        />
      ),
      className: " bg-dark-400 text-dark-100 border !border-neutral-800",
    },
    {
      Icon: (
        <Image
          src="/images/voucher.png"
          alt="Voucher Icon"
          className="flex justify-center items-center object-cover w-full h-full"
          width={298}
          height={233}
        />
      ),
      name: "Voucher",
      description: "Buy & gift voucher",
      href: "#",
      cta: "Not in Live",
      background: (
        <Image
          src="/images/voucherP.jpg"
          alt="Voucher Background"
          className="flex justify-center items-center object-cover w-full"
          width={298}
          height={233}
        />
      ),
      className: " bg-dark-400 text-dark-100 border !border-neutral-800",
    },
  ]
};
