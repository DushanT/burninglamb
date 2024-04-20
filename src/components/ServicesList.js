import services from "@/data/services";
import ServiceTitle from "./ServiceTitle";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

const ServicesList = ({ className }) => (
  <ul
    className={twMerge(
      "divide-y-0.5 divide-text-900 border-t-0.5 border-text-900 p-0",
      className,
    )}
  >
    {services.map(({ number, title, items }, index) => {
      const isSwitched = index % 2 === 0;
      return (
        <li
          key={title}
          className="group grid min-h-40 list-none grid-cols-[1fr,auto] items-center gap-5 py-3 transition-colors hover:bg-[var(--bg-secondary)]"
          data-aos="fade-up"
        >
          <ServiceTitle
            number={number}
            className={`tracking-2 ${isSwitched ? "order-2" : ""}`}
          >
            {title}
          </ServiceTitle>
          <div
            className={`flex ${isSwitched ? "justify-start" : "justify-end"} max-w-[500px] flex-wrap items-center gap-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
          >
            {items.map((title) => (
              <Button key={title}>{title}</Button>
            ))}
          </div>
        </li>
      );
    })}
  </ul>
);

export default ServicesList;
