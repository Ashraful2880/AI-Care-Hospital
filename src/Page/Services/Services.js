import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('../fakeData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div  className="container mx-auto row mt-5">
            <h2 className="text-info my-5 fw-bold">Our Quality Services</h2>
                {
                    services.map(service=><Service key={service.id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;