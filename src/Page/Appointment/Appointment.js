import React from 'react';
import mail from '../../Image/contact.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div>
            <div className="mt-5">
                <h1 className="text-blue-400 text-4xl">Want to Appoint?</h1>
                <h3 className="text-blue-400 text-2xl">Just Drop a Message.</h3>
            </div>
            <div className="lg:flex rounded-3xl lg:mx-40 mt-4 pb-10 shadow-2xl">
                <div className="lg:w-6/12 md:w-full sm:w-full mt-20 border-r-2 border-blue-300 border-dashed sm:border-0">
                    <div className="md:w-full sm:w-full lg:w-full">
                        <input className="py-3 px-5 border-2 rounded-lg lg:w-6/12 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5 md:w-full" type="text" placeholder="Your Name"/>
                    </div>
                    <div className="md:w-full sm:w-full lg:w-full">
                        <input className="py-3 px-5 border-2 rounded-lg lg:w-6/12 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" type="text" placeholder="Doctor Name"/>
                    </div>
                    <div className="md:w-full sm:w-full">
                        <input className="py-3 px-5 border-2 rounded-lg w-6/12 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" type="number" placeholder="Your Contact number"/>
                    </div>
                    <div className="md:w-full sm:w-full">
                        <input className="py-3 px-5 border-2 rounded-lg w-6/12 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" type="date"/>
                    </div>
                    <div className="md:w-full sm:w-full">
                        <textarea className="py-3 px-5 border-2 rounded-lg w-6/12 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" cols="30" rows="6" placeholder="Special Request"></textarea>
                    </div>
                    <div className="md:w-full sm:w-full">
                        <input className="py-3  border-2 rounded-lg w-2/12 text-xl mb-5 mx-auto border-blue-400 text-white bg-blue-400 hover:bg-white hover:text-blue-500" type="button" value="Book Now" />
                    </div>
                </div>
                <div className="lg:w-6/12 md:w-full sm:w-full">
                    <img src={mail} alt="AppointImage" />
                </div>
            </div>
        </div>
    );
};

export default Appointment;