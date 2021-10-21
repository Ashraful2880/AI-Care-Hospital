import React from 'react';
import doctor1 from '../../Image/doctor1.png';
import doctor2 from '../../Image/doctor2.png';
import doctor4 from '../../Image/doctor4.png';
import './BestDoctor.css';

const BestDoctor = () => {
    return (
        <div>
            <div>
                <h1 className="text-info my-5">Successful Doctor in Covid Time</h1>
            </div>
            <div className="row container mx-auto mb-5">
                <div className="col-lg-3 col-sm-12 col-md-6 doc-container pb-5 rounded-3">
                    <img className="doctor pb-3 w-100" src={doctor1} alt="doctor" />
                    <h3>Doctor-Asad Bhuiyan</h3>
                    <h5>Diagnosis Expert</h5>
                    <button className="btn-primary border-0 rounded-2 mt-2 mb-3">View Profile</button>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 doc-container rounded-3">
                    <img className="doctor pb-3 w-100" src={doctor2} alt="doctor" />
                    <h3>Doctor-Barik Masud</h3>
                    <h5>Rehabilition Expert</h5>
                    <button className="btn-primary border-0 rounded-2 mt-2 mb-3">View Profile</button>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 doc-container rounded-3">
                    <img className="doctor pb-3 w-100" src={"https://i.ibb.co/fFfcdLh/service5.png"} alt="doctor" />
                    <h3>Doctor-Taim Khan</h3>
                    <h5>Medicine Expert</h5>
                    <button className="btn-primary border-0 rounded-2 mt-2 mb-3">View Profile</button>
                </div>
                <div className="col-lg-3 col-sm-12 col-md-6 doc-container rounded-3">
                    <img className="doctor w-100 pb-3 w-100" src={doctor4} alt="doctor" />
                    <h3>Doctor-John Smith</h3>
                    <h5>Gyneological Expert</h5>
                    <button className="btn-primary border-0 rounded-2 mt-2 mb-3">View Profile</button>
                </div>
            </div>
        </div>
    );
};

export default BestDoctor;