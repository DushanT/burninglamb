"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HorizontalScroll from "@/components/HorizontalScroll";
import About from "@/components/About";
import History from "@/components/History";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Intro className="mb-[115px] pt-56 md:mb-40 md:pt-64" />
      <HorizontalScroll />
      <About
        className="mb-14 pt-[76px] md:mb-[125px] md:pt-36"
        data-aos="fade-up"
      />
      <History />
      <Services className="mb-[120px] pt-[100px] md:mb-[200px] md:pt-[265px]" />
      <Projects />
    </>
  );
}
