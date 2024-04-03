import { twMerge } from "tailwind-merge";

const ServiceTitle = ({ number, children, className }) => (
  <div className={twMerge(`flex items-center gap-3 md:gap-8`, className)}>
    <span
      className="leading-1.3 tracking-2 rounded-full border border-primary-500 px-2 py-1 text-xs font-bold text-primary-500 group-open:bg-primary-500 group-open:text-black group-hover:bg-primary-500 group-hover:text-black"
      aria-hidden
    >
      {number}
    </span>
    <h3 className="leading-1.3 tracking-2 mt-2 font-heading text-2xl lowercase md:text-6xl xl:whitespace-nowrap">
      {children}
    </h3>
  </div>
);
export default ServiceTitle;
