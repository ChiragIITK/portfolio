"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

import './VerticalScroll.css'


export const VerticalScroll = ({
  items,
  direction = "top",
  speed = "fast",
  pauseOnHover = false,
}: {
  items: {
    name: string;
  }[];
  direction?: "left" | "right" | "top" | "bottom";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else if (direction === "right") {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      } else if (direction === "top") {
        containerRef.current.style.setProperty("--animation-direction", "upwards");
      } else if (direction === "bottom") {
        containerRef.current.style.setProperty("--animation-direction", "downwards");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        direction === "top" || direction === "bottom" ? "vertical" : "",
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max",
          start && (direction === "top" || direction === "bottom" ? "animate-scroll-vertical" : "animate-scroll-horizontal"),
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <span
            key={idx}
            className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
              lg:opacity-100 rounded-lg text-center bg-[#10132E]"
          >
            {item.name}
          </span>
        ))}
      </ul>
    </div>
  );
  
};
