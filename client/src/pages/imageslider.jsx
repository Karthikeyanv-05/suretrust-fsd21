import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/slide0.png';
import image2 from '../assets/images/slide1.jpg';
import image3 from '../assets/images/slide2.jpg';
import image4 from '../assets/images/slide3.png';
import image5 from '../assets/images/slide4.jpg';

function ImageSlider() {
  // Array of images to display in the slider
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  // State for the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Function to go to the previous image
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-screen h-64 sm:h-96 overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Left arrow for manual navigation */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-60 hover:opacity-100 transition"
      >
        &#8592;
      </button>

      {/* Right arrow for manual navigation */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full opacity-60 hover:opacity-100 transition"
      >
        &#8594;
      </button>
    </div>
  );
}

export default ImageSlider;
