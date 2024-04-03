import GridClaim from "./GridClaim";
import AnimatedIcons from "./AnimatedIcons";
import { twMerge } from "tailwind-merge";

export default function Intro({ className }) {
  return (
    <section className={twMerge("relative", className)}>
      <h1 className="bl-title mb-24 w-full md:mb-2">
        <span className="sr-only">We are Burning lamb</span>
      </h1>
      <div className="flex items-end justify-between gap-2">
        <AnimatedIcons />
        <GridClaim />
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/lamb.gif"
        className="absolute left-0 top-0 z-[-1]"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
