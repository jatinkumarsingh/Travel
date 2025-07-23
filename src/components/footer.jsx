import React from 'react';
import './Footer.css';
import { FaWalking } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="top">
          <div className="left">
            <div className="logo">
              <FaWalking className="icon" />
              <span className="brand">Trip Planner AI</span>
            </div>
            <p className="text">
              Turn your next trip into a hassle-free experience with Trip Planner AI.
            </p>
          </div>
          <div className="links">
            <div className="col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Trust & Safety</a></li>
                <li><a href="#">Tripadvisor Technology</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="col">
              <h4>Support</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col">
              <h4>Itineraries</h4>
              <ul>
                <li><a href="#">Community Trips</a></li>
                <li><a href="#">Find Destinations</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bottom">
          © 2023 Trip Planner AI. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
