import React from 'react';
import './LatestNews.css';
import '../Services/Services'

const LatestNews = () => {
    return (
        <div>
            <div className="my-5 w-75 mx-auto">
                <h1 className="text-info pt-5">Latest Tips & News</h1>
                <p className="text-secondary fs-4 py-3">Dedicated to advancing the health and transforming the lives of the people through excellent <br /> clinical quality, accessible, patient-centered and effective team work.</p>
            </div>
            <div className="news-banner">
               <div className="row mx-auto container-fluid">
               <div className="col-md-6 col-sm-12 col-lg-3 mx-auto bg-white py-5 rounded mb-2">
                    <div className="">Oct 20-2019</div>
                    <h3 className="">PROVIDING BETTER HEALTH CARE FOR FAMILIES</h3>
                    <p className="">Dedicated to advancing the health and transforming the lives of the people.</p>
                    <h4 className="">By:Doctor Kanta Roy</h4>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-3 mx-auto bg-white py-5 rounded mb-2">
                    <div className="">Oct 20-2019</div>
                    <h3 className="">PROVIDING BETTER HEALTH CARE FOR FAMILIES</h3>
                    <p className="">Through excellent clinical quality, accessible, patient-centered and effective team work</p>
                    <h4 className="">By:Doctor Kanta Roy</h4>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-3 mx-auto bg-white py-5 rounded mb-2">
                    <div className="">Oct 20-2019</div>
                    <h3 className="">PROVIDING BETTER HEALTH CARE FOR FAMILIES</h3>
                    <p className="">Dedicated to advancing the health and transforming the lives of the people</p>
                    <h4 className="">By:Doctor Kanta Roy</h4>
                </div>
               </div>
            </div>
        </div>
    );
};

export default LatestNews;