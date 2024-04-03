import Image from "next/image";
import { twMerge } from "tailwind-merge";
import HeaderLink from "./HeaderLink";

export default function Header({ className, ...other }) {
  return (
    <header
      className={twMerge(
        "sticky top-0 z-10 flex items-center justify-between border-b-0.5 border-text-900 bg-[var(--background-rgb)] py-3",
        className,
      )}
      {...other}
    >
      <a href="/">
        <span className="icon-lamb" />
      </a>
      <nav className="flex gap-7 lowercase">
        <HeaderLink href="#about" className="hidden md:flex">
          About
        </HeaderLink>
        <HeaderLink href="#services" className="hidden md:flex">
          Services
        </HeaderLink>
        <HeaderLink href="#projects" className="hidden md:flex">
          Featured projects
        </HeaderLink>
        <HeaderLink
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
        </HeaderLink>
      </nav>
    </header>
  );
}
