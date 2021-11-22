import React from 'react';
import './LatestNews.css';
import '../Services/Services';
import doc1 from '../../Image/doctor1.png'

const LatestNews = () => {
    return (
        <>
            <h2 className="text-info mb-5 fw-bold">Latest News From Our Doctors</h2>
            <div className="news-banner">
               <div className="row mx-auto container-fluid">
                    <div className="col-md-6 col-sm-12 col-lg-3 mx-auto bg-white py-4 px-4 rounded-3 text-start">
                        <div className="bg-info w-25 p-2 rounded-3 mb-3">Oct 20-2019</div>
                        <h5>PROVIDING BETTER HEALTH CARE FOR FAMILIES</h5>
                        <p>Dedicated to advancing the health and transforming the lives of the people.</p>
                        <hr />
                        <div className="d-flex align-items-center">
                            <img className="doctor-profile rounded-circle" src={doc1} alt="doctor1" />
                            <h6 className="ms-3">By- Dr. Sneha Khan</h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-3 mx-auto bg-white py-4 px-4 rounded-3 text-start">
                        <div className="bg-info w-25 p-2 rounded-3 mb-3">Oct 20-2019</div>
                        <h5>PROVIDING BETTER HEALTH CARE FOR FAMILIES</h5>
                        <p>Through excellent clinical quality, accessible, patient-centered and effective team work</p>
                        <hr />
                        <div className="d-flex align-items-center">
                            <img className="doctor-profile rounded-circle" src={doc1} alt="doctor1" />
                            <h6 className="ms-3">By- Dr. Kanta Roy</h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-3 mx-auto bg-white py-4 px-4 rounded-3 text-start">
                        <div className="bg-info w-25 p-2 rounded-3 mb-3">Oct 20-2019</div>
                        <h5>PROVIDING BETTER HEALTH CARE FOR FAMILIES</h5>
                        <p>Dedicated to advancing the health and transforming the lives of the people</p>
                        <hr />
                        <div className="d-flex align-items-center">
                            <img className="doctor-profile rounded-circle" src={doc1} alt="doctor1" />
                            <h6 className="ms-3">By- Dr. Fahim Roy</h6>
                        </div>
                    </div>
               </div>
            </div>
        </>
    );
};

export default LatestNews;