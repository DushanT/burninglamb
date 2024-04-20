import Image from "next/image";

const Arrow = () => (
  <Image
    src="/svg/arrow-right.svg"
    width="51"
    height="29"
    className="mb-1 scale-75 md:mb-2 md:scale-100"
  />
);

export default function HorizontalScroll({ ...other }) {
  return (
    <div
      className="border-y-0.5 border-text-900 pb-5 pt-7 md:mx-0 md:pb-8 md:pt-10 2xl:overflow-hidden"
      {...other}
    >
      <div className="flex w-[max-content] gap-4 whitespace-nowrap px-0 font-heading text-2xl lowercase leading-1.3 tracking-2 motion-safe:animate-hscroll md:gap-8 md:text-6xl">
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
  );
}
