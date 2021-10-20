import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId}=useParams();
    return (
        <div>
           <h2>I am Details</h2>
           <h2>My Id is {serviceId}</h2>
        </div>
    );
};

export default Details;