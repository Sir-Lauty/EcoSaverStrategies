import React, { useEffect, useState } from 'react';

const images = [
  '../../../../img/equipo/arg-campeon.jpg',
  '../../../../img/equipo/bilardo-champagne.jpg',
  '../../../../img/equipo/random-bullshit-go.jpg',
  '../../../../img/equipo/ratoncito.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
