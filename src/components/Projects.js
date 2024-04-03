import ProjectsCarousel from "./ProjectsCarousel";

const Title = ({ ...other }) => (
  <h2 className="relative mb-7 grid md:mb-10 md:gap-4" {...other}>
    <span
      className="-tracking-5 leading-0.9 absolute left-0 top-8 mb-5 text-sm font-bold text-primary-500 md:top-[125px] md:mb-10 md:text-2xl md:max-lg:-left-6"
      aria-hidden
    >
      .03
    </span>
    <span className="md:text-12xl -tracking-4 text-10xl leading-0.9 text-right font-heading lowercase">
      Featured
    </span>{" "}
    <span className="md:text-12xl -tracking-4 text-10xl leading-0.9 font-heading lowercase">
      projects
    </span>
  </h2>
);

export default function Projects({ ...other }) {
  return (
    <section id="projects" className="mb-28 md:mb-40" {...other}>
      <Title data-aos="fade-up" />
      <ProjectsCarousel />
    </section>
  );
}
