import React from 'react';
import '../Services/responsive.css';
import shape from '../../Image/line.png';
import about from '../../Image/about .png';

const About = () => {
    return (
        <div>
            <div className="w-full">
                <h1 className="text-blue-400 text-4xl font-semibold mt-2.5">A Few Words About Us</h1>
                <h2 className="text-blue-400 text-2xl font-semibold">Who We are</h2>
                <img className="mx-auto" src={shape} alt="" />
            </div>
            <div className="lg:flex container mx-auto py-10 about-area sm:block">
                <div className="lg:w-6/12 sm:w-full border-r-2 border-blue-300 about-image">
                    <img className="shadow-2xl" src={about} alt="aboutImage" />
                </div>
                <div className="lg:w-6/12 p-10  shadow-2xl ml-10 about-text sm:w-full sm:ml-0">
                    <h1 className="text-5xl text-blue-400 mb-14">Who We Are</h1>
                    <p className="text-left mb-5 text-lg text-gray-400">
                        Getting a new patient to actually walk through the door can mean the difference between a long-term relationship or no relationship at all. When a person doesn’t show up for their initial meeting with a doctor, the likelihood that they’ll reschedule it is low
                    </p>
                    <p className="text-left mb-5 text-lg text-gray-400">
                        They might be embarrassed about forgetting the appointment or   just feel hesitant about seeing a doctor. Sending a reminder  text that also puts the patient at ease can increase the odds    that they keep their appointment. 
                    </p>
                    <p className="text-left text-lg text-gray-400">
                        Reminder texts can also help existing patients stay engaged so  they’re more likely to keep their commitment. Messages can be    used for actually scheduling their appointment, as the text    conversation below illustrates
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;