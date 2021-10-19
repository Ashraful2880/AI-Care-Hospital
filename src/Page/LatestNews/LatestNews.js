import React from 'react';
import './LatestNews.css';

const LatestNews = () => {
    return (
        <div>
            <div className="news-text">
                <h1 className="text-5xl text-blue-400">Latest Tips & News</h1>
                <h3 className="text-gray-400 w-6/12 mx-auto mt-4 mb-16">Dedicated to advancing the health and transforming the lives of the people through excellent clinical quality, accessible, patient-centered and effective team work.</h3>
            </div>
            <div className='news-banner grid grid-cols-3 gap-16 mx-auto px-48'>
                <div className="bg-white h-60 px-6 mt-52 rounded-xl">
                    <div className="bg-blue-500 rounded-2xl text-xl text-white font-semibold w-32 p-2 mb-3 mt-3">Oct 20-2019</div>
                    <h3 className="text-2xl mb-3">PROVIDING BETTER HEALTH CARE FOR FAMILIES</h3>
                    <p className="text-lg text-gray-400">Dedicated to advancing the health and transforming the lives of the people.</p>
                    <h4 className="font-semibold mt-2">By:Doctor Kanta Roy</h4>
                </div>
                <div className="bg-white h-60 px-6 mt-52 rounded-xl">
                    <div className="bg-blue-500 rounded-2xl text-xl text-white font-semibold w-32 p-2 mb-3 mt-3">Oct 20-2019</div>
                    <h3 className="text-2xl mb-3">PROVIDING BETTER HEALTH CARE FOR FAMILIES</h3>
                    <p className="text-lg text-gray-400">Through excellent clinical quality, accessible, patient-centered and effective team work</p>
                    <h4 className="font-semibold mt-2">By:Doctor Kanta Roy</h4>
                </div>
                <div className="bg-white h-60 px-6 mt-52 rounded-xl">
                    <div className="bg-blue-500 rounded-2xl text-xl text-white font-semibold w-32 p-2 mb-3 mt-3">Oct 20-2019</div>
                    <h3 className="text-2xl mb-3">PROVIDING BETTER HEALTH CARE FOR FAMILIES</h3>
                    <p className="text-lg text-gray-400">Dedicated to advancing the health and transforming the lives of the people</p>
                    <h4 className="font-semibold mt-2">By:Doctor Kanta Roy</h4>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;