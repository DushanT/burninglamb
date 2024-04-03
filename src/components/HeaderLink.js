export default function HeaderLink({ children, href }) {
  return (
    <a
      href={href}
      className="text-text leading-0.9 group flex items-center gap-1 font-heading text-sm hover:text-primary-500 md:text-base"
    >
      <span className="grid h-5 w-5 place-items-center rounded-full group-hover:bg-primary-700">
        <span className="h-3 w-3 rounded-full bg-primary-500"></span>
      </span>
      {children}
    </a>
  );
}
