import services from "@/data/services";
import ServiceTitle from "./ServiceTitle";
import Image from "next/image";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

const ServicesAccordion = ({ className }) => (
  <ul className={twMerge("border-t-0.5 p-0", className)}>
    {services.map(({ number, title, items }) => (
      <li key={title} className="list-none" data-aos="fade-up">
        <details className="group border-b-0.5 pt-5 open:border-none">
          <summary className="marker-none mb-2 mt-3 flex justify-between group-open:mb-2.5">
            <ServiceTitle number={number}>{title}</ServiceTitle>
            <Image
              src="/svg/arrow-down.svg"
              width="18"
              height="18"
              className="transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="flex flex-wrap gap-1 border-t-0.5 border-text-900 pt-4 transition-all">
            {items.map((title) => (
              <Button key={title}>{title}</Button>
            ))}
          </div>
        </details>
      </li>
    ))}
  </ul>
);

export default ServicesAccordion;
