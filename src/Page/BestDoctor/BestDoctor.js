import React from 'react';
import doctor1 from '../../Image/doctor1.png';
import doctor2 from '../../Image/doctor2.png';
import './BestDoctor.css';

const BestDoctor = () => {
    return (
        <div>
            <h2 className="text-info mb-5 mt-4 fw-bold">Our Top Doctors</h2>
            <div className="row container mx-auto mb-5 text-start">
                <div className="col-lg-3 col-sm-12 col-md-6 doc-container rounded-3 mx-auto single-doctor">
                    <img className="doctor-image pb-3 w-100" src={doctor1} alt="doctor" />
                    <div className="ms-2">
                        <h5>Dr. <span className="text-info">Asad Bhuiyan</span></h5>
                        <h6>Diagnosis Expert</h6>
                        <p className="text-secondary">Dedicated to advancing the health and transforming the lives of the people.</p>
                    </div>
                    <div className="text-light mb-2">
                        <i className="bg-primary mx-2 rounded-circle p-2 fs-5 fab fa-facebook">
                            </i>
                        <i className="bg-primary mx-2 rounded-circle p-2 fs-5 fab fa-twitter">
                            </i>
                        <i className="bg-primary mx-2 rounded-circle p-2 fs-5 fab fa-instagram">
                            </i>
                        <button className="btn-primary border-0 rounded-2 my-4 py-2 px-3 ms-3">View Details</button>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 doc-container rounded-3 mx-auto single-doctor">
                    <img className="doctor-image pb-3 w-100" src={doctor2} alt="doctor" />
                    <div className="ms-2">
                        <h5>Dr. <span className="text-info">Barik Masud</span></h5>
                        <h6>Rehabilition Expert</h6>
                        <p className="text-secondary">Through excellent clinical quality,patient - centered and effective team work.</p>
                    </div>
                    <div className="text-light mb-2">
                        <i className="bg-primary mx-2 rounded-circle p-2 fs-5 fab fa-facebook">
                            </i>
                        <i className="bg-primary mx-2 rounded-circle p-2 fs-5 fab fa-twitter">
                            </i>
                        <i className="bg-primary mx-2 rounded-circle p-2 fs-5 fab fa-instagram">
                            </i>
                        <button className="btn-primary border-0 rounded-2 my-4 py-2 px-3 ms-3">View Details</button>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 doc-container rounded-3 mx-auto single-doctor">
                    <img className="doctor-image pb-3 w-100" src={"https://i.ibb.co/fFfcdLh/service5.png"} alt="doctor" />
                    <div className="ms-2">
                        <h5>Dr. <span className="text-info">Taim Khan</span></h5>
                        <h6>Medicine Expert</h6>
                        <p className="text-secondary">Dedicated to advancing the health and transforming the lives of the people.</p>
                    </div>
                    <div className="text-light mb-2">
                        <i className="bg-primary mx-2 rounded-circle p-2 fs-5 fab fa-facebook">
                            </i>
                        <i className="bg-primary mx-2 rounded-circle p-2 fs-5 fab fa-twitter">
                            </i>
                        <i className="bg-primary mx-2 rounded-circle p-2 fs-5 fab fa-instagram">
                            </i>
                        <button className="btn-primary border-0 rounded-2 my-4 py-2 px-3 ms-3">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDoctor;