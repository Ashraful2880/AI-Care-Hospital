import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './responsive.css';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('../fakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h2 className="text-4xl font-semibold text-blue-400 mt-6 mb-20">Our Quality Services</h2>
            <div  className="sm:block sm:w-full sm:mb-10 sm:border-6 sm:border-green-500 container mx-auto lg:grid lg:grid-cols-3 lg:gap-32 lg:mb-20">
                {
                    services.map(service=><Service key={service.id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;