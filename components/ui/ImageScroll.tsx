
import React, { useRef, useEffect } from 'react';
import './ImageScroll.css';

interface ImageScrollProps {
  imageSets: { title: string; imgs: string[] }[];
}

const ImageScroll: React.FC<ImageScrollProps> = ({ imageSets }) => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {imageSets.map((set, index) => (
          <ImageScroller key={index} imageSet={set.imgs} />
        ))}
      </div>
    </div>
  );
};

interface ImageScrollerProps {
  imageSet: string[];
}

const ImageScroller: React.FC<ImageScrollerProps> = ({ imageSet }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener('mouseenter', startScroll);
      container.addEventListener('mouseleave', resetScroll);

      return () => {
        container.removeEventListener('mouseenter', startScroll);
        container.removeEventListener('mouseleave', resetScroll);
      };
    }
  }, []);

  const startScroll = () => {
    const container = containerRef.current;
    if (container) {
      container.style.animationPlayState = 'running';
    }
  };

  const resetScroll = () => {
    const container = containerRef.current;
    if (container) {
      container.style.animation = 'none';
      container.offsetHeight; // Trigger reflow to restart animation
      container.style.animation = '';
    }
  };

  return (
    <div className="image-wrapper" ref={containerRef}>
      <div className="image-set">
        {imageSet.concat(imageSet).map((image, idx) => (
          <img key={idx} src={image} alt={`img-${idx}`} className="image-item" />
        ))}
      </div>
    </div>
  );
};

export default ImageScroll;
