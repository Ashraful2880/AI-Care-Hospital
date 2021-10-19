import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    let {id}=useParams();
    const [details,setDetails]=useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Ashraful2880/Fake-Data-care-Hospital/main/services.json?token=AUVMTGW4AXQMFSPNCQ54P4DBNYT4Y')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])

    useEffect(()=>{
        const serviceDetail=details.find(detail=>detail.id===id)
        console.log(serviceDetail);
    },[details])
    return (
        <div>
            <h1>You are Clicking {id}</h1>
            <h1>This is details Page2</h1>
        </div>
    );
};

export default Details;