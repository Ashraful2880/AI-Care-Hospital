import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-container">
            <div className="text-area">
                <h1 className="text-white header-text">We Provide Total Solution Of</h1>
                <h2 className="text-white sub-header mt-3">Health Care</h2>
                <h4 className="text-white mt-3">Better Care and Better Understanding</h4>
                <Link to="/services"> <button className="btn btn-primary mt-4 fs-5">View Services</button> </Link>
            </div>
        </div>
    );
};

export default Banner;