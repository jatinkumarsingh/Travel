import React, { useState } from 'react';
import './TripBooking.css';
import tripBg from '../assets/back.mp4';

const TripBooking = () => {
    const [tripType, setTripType] = useState('One Way');
    const [zeroCancellation, setZeroCancellation] = useState(false);
    const [formData, setFormData] = useState({
        from: '',
        fromCode: '',
        to: '',
        toCode: '',
        departure: '24',
        departureMonth: 'Jul\'25',
        return: '',
        travelers: 1,
        travelClass: 'Economy/Premium Economy',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Flight search: ${formData.from} to ${formData.to}`);
    };

    return (
        <div className="wrapper">
            <video autoPlay muted loop className="bg-video">
                <source src={tripBg} type="video/mp4" />
            </video>

            <div className="booking-container">
                <div className="form-box">
                    <div className="heading-section">
                        <h1 className="main-heading">Plan Your Trip</h1>
                        <p className="heading-subtitle">Discover amazing destinations and book your perfect journey</p>
                    </div>
                    <div className="trip-types">
                        <label className="trip-type">
                            <input type="radio" name="tripType" value="One Way"
                                checked={tripType === 'One Way'}
                                onChange={(e) => setTripType(e.target.value)}
                            />
                            <span>One Way</span>
                        </label>
                        <label className="trip-type">
                            <input
                                type="radio" name="tripType" value="Round Trip"
                                checked={tripType === 'Round Trip'}
                                onChange={(e) => setTripType(e.target.value)}
                            />
                            <span>Round Trip</span>
                        </label>
                        <label className="trip-type">
                            <input
                                type="radio"
                                name="tripType"
                                value="Multi City"
                                checked={tripType === 'Multi City'}
                                onChange={(e) => setTripType(e.target.value)}
                            />
                            <span>Multi City</span>
                        </label>
                        <div className="book-international">
                            Book International and Domestic Flights
                        </div>
                    </div>
                    <div className="search-fields">
                        <div className="field-group">
                            <div className="field from-field">
                                <label>From</label>
                                <div className="location-input">
                                    <input
                                        type="text"
                                        name="from"
                                        placeholder="Delhi"
                                        value={formData.from}
                                        onChange={handleChange}
                                        className="city-name-input"
                                    />
                                    <input
                                        type="text"
                                        name="fromCode"
                                        placeholder="DEL, Delhi Airport India"
                                        value={formData.fromCode}
                                        onChange={handleChange}
                                        className="airport-code-input"
                                    />
                                </div>
                            </div>

                            <div className="swap-button">⇄</div>

                            <div className="field to-field">
                                <label>To</label>
                                <div className="location-input">
                                    <input
                                        type="text"
                                        name="to"
                                        placeholder="Bengaluru"
                                        value={formData.to}
                                        onChange={handleChange}
                                        className="city-name-input"
                                    />
                                    <input
                                        type="text"
                                        name="toCode"
                                        placeholder="BLR, Bengaluru International Airport"
                                        value={formData.toCode}
                                        onChange={handleChange}
                                        className="airport-code-input"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="date-traveler-group">
                            <div className="field date-field">
                                <label>Departure</label>
                                <div className="date-input">
                                    <input
                                        type="date"
                                        name="departure"
                                        value={formData.departure}
                                        onChange={handleChange}
                                        className="date-picker"
                                    />
                                    <div className="day-name">Thursday</div>
                                </div>
                            </div>

                            {tripType === 'Round Trip' && (
                                <div className="field date-field">
                                    <label>Return</label>
                                    <div className="date-input">
                                        <input
                                            type="date"
                                            name="return"
                                            value={formData.return}
                                            onChange={handleChange}
                                            className="date-picker return-date"
                                            placeholder="Tap to add a return date for bigger discounts"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="field traveler-field">
                                <label>Travellers & Class</label>
                                <div className="traveler-input">
                                    <input
                                        type="number"
                                        name="travelers"
                                        min="1"
                                        value={formData.travelers}
                                        onChange={handleChange}
                                        className="traveler-count-input"
                                    />
                                    <span className="traveler-label">Traveller</span>
                                    <select
                                        name="travelClass"
                                        value={formData.travelClass}
                                        onChange={handleChange}
                                        className="class-select"
                                    >
                                        <option>Economy/Premium Economy</option>
                                        <option>Business</option>
                                        <option>First Class</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Options */}
                    <div className="additional-options">
                        <label className="zero-cancellation">
                            <input
                                type="checkbox"
                                checked={zeroCancellation}
                                onChange={(e) => setZeroCancellation(e.target.checked)}
                            />
                            <span>Add Zero Cancellation</span>
                            <span className="refund-text">Get 100% refund on cancellation</span>
                            <span className="view-details">View Details</span>
                        </label>

                        <div className="flight-tracker">
                            <span className="tracker-icon">📍</span>
                            <span>Flight Tracker</span>
                            <span className="new-badge-small">NEW</span>
                        </div>
                    </div>

                    {/* Search Button */}
                    <button type="submit" className="search-btn" onClick={handleSubmit}>
                        SEARCH
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TripBooking;
