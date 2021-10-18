import React from 'react';
import shape from '../../Image/line.png';
import about from '../../Image/about .png';

const About = () => {
    return (
        <div>
            <div>
                <h1 className="text-blue-400 text-4xl font-semibold mt-2.5">A Few Words About Us</h1>
                <h2 className="text-blue-400 text-2xl font-semibold">Who We are</h2>
                <img className="mx-auto" src={shape} alt="" />
            </div>
            <div className="flex">
                <div className="w-6/12">
                    <img src={about} alt="aboutImage" />
                </div>
                <div className="w-6/12">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
    );
};

export default About;