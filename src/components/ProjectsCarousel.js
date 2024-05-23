"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./ProjectSlide";
import projects from "@/data/projects";

export default function ProjectsCarousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // hoverPause: true,
    speed: 700,
    // desktop first approach
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Slide
            key={project.title}
            index={index}
            {...project}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          />
        ))}
      </Slider>
    </div>
  );
}
