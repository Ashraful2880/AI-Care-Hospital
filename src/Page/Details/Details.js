import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const {serviceId}=useParams();
    const [details, setDetails]=useState({})
    useEffect(() => {
    fetch('/fakeData.json')
    .then(res=>res.json())
    .then(data=>{
    const singleService=data.find(p=>p.id==serviceId)
    setDetails(singleService)
    })},[serviceId]);
    return (
        <div>
            <h1 className="text-info mb-5">Are You Want This Service?</h1>
            <div className="container mx-auto row">
                <div className="col-md-6 col-sm-12 col-lg-6">
                    <img className="detailsImage mt-5" src={details.url} alt="" />
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6">
                    <h2 className="text-info text-center mt-5">Service Name: {details.name}</h2>
                    <h3 className="text-info text-center">Details About This Service</h3>
                    <h4 className="text-warning text-xl font-semibold text-center">Doctor Name: {details.doctor}</h4>
                    <h4 className="text-danger">Total Cost: {details.cost}</h4>
                    <p className="text-secondary text-start w-75 mx-auto">{details.description}</p>
                    <button className="btn btn-info px-2 py-2 text-white rounded-2 w-40 mt-3 mb-5">Confirm Service</button>
                    <Link to="/home" className="btn btn-warning px-2 py-2 text-white rounded-2 w-40 mt-3 mb-5 ms-5">Back To Home</Link>
                </div>           
            </div>
        </div>
       
    );
};

export default Details;