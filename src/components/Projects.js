import ProjectsCarousel from "./ProjectsCarousel";

const Title = ({ ...other }) => (
  <h2 className="relative mb-7 grid md:mb-10 md:gap-4" {...other}>
    <span
      className="absolute left-0 top-8 mb-5 text-sm font-bold leading-0.9 -tracking-5 text-primary-500 md:top-[32%] md:mb-10 md:text-2xl"
      aria-hidden
    >
      .03
    </span>
    <span className="md:text-title-clamp text-right font-heading text-10xl lowercase leading-0.9 -tracking-4">
      Featured
    </span>{" "}
    <span className="md:text-title-clamp font-heading text-10xl lowercase leading-0.9 -tracking-4">
      projects
    </span>
  </h2>
);

export default function Projects({ ...other }) {
  return (
    <section id="projects" {...other}>
      <Title data-aos="fade-up" />
      <ProjectsCarousel />
    </section>
  );
}
