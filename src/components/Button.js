"use client";

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ href, children, className, isAlwaysSmall }) {
  const Tag = href ? "a" : "span";

  const buttonRef = useRef();
  const circleRef = useRef();

  // move circle posisiont after entering the button to mouse position and change the tailwind classes to animate the circle
  useEffect(() => {
    const button = buttonRef.current;
    const circle = circleRef.current;

    const setCirclePosition = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
    };

    const handleMouseEnter = (e) => {
      setCirclePosition(e);
      circle.classList.remove("desplode-circle");
      circle.classList.add("explode-circle");
    };

    const handleMouseLeave = (e) => {
      setCirclePosition(e);
      circle.classList.remove("explode-circle");
      circle.classList.add("desplode-circle");
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Tag
      href={href}
      ref={buttonRef}
      className={twMerge(
        "group/button relative z-0 overflow-hidden text-nowrap rounded-full border px-4.5 pb-0.5 pt-1.5 font-heading text-sm/1.3 lowercase tracking-2 transition-all hover:border-transparent",
        isAlwaysSmall ? "" : "md:px-6 md:pb-1.5 md:pt-2 md:text-base/1.3",
        className,
      )}
    >
      <span className="relative z-[1] flex gap-2">{children}</span>
      <span
        ref={circleRef}
        className="absolute -left-16 -top-16 z-0 size-4 origin-center -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500"
      />
    </Tag>
  );
}
