import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const destinations = [
  {
    image: '/image/img2.jpg',
    title: 'Paris',
    description: 'The city of love and lights, famous for the Eiffel Tower, art, and timeless elegance.'
  },
  {
    image: '/image/img3.avif',
    title: 'New York',
    description: 'The city that never sleeps, bursting with energy, skyscrapers, and endless possibilities.'
  },
  {
    image: '/image/img4.avif',
    title: 'Rome',
    description: 'The Eternal City, where ancient ruins meet vibrant Italian culture and cuisine.'
  },
  {
    image: '/image/img5.avif',
    title: 'Bali',
    description: ' A tropical paradise with lush jungles, stunning beaches, and a rich spiritual vibe.'
  },
  {
    image: '/image/img6.avif',
    title: 'Egypt',
    description: 'Land of the pharaohs, home to the majestic pyramids and timeless Nile River.'
  },
  {
    image: '/image/img7.avif',
    title: 'India',
    description: 'A vibrant tapestry of colors, spices, and ancient traditions blending with modern life.'
  },
  {
    image: '/image/img8.avif',
    title: 'Amsterdam',
    description: 'A charming city of canals, bikes, and vibrant culture in the heart of the Netherlands.'
  },
  {
    image: '/image/img9.avif',
    title: 'France',
    description: 'A country of romance, world-class wine, and iconic landmarks like the Eiffel Tower.'
  },
  {
    image: '/image/img10.avif',
    title: 'Cape Town',
    description: ' A breathtaking city where mountains meet the sea, rich in culture and adventure.'
  }
];

const extendedDestinations = [...destinations, ...destinations]; 

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
