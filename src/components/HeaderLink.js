import { twMerge } from "tailwind-merge";

export default function HeaderLink({ children, icon, className, href }) {
  return (
    <a
      href={href}
      className={twMerge(
        "leading-0.9 group flex items-center gap-5 font-heading text-sm hover:text-primary-500 md:text-base",
        className,
      )}
    >
      <span className="grid h-5 w-5 place-items-center rounded-full group-hover:bg-primary-700">
        <span className="h-3 w-3 rounded-full bg-primary-500"></span>
      </span>
      {icon}
      <span className="mt-1">{children}</span>
    </a>
  );
}
