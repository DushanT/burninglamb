import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Arrow = () => (
  <Image
    src="/svg/arrow-right.svg"
    width="51"
    height="29"
    className="mb-1 scale-75 md:mb-2 md:scale-100"
  />
);

export default function HorizontalScroll({ className, ...other }) {
  return (
    <div>
      <hr className="border-t-0.5 border-text-900" />
      <div
        className="relative -ml-4 w-[100vw] overflow-x-hidden md:-ml-7 xl:left-1/2 xl:ml-0 xl:-translate-x-1/2"
        {...other}
      >
        <div
          className={twMerge(
            "flex w-[max-content] gap-4 whitespace-nowrap px-0 font-heading text-2xl lowercase leading-1.3 tracking-2 motion-safe:animate-hscroll md:gap-8 md:text-6xl",
            className,
          )}
        >
          {[1, 2, 3, 4].map((n) => (
            <span
              key={n}
              aria-hidden={n > 1}
              className="flex items-center gap-4 md:gap-8"
            >
              <span>Who are we</span>
              <Arrow />
              <span>and</span>
              <Arrow />
              <span>how can we help?</span>
              <Arrow />
            </span>
          ))}
        </div>
      </div>
      <hr className="border-t-0.5 border-text-900" />
    </div>
  );
}
