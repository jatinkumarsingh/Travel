import React, { useState } from 'react';
import './upcoming.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import tokyoImg from '../assets/tokyo.jpg'; 



const trips = [
  {
    image: tokyoImg,
    location: 'Kyoto, Japan',
    dates: 'May 20 - May 27, 2024',
  },
  {
    image: tokyoImg,
    location: 'Paris, France',
    dates: 'June 1 - June 8, 2024',
  },
  {
    image: tokyoImg,
    location: 'Rome, Italy',
    dates: 'June 15 - June 22, 2024',
  },
  {
    image: tokyoImg,
    location: 'Bali, Indonesia',
    dates: 'July 5 - July 12, 2024',
  },
  {
    image: tokyoImg,
    location: 'New York, USA',
    dates: 'July 18 - July 25, 2024',
  },
  {
    image: tokyoImg,
    location: 'London, UK',
    dates: 'August 2 - August 9, 2024',
  },
  {
    image: tokyoImg,
    location: 'Sydney, Australia',
    dates: 'August 15 - August 22, 2024',
  },
  {
    image: tokyoImg,
    location: 'Cape Town, South Africa',
    dates: 'September 1 - September 8, 2024',
  },
  {
    image: tokyoImg,
    location: 'Berlin, Germany',
    dates: 'September 20 - September 27, 2024',
  },
  {
    image: tokyoImg,
    location: 'Dubai, UAE',
    dates: 'October 5 - October 12, 2024',
  },
];

const Upcoming = () => {
  const [index, setIndex] = useState(0);

  const prevTrip = () => {
    setIndex((prev) => (prev === 0 ? trips.length - 1 : prev - 1));
  };

  const nextTrip = () => {
    setIndex((prev) => (prev === trips.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="upcoming">
      <h2>Upcoming Trip</h2>
      <div className="trip-wrapper">
        <FaChevronLeft className="arrow left" onClick={prevTrip} />

        <div className="container">
          <img src={trips[index].image} alt={trips[index].location} />
          <div className="details">
            <h2>{trips[index].location}</h2>
            <h3>{trips[index].dates}</h3>
            <a href="#">View Itinerary</a>
          </div>
        </div>

        <FaChevronRight className="arrow right" onClick={nextTrip} />
      </div>
    </div>
  );
};

export default Upcoming;
