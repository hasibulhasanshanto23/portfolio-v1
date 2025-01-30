import { SparklesText } from "../ui/sparkles-text";

export const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center ">
      <SparklesText
        text="Professional Experience"
        className="text-[28px] leading-[42px] text-dark-100 font-normal"
      />
      <div className="flex flex-col gap-5 py-6 px-8 rounded-3xl bg-dark-400 w-full max-w-[830px] border !border-neutral-800">
        <div className="flex items-center gap-4">
          <img
            src="images/ShareTrip.png"
            className="w-14 h-14 object-cover"
            alt=""
          />
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[16px] leading-6 font-bold">
                Software Engineer
              </span>
              <span className="text-[16px] leading-6">Feb 2022 -- Present</span>
            </div>
            <div className="flex flex-col gap-3">
              <span>ShareTrip - (Dhaka) - Bangladesh</span>
              <p>
                <strong>Stack: </strong>
                <span className="text-[15px] leading-[18px]">
                  JavaScript, ReactJS, NextJs, React Context API, React Hooks,
                  Redux, MobX , Recoil, Storybook Js , Material UI, NodeJS,
                  ExpressJS, ES6, REST API, HTML, CSS, E-mail UI, Tailwind Css,
                  Responsive UI, GIT
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <ul className="list-disc list-inside space-y-2 text-dark-100">
            <li>
              <span className="font-semibold">Flight Booking System:</span>{" "}
              Developed a seamless flight search & booking platform.
            </li>
            <li>
              <span className="font-semibold">Hotel Booking System:</span>{" "}
              Engineered a user-friendly hotel reservation system.
            </li>
            <li>
              <span className="font-semibold">PayBill System:</span> Implemented
              an efficient utility bill payment system.
            </li>
            <li>
              <span className="font-semibold">E-commerce Shop:</span> Built an
              online store for life style products with smooth checkout.
            </li>
            <li>
              <span className="font-semibold">Voucher System:</span> Designed
              and developed a system for purchasing & redeeming vouchers.
            </li>
            <li>
              <span className="font-semibold">Bus Booking System:</span>{" "}
              Developed a bus reservation system with seat selection & instant
              booking.
            </li>
            <li>
              <span className="font-semibold">Pixel Perfect UI:</span> Ensured
              high-quality, responsive, and visually appealing front-end
              designs.
            </li>
            <li>
              <span className="font-semibold">SEO Optimization:</span>{" "}
              Implemented best practices for improving search engine rankings &
              visibility.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
