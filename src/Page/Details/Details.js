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
        <div className="container mx-auto row mt-5">
            <h2 className="text-info mb-5 mt-5">Are You Want This Service?</h2>
            <div className="col-md-12 col-sm-12 col-lg-6">
                <img className="detailsImage w-100 my-5 rounded-3" src={details.url} alt="" />
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 text-start px-5">
                <h3 className="text-info my-5">Details Of {details?.name}</h3>
                <h3>Service Name: <span className="text-info">{details.name}</span></h3>
                <h4 className="text-warning text-xl font-semibold">Doctor Name: {details.doctor}</h4>
                <h4 className="text-danger">Total Cost: {details.cost}$</h4>
                <p className="text-secondary text-start mx-auto">{details.description}</p>
                <button className="btn btn-info px-2 py-2 text-white rounded-2 w-40 mt-3 mb-5">Confirm Service</button>
                <Link to="/home" className="btn btn-warning px-2 py-2 text-white rounded-2 w-40 mt-3 mb-5 ms-5">Back To Home</Link>
            </div>           
        </div>
    );
};

export default Details;