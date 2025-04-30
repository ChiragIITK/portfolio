"use client";

import { imageSets } from "@/data";
import React from "react";
import ImageScroll from "./ui/ImageScroll";
import ThreeColumnSlideshow from "./ui/ThreeColumnSlideshow";

const Travel = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        My Travel
        <span className="text-purple"> Experience</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <ThreeColumnSlideshow></ThreeColumnSlideshow>
        </div>
      </div>
    </section>
  );
};

export default Travel;
