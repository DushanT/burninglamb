import { twMerge } from "tailwind-merge";

export default function About({ className, ...other }) {
  return (
    <section
      id="about"
      className={twMerge("grid lg:grid-cols-2", className)}
      {...other}
    >
      <h2
        id="about-title"
        className="mb-8 flex items-baseline gap-4 md:gap-6"
        data-aos="fade-up"
      >
        <span className="text-sm font-bold leading-0.9 -tracking-5 text-primary-500 md:text-2xl">
          .01
        </span>
        <span className="pt-1.5 font-heading text-7xl lowercase leading-0.9 -tracking-4 md:pt-2 md:text-11xl">
          Meet BL Studio
        </span>
      </h2>
      <div
        className="ml-8 max-w-prose text-lg leading-1.2 md:ml-12 md:text-3xl lg:ml-0"
        data-aos="fade-up"
      >
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
