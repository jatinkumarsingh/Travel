import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import ImageSlider from './components/ImageSlider';
import hubImg from './assets/hub.jpg';
import videoBg from './assets/back.mp4';
import Upcoming from './components/upcoming';
import Hotel from "./components/hotel"; 
import Free from "./components/free";
import Footer from './components/footer';
import SignIn from './components/pages/Signin';
import TripBooking from './components/TripBooking';
import destinations from './components/destination';


import { auth } from './firebase';
import { signOut } from 'firebase/auth';


function HomePage() {
  const navigate = useNavigate();
  const [headerQuery, setHeaderQuery] = useState('');
  const [adventureQuery, setAdventureQuery] = useState('');
  const [showHeaderSuggestions, setShowHeaderSuggestions] = useState(false);
  const [showAdventureSuggestions, setShowAdventureSuggestions] = useState(false);
  const [headerSuggestions, setHeaderSuggestions] = useState([]);
  const [adventureSuggestions, setAdventureSuggestions] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  
  const username = localStorage.getItem('username');
  const handleHeaderSearch = (value) => {
    setHeaderQuery(value);
    
    if (value.length > 0) {
      const filtered = destinations.filter(dest =>
        dest.name.toLowerCase().includes(value.toLowerCase()) ||
        dest.region.toLowerCase().includes(value.toLowerCase()) ||
        dest.description.toLowerCase().includes(value.toLowerCase())
      );
      setHeaderSuggestions(filtered.slice(0, 6));
      setShowHeaderSuggestions(true);
    } else {
      setShowHeaderSuggestions(false);
    }
  };


  const handleAdventureSearch = (value) => {
    setAdventureQuery(value);
    
    if (value.length > 0) {
      const filtered = destinations.filter(dest =>
        dest.name.toLowerCase().includes(value.toLowerCase()) ||
        dest.region.toLowerCase().includes(value.toLowerCase()) ||
        dest.description.toLowerCase().includes(value.toLowerCase())
      );
      setAdventureSuggestions(filtered.slice(0, 8));
      setShowAdventureSuggestions(true);
    } else {
      setShowAdventureSuggestions(false);
    }
  };


  const selectDestination = (destination, isHeader = false) => {
    setSelectedDestination(destination);
    if (isHeader) {
      setHeaderQuery(destination.name);
      setShowHeaderSuggestions(false);
    } else {
      setAdventureQuery(destination.name);
      setShowAdventureSuggestions(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <div className="app-wrp">
      <video autoPlay muted loop className="bg-vid">
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="cont-ovl">
        <header className="hdr">
          <div className="lg">
            <a target="_blank" rel="noopener noreferrer">
              <img
                src="https://static.tacdn.com/img2/brand_refresh/special/pride_month_Tripadvisor_lockup_horizontal_secondary.svg"
                alt="TripAdvisor Logo"
              />
            </a>
          </div>


          <div className="srch">
            <div className="srch-ctn">
              <div className="srch-bar">
                <span className="srch-icn">🔍</span>
                <input 
                  type="text" 
                  placeholder="Places to go, things to do, hotels..." 
                  value={headerQuery}
                  onChange={(e) => handleHeaderSearch(e.target.value)}
                  onFocus={() => headerQuery && setShowHeaderSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowHeaderSuggestions(false), 200)}
                  autoComplete="off"
                />
                <button className="srch-btn">Search</button>
              </div>
              
    
              {showHeaderSuggestions && headerSuggestions.length > 0 && (
                <div className="hdr-sugg-dd">
                  {headerSuggestions.map((dest, index) => (
                    <div
                      key={index}
                      className="hdr-sugg-item"
                      onMouseDown={() => selectDestination(dest, true)}
                    >
                      <div className="sugg-flg">{dest.flag}</div>
                      <div className="sugg-cntnt">
                        <div className="sugg-nm">{dest.name}</div>
                        <div className="sugg-dtl">{dest.type} • {dest.region}</div>
                        <div className="sugg-desc">{dest.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="nv">
            <a href="#">Discover</a>
            <a onClick={() => navigate('/trip')} style={{ cursor: 'pointer' }}>Trip</a>
            <a href="#">Details</a>
            <a href="#">Review</a>
          </div>

          <div className="sgn">
            {username ? (
              <div className="usr-info">
                <p className="wlcm-txt">HEY MR. {username.split('@')[0]}</p>
                <button className="lgt-btn" onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <>
                <button onClick={() => navigate('/signin')}>Sign In</button>
                <button>Sign up</button>
              </>
            )}
          </div>
        </header>

        <div className='where'>
          <h1>Next Trip?✈️</h1>
        </div>

        <div className='adv'>
          <div className='trp'>
            <h1 className='hdg'>Plan Your Next Adventure</h1>
            <h2 className='hdg2'>Discover and organise trip with tripadvisor</h2>
            
      
            <div className="trp-srch">
              <div className="srch-ctn">
                <div className="srch-bar">
                  <span className="srch-icn">🔍</span>
                  <input 
                    type="text" 
                    placeholder="Search destinations around the world..." 
                    value={adventureQuery}
                    onChange={(e) => handleAdventureSearch(e.target.value)}
                    onFocus={() => adventureQuery && setShowAdventureSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowAdventureSuggestions(false), 200)}
                    autoComplete="off"
                  />
                  <button className="srch-btn">Search</button>
                </div>
                
  
                {showAdventureSuggestions && adventureSuggestions.length > 0 && (
                  <div className="adv-sugg-dd">
                    {adventureSuggestions.map((dest, index) => (
                      <div
                        key={index}
                        className="adv-sugg-item"
                        onMouseDown={() => selectDestination(dest, false)}
                      >
                        <div className="sugg-flg">{dest.flag}</div>
                        <div className="sugg-cntnt">
                          <div className="sugg-nm">{dest.name}</div>
                          <div className="sugg-dtl">{dest.type} • {dest.region}</div>
                          <div className="sugg-desc">{dest.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* SELECTED DESTINATION INFO */}
              {selectedDestination && (
                <div className="sel-dest">
                  <h3>✨ {selectedDestination.name}</h3>
                  <div className="dest-dtl">
                    <span className="dest-flg">{selectedDestination.flag}</span>
                    <span className="dest-typ">{selectedDestination.type}</span>
                    <span className="dest-rgn">{selectedDestination.region}</span>
                  </div>
                  <p className="dest-desc">{selectedDestination.description}</p>
                  <button className="expl-btn">Explore {selectedDestination.name} 🚀</button>
                </div>
              )}
            </div>
          </div>

          <div className="ph">
            <img src={hubImg} alt="hub" />
          </div>
        </div>
      </div>

      <h2 className="pop-hdg">Popular Destinations</h2>
      <ImageSlider />
      <Upcoming />
      <Hotel />

      <div className="app">
        <Free />
      </div>
      <Footer />
    </div>
  );
}

// ✅ Wrap App with Router
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/trip" element={<TripBooking />} />
      </Routes>
    </Router>
  );
}
