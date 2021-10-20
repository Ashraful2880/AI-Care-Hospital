import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const {serviceId}=useParams();
    const [details, setDetails]=useState({})
    useEffect(() => {
    fetch('/fakeData.json')
    .then(res=>res.json())
    .then(data=>{
    const p=data.find(p=>p.id==serviceId)
    setDetails(p)
    })},[serviceId]);
    return (
        <div>
            <h1 className="text-blue-400 lg:text-4xl sm:text-3xl font-semibold">Are You Want This Service?</h1>
            <div className="mt-20 lg:grid lg:grid-cols-2 sm:block sm:w-full container mx-auto">
           <div>
               <img src={details.url} alt="" />
           </div>
           <div>
               <h1 className="text-blue-500 text-3xl font-semibold text-left">Service Name: {details.name}</h1>
               <h1 className="text-blue-400 text-2xl font-semibold text-left">Details About This Service</h1>
               <h2 className="text-green-600 text-xl font-semibold text-left">Doctor Name: {details.doctor}</h2>
               <h1 className="text-red-600 text-xl font-semibold text-left">Total Cost: {details.cost}$</h1>
               <p className="text-xl text-left mt-9">{details.description}</p>
               <button className="text-xl bg-blue-400 px-2 py-2 text-white rounded-md w-40 mr-20 mt-20">Confirm Service</button>
               <Link to="/home" className="text-xl bg-blue-400 px-2 py-2 text-white rounded-md w-40">Back To Home</Link>
           </div>
           
        </div>
        </div>
       
    );
};

export default Details;