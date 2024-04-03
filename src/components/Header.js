import Image from "next/image";
import { twMerge } from "tailwind-merge";

const NavLink = ({ children, href, icon, className }) => {
  return (
    <a
      href={href}
      className={twMerge(
        "group flex items-center gap-5 font-heading text-sm hover:text-primary-500 md:text-base",
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
};

export default function Header({ className }) {
  return (
    <header
      className={twMerge(
        "sticky top-0 z-10 flex items-center justify-between border-b-0.5 border-text-900 bg-[var(--background-rgb)] py-3",
        className,
      )}
    >
      <a href="/">
        <span className="icon-lamb" />
      </a>
      <nav className="flex gap-7 lowercase">
        <NavLink href="#about" className="hidden md:flex">
          About
        </NavLink>
        <NavLink href="#services" className="hidden md:flex">
          Services
        </NavLink>
        <NavLink href="#projects" className="hidden md:flex">
          Featured projects
        </NavLink>
        <NavLink
          href="#contact"
          icon={
            <>
              <Image
                src="/svg/arrow-left-down.svg"
                width="20"
                height="20"
                className="group-hover:hidden"
              />
              <Image
                src="/svg/arrow-left-down-primary.svg"
                width="20"
                height="20"
                className="hidden group-hover:block"
              />
            </>
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
