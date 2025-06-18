import React from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import hubImg from './assets/hub.jpg';
import videoBg from './assets/back.mp4';
import Upcoming from './components/upcoming';
import Hotel from "./components/hotel"; 
import Free from "./components/free";
// Make sure this file exists

function App() {
  return (
    <div className="app-wrapper">
      <video autoPlay muted loop className="background-video">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content-overlay">
        <header className="header">
          <div className="logo">
            <a target="_blank" rel="noopener noreferrer">
              <img
                src="https://static.tacdn.com/img2/brand_refresh/special/pride_month_Tripadvisor_lockup_horizontal_secondary.svg"
                alt="TripAdvisor Logo"
              />
            </a>
          </div>

          <div className="search">
            <div className="search-bar">
              <span className="search-icon">🔍</span>
              <input type="text" placeholder="Places to go, things to do, hotels..." />
              <button className="search-button">Search</button>
            </div>
          </div>

          <div className="nav">
            <a href="#">Discover</a>
            <a href="#">Trip</a>
            <a href="#">Details</a>
            <a href="#">Review</a>
          </div>

          <div className="signin">
            <button>Sign In</button>
            <button>Sign up</button>
          </div>
        </header>

        <div className='where'>
          <h1>Next Trip?✈️</h1>
        </div>

        <div className='adventure'>
          <div className='trip'>
            <h1 className='heading'>Plan Your Next Adventure</h1>
            <h2 className='heading-2'>Discover and organise trip with tripadvisor</h2>
            <div className="trip-search">
              <div className="search-bar">
                <span className="search-icon">🔍</span>
                <input type="text" placeholder="Search destinations" />
                <button className="search-button">Search</button>
              </div>
            </div>
          </div>

          <div className="photo">
            <img src={hubImg} alt="hub" />
          </div>
        </div>
      </div>
      <h2 className="popular-heading">Popular Destinations</h2>
      <ImageSlider />
      <Upcoming/>
      <Hotel/>
      <div className="app">
      <Free/>
    </div>
    </div>
  );
}

export default App;
