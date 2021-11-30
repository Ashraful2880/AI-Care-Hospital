import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';
import Slide from 'react-reveal/Slide';

const Service = ({service}) => {
    const{url,name,description,id}=service;
    return (
        <Slide bottom>
        <div className="service-area col-md-6 col-sm-12 col-lg-3 ms-2 container-fluid mx-auto mb-5 pb-5">
            <img className="service-image" src={url} alt="" />
            <h3 className="mb-3 mt-4">{name}</h3>
            <p className="px-2 text-secondary">{description.slice(0,130)}.......</p>
            <Link to={`/details/${id}`} className="btn btn-info text-white mt-2">Load details</Link>
        </div>
        </Slide>
    );
};

export default Service;