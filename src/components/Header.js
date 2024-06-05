"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import HeaderLink from "./HeaderLink";

export default function Header({ className, ...other }) {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <header
      className={twMerge(" flex items-center justify-between ", className)}
      {...other}
    >
      <button onClick={handleClick}>
        <div className="logo" />
      </button>
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
                alt=""
                src="/svg/arrow-left-down.svg"
                width="20"
                height="20"
                className="group-hover:hidden"
              />
              <Image
                alt=""
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
