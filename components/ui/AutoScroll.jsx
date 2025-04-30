"use client";

import { useEffect, useState } from "react";

export const AutoScrollImages = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isHovering) {
      intervalId = setInterval(() => {
        setCurrentImage((prevImage) =>
          prevImage === images.length - 1 ? 0 : prevImage + 1
        );
      }, 1000); // Change image every 3 seconds
    }

    return () => clearInterval(intervalId); // Cleanup on unmount or hover change
  }, [isHovering, images.length]);

  return (
    <div
      className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Image ${index}`}
          style={{transition: "all 1000ms"}}
          className={`absolute bottom-0 top-0 w-full h-full object-cover rounded-xl ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};
