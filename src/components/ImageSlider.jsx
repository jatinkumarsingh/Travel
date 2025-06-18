import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const destinations = [
  {
    image: '/image/img1.jpg',
    title: 'Paris',
    description: 'The City of Light, rich in art and history.'
  },
  {
    image: '/image/img2.jpg',
    title: 'Paris',
    description: 'A futuristic city blending tradition and innovation.'
  },
  {
    image: '/image/img3.avif',
    title: 'New York',
    description: 'The city that never sleeps, full of energy.'
  },
  {
    image: '/image/img4.avif',
    title: 'Rome',
    description: 'Ancient ruins and timeless culture.'
  },
  {
    image: '/image/img5.avif',
    title: 'Bali',
    description: 'Island paradise with serene beaches.'
  },
  {
    image: '/image/img6.avif',
    title: 'Egypt',
    description: 'Famous for the Opera House and beautiful harbor.'
  },
  {
    image: '/image/img7.avif',
    title: 'India',
    description: 'Where East meets West in stunning fashion.'
  },
  {
    image: '/image/img8.avif',
    title: 'Amsterdam',
    description: 'Canals, bikes, and rich history.'
  },
  {
    image: '/image/img9.avif',
    title: 'France',
    description: 'Luxury, skyscrapers, and desert adventures.'
  },
  {
    image: '/image/img10.avif',
    title: 'Cape Town',
    description: 'Breathtaking landscapes and coastal beauty.'
  }
];

const extendedDestinations = [...destinations, ...destinations]; // For infinite loop

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % destinations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="slider-track">
        {extendedDestinations.map((dest, index) => (
          <div
            key={index}
            className={`slider-item ${index % destinations.length === currentIndex ? 'active delayed-pop' : ''}`}
          >
            <div className="slider-card">
              <img
                src={dest.image}
                alt={dest.title}
                className="slider-img"
              />
              <div className="caption-box">
                <h3 className="caption-title">{dest.title}</h3>
                <p className="caption-desc">{dest.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
