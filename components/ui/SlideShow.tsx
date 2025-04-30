
"use client";

import React, { useEffect, useState } from 'react';
import './Slideshow.css';
import { imageSets, slideImages } from '@/data';

const Slideshow: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Automatic Slideshow</h2>
      <p>Change image every 2 seconds:</p>

      <div className="slideshow-container">
        {/* Slide 1 */}
        <div className={`mySlides fade ${slideIndex === 0 ? 'active-slide' : ''}`}>
          <div className="numbertext">1 / 3</div>
          <div className="image-container">
            {slideImages[0].map((image, index) => (
              <img key={index} src={image} alt={`Nature ${index + 1}`} style={{ width: '33%' }} />
            ))}
          </div>
          <div className="text">Caption for Nature Images</div>
        </div>

        {/* Slide 2 */}
        <div className={`mySlides fade ${slideIndex === 1 ? 'active-slide' : ''}`}>
          <div className="numbertext">2 / 3</div>
          <div className="image-container">
            {slideImages[1].map((image, index) => (
              <img key={index} src={image} alt={`Snow ${index + 1}`} style={{ width: '33%' }} />
            ))}
          </div>
          <div className="text">Caption for Snow Images</div>
        </div>

        {/* Slide 3 */}
        <div className={`mySlides fade ${slideIndex === 2 ? 'active-slide' : ''}`}>
          <div className="numbertext">3 / 3</div>
          <div className="image-container">
            {slideImages[2].map((image, index) => (
              <img key={index} src={image} alt={`Mountains ${index + 1}`} style={{ width: '33%' }} />
            ))}
          </div>
          <div className="text">Caption for Mountain Images</div>
        </div>
      </div>

      <br />

      <div style={{ textAlign: 'center' }}>
        <span className={`dot ${slideIndex === 0 ? 'active' : ''}`}></span>
        <span className={`dot ${slideIndex === 1 ? 'active' : ''}`}></span>
        <span className={`dot ${slideIndex === 2 ? 'active' : ''}`}></span>
      </div>
    </div>
  );
};

export default Slideshow;
