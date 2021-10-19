import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './responsive.css';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h2 className="text-4xl font-semibold text-blue-400 mt-6 mb-20">Our Quality Services</h2>
            <div  className="services container mx-auto grid grid-cols-3 gap-32 mb-20">
                {
                    services.map(service=><Service key={service.id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;