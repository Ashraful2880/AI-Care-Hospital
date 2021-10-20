import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const{url,name,description,id}=service;
    return (
        <div className="rounded-3xl pb-10 shadow-2xl service">
            <img className="px-6 py-6 shadow-2xl rounded-full w-80 h-80 mx-auto mt-2" src={url} alt="serviceImage" />
            <h3 className="text-blue-400 text-2xl font-semibold mt-6 mb-5">{name}</h3>
            <p className="service-p px-10 text-left text-gray-400 text-lg lg:mb-16 sm:mb-20">{description.slice(0,130)}.......</p>
            <Link to={`/details/${id}`} className=" px-5 py-2 text-lg mt-10 bg-blue-400 text-white rounded-3xl hover:text-blue-400 hover:bg-white border-2 border-blue-400 ">Load details</Link>
        </div>
    );
};

export default Service;