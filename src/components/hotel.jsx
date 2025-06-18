import React from "react";
import "./hotel.css";

import ibis from "../assets/mumbai.jpg";
import pullman from "../assets/delhi.jpg";
import lemontree from "../assets/jaipur.jpg";
import oterra from "../assets/bengluru.jpg";
import backgroundImage from "../assets/get.png";

const hotels = [
  {
    city: "Mumbai",
    name: "Ibis Mumbai Bkc",
    rating: "9.0",
    tag: "Wonderful (92 reviews)",
    oldPrice: "₹8,621",
    newPrice: "₹6,897",
    total: "₹15,448",
    offer: "20% off",
    img: ibis,
  },
  {
    city: "New Delhi",
    name: "Pullman New Delhi Aerocity Hotel",
    rating: "8.6",
    tag: "Excellent (569 reviews)",
    oldPrice: "₹9,445",
    newPrice: "₹7,556",
    total: "₹17,405",
    offer: "20% off",
    img: pullman,
  },
  {
    city: "Jaipur",
    name: "Lemon Tree Premier, Jaipur",
    rating: "8.4",
    tag: "Very good (204 reviews)",
    oldPrice: "₹6,249",
    newPrice: "₹4,791",
    total: "₹11,863",
    offer: "23% off",
    img: lemontree,
  },
  {
    city: "Bengaluru",
    name: "The Oterra Bengaluru Electronics City",
    rating: "8.8",
    tag: "Excellent (129 reviews)",
    oldPrice: "₹17,000",
    newPrice: "₹12,450",
    total: "₹29,382",
    offer: "Member Price available",
    isMember: true,
    img: oterra,
  },
];

export default function Hotel() {
  return (
    <section
      className="hotel-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hotel-container">
        <div className="hotel-header">
          <h2>Last-minute weekend deals</h2>
          <p>
            Showing deals for: <strong>20 Jun - 22 Jun</strong>
          </p>
        </div>
        <div className="hotel-list">
          {hotels.map((hotel, index) => (
            <div className="hotel-card" key={index}>
              <img src={hotel.img} alt={hotel.name} />
              <div className="hotel-info">
                <p className="city">{hotel.city}</p>
                <h3 className="name">{hotel.name}</h3>
                <div className="rating">
                  <span className="badge">{hotel.rating}</span> {hotel.tag}
                </div>
                <div className="price">
                  <strong>{hotel.newPrice}</strong> <del>{hotel.oldPrice}</del>
                </div>
                <p className="total">
                  {hotel.total} total
                  <br />
                  includes taxes & fees
                </p>
                {hotel.isMember ? (
                  <div className="member-offer">
                    <span>🥇 Member Price available</span>
                    <a href="#">Sign in for Member Price</a>
                  </div>
                ) : (
                  <span className="offer">{hotel.offer}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
