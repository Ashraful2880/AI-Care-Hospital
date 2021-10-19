import React from 'react';
import './Banner.css';
import '../Services/responsive.css';

const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <div className="absolute left-36 top-96 banner-text">
                    <h1 className="text-white text-6xl font-semibold mb-6">We Provide Total-</h1>
                    <h1 className="text-white text-6xl font-semibold mb-6">Health Care Solution</h1>
                    <h3 className="text-white text-2xl font-semibold ">Better Care and Better Understanding</h3>
                </div>
            </div>
        </div>
    );
};

export default Banner;