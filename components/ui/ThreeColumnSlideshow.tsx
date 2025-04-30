"use client";

import React, { useState, useRef } from 'react';
import './ThreeColumnSlideshow.css';
import { imageSets, slideImages } from '@/data';


const ThreeColumnSlideshow: React.FC = () => {
  // Images for each column
  const columnImages = [
    ['img1_col1.jpg', 'img2_col1.jpg', 'img3_col1.jpg'],
    ['img1_col2.jpg', 'img2_col2.jpg', 'img3_col2.jpg'],
    ['img1_col3.jpg', 'img2_col3.jpg', 'img3_col3.jpg'],
  ];

  // States to keep track of the current slide for each column
  const [currentSlide, setCurrentSlide] = useState([0, 0, 0]);

  // Handle slide change on hover
  const handleMouseEnter = (columnIndex: number) => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const newSlides = [...prevSlide];
        newSlides[columnIndex] = (newSlides[columnIndex] + 1) % slideImages[columnIndex].length;
        return newSlides;
      });
    }, 1000); // Change image every second
    return intervalId;
  };

  const handleMouseLeave = (intervalId: ReturnType<typeof setInterval>) => {
    clearInterval(intervalId);
  };

  return (
    <div className="three-column-slideshow">
      {slideImages.map((images, columnIndex) => {
        const currentIntervalId = useRef<ReturnType<typeof setInterval> | null>(null);

        return (
          <div
            key={columnIndex}
            className="column"
            onMouseEnter={() => {
              currentIntervalId.current = handleMouseEnter(columnIndex);
            }}
            onMouseLeave={() => {
              if (currentIntervalId.current) handleMouseLeave(currentIntervalId.current);
            }}
          >
            <img
              src={images[currentSlide[columnIndex]]}
              alt={`Slide ${currentSlide[columnIndex]}`}
              className="slide-image"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ThreeColumnSlideshow;
