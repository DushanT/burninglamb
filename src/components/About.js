import { twMerge } from "tailwind-merge";

export default function About({ className }) {
  return (
    <section id="about" className={twMerge("grid lg:grid-cols-2", className)}>
      <h2 className="mb-8 flex items-baseline gap-4 md:gap-6">
        <span className="-tracking-5 leading-0.9 text-sm font-bold text-primary-500 md:text-2xl">
          .01
        </span>
        <span className="md:text-11xl -tracking-4 leading-0.9 pt-1.5 font-heading text-7xl lowercase md:pt-2">
          Meet BL Studio
        </span>
      </h2>
      <div className="leading-1.2 ml-8 max-w-prose text-lg md:ml-12 md:text-3xl lg:ml-0">
        <p className="mb-6 md:mb-4">
          As a <span className="text-primary-500">tight-knit team</span> we
          create memorable and emotional{" "}
          <span className="text-primary-500">websites</span>,{" "}
          <span className="text-primary-500">digital experiences</span> and{" "}
          <span className="text-primary-500">native apps</span>.
        </p>
        <p>
          Our studio thrives on the expertise and dedication of our diverse
          team. With their guidance and collaboration, you can transform your
          artistic visions into reality.
        </p>
      </div>
    </section>
  );
}
