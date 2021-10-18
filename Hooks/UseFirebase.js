import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();
const auth = getAuth();

const UseFirebase=()=>{
    const [displayEmail,setDisplayEmail]=useState('');
    const [displayPassword,setDisplayPassword]=useState('');
    const [error,setError]=useState('');

    const handleEmail=(event)=>{
        setDisplayEmail(event.target.value)
    }

    const handlePass=(event)=>{
        const userPass=(event.target.value);
            setDisplayPassword(userPass);
    }

    const newUser=(event)=>{
        event.preventDefault();
        createUserWithEmailAndPassword(auth, displayEmail, displayPassword)
        .then(result=>{
            const user=result.user;
            console.log("clicked");
        })
    }    
    return {handleEmail,handlePass,newUser,error}
}

export default UseFirebase;