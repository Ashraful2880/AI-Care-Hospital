import React from 'react';
import about from '../../Image/about .png';
import exper from '../../Image/exp-doc.png';
import covid from '../../Image/covid.png'
import './About.css';
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';

const About = () => {
    return (
        <div className="py-5 container mx-auto">
            <Flip top>
            <h2 className="text-info mt-5 fw-bold">A Few Words About Us</h2>
            <h2 className="pb-5">Who We Are</h2>
            </Flip>
            <div className="row">
                <Slide left>
                <div className="col-sm-12 col-md-12 col-lg-6 mx-auto">
                    <img className="w-100 rounded-3" src={about} alt="aboutImage" />
                </div>
                </Slide>
                <Slide right>
                <div className="col-sm-12 col-md-12 col-lg-6 about-text py-3 rounded-3 px-5 text-start">
                    <h3 className="fw-bold mt-3">Special Operation Theater</h3>
                    <h5 className="mt-3 mb-4">A GREAT PLACE TO WORK. A GREAT PLACE TO RECEIVE CARE. LEADING MEDICINE.</h5>
                    <p className="mb-2 text-secondary">
                        Getting a new patient to actually walk through the door can mean the difference between a long-term relationship or no relationship at all. When a person doesn’t show up for their initial meeting with a doctor, the likelihood that they’ll reschedule it is low
                    </p>
                    <p className="text-secondary">
                        They might be embarrassed about forgetting the appointment or   just feel hesitant about seeing a doctor. Sending a reminder  text that also puts the patient at ease can increase the odds    that they keep their appointment. 
                    </p>
                </div>
                </Slide>
            </div>
            <div className="row mt-5">
                <Slide left>
                <div className="col-sm-12 col-md-12 col-lg-6 about-text py-3 rounded-3 px-5 text-start">
                    <h3 className="fw-bold mt-3">Experienced Doctor </h3>
                    <h5 className="mt-3 mb-4">A GREAT PLACE TO WORK. A GREAT PLACE TO RECEIVE CARE. LEADING MEDICINE.</h5>
                    <p className="mb-3 text-secondary text-start">
                        Getting a new patient to actually walk through the door can mean the difference between a long-term relationship or no relationship at all. When a person doesn’t show up for their initial meeting with a doctor, the likelihood that they’ll reschedule it is low
                    </p>
                    <p className="mb-3 text-secondary text-start">
                        They might be embarrassed about forgetting the appointment or   just feel hesitant about seeing a doctor. Sending a reminder  text that also puts the patient at ease can increase the odds    that they keep their appointment. 
                    </p>
                </div>
                </Slide>
                <Slide right>
                <div className="col-sm-12 col-md-12 col-lg-6 mx-auto">
                    <img className="w-100 rounded-3" src={exper} alt="aboutImage" />
                </div>
                </Slide>
            </div>
            <div className="row mt-5">
                <Slide left>
                <div className="col-sm-12 col-md-12 col-lg-6 mx-auto">
                    <img className="w-100 rounded-3" src={covid} alt="aboutImage" />
                </div>
                </Slide>
                <Slide right>
                <div className="col-sm-12 col-md-12 col-lg-6 about-text py-3 rounded-3 px-5 text-start">
                    <h3 className="fw-bold mt-3">Covid-19 Special Unit</h3>
                    <h5 className="mt-3 mb-4">A GREAT PLACE TO WORK. A GREAT PLACE TO RECEIVE CARE. LEADING MEDICINE.</h5>
                    <p className="mb-3 text-secondary text-start">
                        Getting a new patient to actually walk through the door can mean the difference between a long-term relationship or no relationship at all. When a person doesn’t show up for their initial meeting with a doctor, the likelihood that they’ll reschedule it is low
                    </p>
                    <p className="mb-3 text-secondary text-start">
                        They might be embarrassed about forgetting the appointment or   just feel hesitant about seeing a doctor. Sending a reminder  text that also puts the patient at ease can increase the odds    that they keep their appointment. 
                    </p>
                </div>
                </Slide>
            </div>
        </div>
    );
};

export default About;