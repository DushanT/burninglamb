import { twMerge } from "tailwind-merge";

export default function Button({ href, children, className, isAlwaysSmall }) {
  const Tag = href ? "a" : "span";

  return (
    <Tag
      href={href}
      className={twMerge(
        "text-sm/1.3 md:text-base/1.3 tracking-2 text-nowrap rounded-full border px-4.5 pb-0.5 pt-1.5 font-heading lowercase hover:bg-primary-500",
        isAlwaysSmall ? "" : "md:px-6 md:pb-1.5 md:pt-2 md:text-base",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
