import { twMerge } from "tailwind-merge";
import ServicesList from "./ServicesList";
import ServicesAccordion from "./ServicesAccordion";

const Title = ({ ...other }) => (
  <h2 className="mb-7 flex items-end gap-4 md:mb-9 md:gap-6" {...other}>
    <span
      className="mb-3 text-sm font-bold leading-0.9 -tracking-5 text-primary-500 md:mb-12 md:text-2xl"
      aria-hidden
    >
      .02
    </span>
    <span className="md:text-title-clamp font-heading text-9xl lowercase leading-0.9 -tracking-4">
      Our services
    </span>
  </h2>
);

export default function Services({ className, ...other }) {
  return (
    <section id="services" className={twMerge(className)} {...other}>
      <Title data-aos="fade-up" />
      <ServicesList className="hidden md:block" />
      <ServicesAccordion className="md:hidden" />
    </section>
  );
}
