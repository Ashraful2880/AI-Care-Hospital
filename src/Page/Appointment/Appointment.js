import React from 'react';
import mail from '../../Image/contact.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <>
            <div className="mt-5">
                <h2 className="text-info pt-5 fw-bold">Want to Appoint?</h2>
                <h4 className="text-info">Confirm Your Appointment</h4>
            </div>
            <div className="mt-4 pb-5 row container mx-auto">
                <div className="col-lg-6 mx-auto col-md-12 col-sm-12 mt-5 appoint-input-area">
                    <div className="col-sm-12 col-md-6 col-lg-4 mx-auto w-100">
                        <input className="app-input py-2 px-3 border-0 border-bottom border-1 border-info fs-6 mb-4 w-75" type="text" placeholder="Your Name"/>
                    </div>
                    <div className="w-100">
                        <input className="app-input py-2 px-3 border-0 border-bottom border-1 border-info fs-6 mb-4 w-75" type="text" placeholder="Doctor Name"/>
                    </div>
                    <div className="w-100">
                        <input className="app-input py-2 px-3 border-0 border-bottom border-1 border-info fs-6 mb-4 w-75" type="number" placeholder="Your Contact number"/>
                    </div>
                    <div className="w-100">
                        <input className="app-input py-2 px-3 border-0 border-bottom border-1 border-info fs-6 mb-4 w-75" type="date"/>
                    </div>
                    <div className="w-100">
                        <textarea className="app-input py-2 px-2 border rounded-3 border-info fs-6 mb-3 w-75" cols="30" rows="6" placeholder="Special Request"></textarea>
                    </div>
                    <div className="w-100">
                        <input className="btn btn-outline-info py-2 px-5 border-1 border-info fs-6 mb-5 w-75" type="button" value="Book Now" />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 mx-auto appoint-img">
                    <img style={{maxWidth:'100%'}} src={mail} alt="AppointImage" />
                </div>
            </div>
        </>
    );
};

export default Appointment;