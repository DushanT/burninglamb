import GridClaim from "./GridClaim";
import AnimatedIcons from "./AnimatedIcons";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function Intro({ className, ...other }) {
  return (
    <section
      className={twMerge("relative overflow-hidden", className)}
      {...other}
    >
      <h1
        className="bl-title mb-24 w-full md:mb-2"
        data-aos="zoom-out"
        data-aos-duration="300"
        data-aos-delay="1000"
      >
        <span className="sr-only">We are Burning lamb</span>
      </h1>
      <div className="flex items-end justify-between gap-2">
        <AnimatedIcons
          data-aos="fade-right"
          data-aos-anchor="#grid"
          data-aos-duration="300"
          data-aos-delay="1000"
        />
        <GridClaim
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-delay="1000"
          id="grid"
        />
      </div>
      <Image
        alt=""
        src="/images/lamb.gif"
        className="absolute left-1/2 top-40 z-[-1] -translate-x-1/2 scale-[2] md:top-20 md:scale-125 lg:top-0 lg:scale-100"
        width="1440"
        height="853"
      />
    </section>
  );
}
