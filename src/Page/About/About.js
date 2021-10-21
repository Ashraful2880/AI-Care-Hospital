import React from 'react';
import shape from '../../Image/line.png';
import about from '../../Image/about .png';
import exper from '../../Image/exp-doc.png';
import covid from '../../Image/covid.png'
import './About.css';

const About = () => {
    return (
        <div className="pb-5">
            <div className="pt-3">
                <h1 className="text-info">A Few Words About Us</h1>
                <h2>Who We Are</h2>
                <img className="mx-auto mb-5" src={shape} alt="" />
            </div>
            <div className="container-fluid row">
                <div className="col-sm-12 col-md-6 col">
                    <img className="about-img" src={about} alt="aboutImage" />
                </div>
                <div className=" col-sm-12 col-md-6 col about-text py-3 px-5 rounded-3">
                    <h1 className="mb-5 text-info">Special Operation Theater</h1>
                    <p className="mb-3 fs-5 text-secondary text-start">
                        Getting a new patient to actually walk through the door can mean the difference between a long-term relationship or no relationship at all. When a person doesn’t show up for their initial meeting with a doctor, the likelihood that they’ll reschedule it is low
                    </p>
                    <p className="mb-3 fs-5 text-secondary text-start">
                        They might be embarrassed about forgetting the appointment or   just feel hesitant about seeing a doctor. Sending a reminder  text that also puts the patient at ease can increase the odds    that they keep their appointment. 
                    </p>
                    <p className="mb-3 fs-5 text-secondary text-start">
                        Reminder texts can also help existing patients stay engaged so  they’re more likely to keep their commitment. Messages can be    used for actually scheduling their appointment, as the text    conversation below illustrates
                    </p>
                </div>
            </div>
            <div className="container-fluid row mt-5">
                <div className=" col-sm-12 col-md-6 col about-text py-3 px-5 rounded-3">
                    <h1 className="mb-5 text-info">Experienced Doctor </h1>
                    <p className="mb-3 fs-5 text-secondary text-start">
                        Getting a new patient to actually walk through the door can mean the difference between a long-term relationship or no relationship at all. When a person doesn’t show up for their initial meeting with a doctor, the likelihood that they’ll reschedule it is low
                    </p>
                    <p className="mb-3 fs-5 text-secondary text-start">
                        They might be embarrassed about forgetting the appointment or   just feel hesitant about seeing a doctor. Sending a reminder  text that also puts the patient at ease can increase the odds    that they keep their appointment. 
                    </p>
                    <p className="mb-3 fs-5 text-secondary text-start">
                        Reminder texts can also help existing patients stay engaged so  they’re more likely to keep their commitment. Messages can be    used for actually scheduling their appointment, as the text    conversation below illustrates
                    </p>
                </div>
                <div className="col-sm-12 col-md-6 col">
                    <img className="about-img" src={exper} alt="aboutImage" />
                </div>
            </div>
            <div className="container-fluid row mt-5">
                <div className="col-sm-12 col-md-6 col">
                    <img className="about-img" src={covid} alt="aboutImage" />
                </div>
                <div className=" col-sm-12 col-md-6 col about-text py-3 px-5 rounded-3">
                    <h1 className="mb-5 text-info">Covid-19 Special Unit</h1>
                    <p className="mb-3 fs-5 text-secondary text-start">
                        Getting a new patient to actually walk through the door can mean the difference between a long-term relationship or no relationship at all. When a person doesn’t show up for their initial meeting with a doctor, the likelihood that they’ll reschedule it is low
                    </p>
                    <p className="mb-3 fs-5 text-secondary text-start">
                        They might be embarrassed about forgetting the appointment or   just feel hesitant about seeing a doctor. Sending a reminder  text that also puts the patient at ease can increase the odds    that they keep their appointment. 
                    </p>
                    <p className="mb-3 fs-5 text-secondary text-start">
                        Reminder texts can also help existing patients stay engaged so  they’re more likely to keep their commitment. Messages can be    used for actually scheduling their appointment, as the text    conversation below illustrates
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;