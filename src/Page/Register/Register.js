import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import registerImage from '../../Image/register.png';
import google from '../../Image/google.png';
import github from '../../Image/gtihub.png';
import authenticationFirebase from '../Firebase/Firebase.init';
import {getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword } from "firebase/auth";

authenticationFirebase();
const auth = getAuth();

const Register = () => {
    const googleProvider = new GoogleAuthProvider();

    const [googleUser,setGoogleUser]=useState({});
    const [error,setError]=useState(" ");
    const [email,setEmail]=useState(" ");
    const [password,setPassword]=useState(" ");
    const [user,setUser]=useState("");

        //<----------- Handle Google Sign In ---------->

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setGoogleUser(result.user);
        }).catch(error=>{
            console.log(Error.message);
        })
    }
    
    //<------------- handle Create New User With Email & Password ------------->

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    };

    const handlePassword=(e)=>{
        setPassword(e.target.value)
    };

    const handleRegister=(e)=>{
        e.preventDefault();
        if(password<6){
            setError("Password Should Be 6 Characters+")
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user);
          }).catch((error) => {
            setError(error.message)
          });
    }

    return (
        <div>
            <div className="container flex w-8/12 mx-auto my-10 border-2 p-10 rounded-lg shadow-2xl">
                <div className="register-details w-6/12 px-1 border-blue-200 border-r-2">                    
                    <p className="text-xl text-left tracking-tight leading-7 font-sans ">Health is the first step to prosperity
                    Healthy does not mean expensive.</p>
                    <p className="text-xl text-left tracking-tight leading-7">Better Care and Better Understanding.</p>
                    <h1 className="text-blue-400 text-4xl font-semibold font-mono text-left mt-8">AI Care Hospital</h1>
                    <img src={registerImage} alt="RegisterImage" />
                </div>
                <div className="register-input w-6/12">
                    <h1 className="text-blue-400 text-3xl font-semibold mb-9">Register For Appoint</h1>
                   
                    <form onSubmit={handleRegister}>
                        <div>
                            <input className="p-3 w-96 my-3 border-blue-400 border-b-2 text-xl focus:outline-none" type="text" placeholder="Your Name" />
                        </div>
                        <div>
                            <input onBlur={handleEmail} className="p-3 w-96 my-3 border-blue-400 border-b-2 text-xl focus:outline-none" type="email" placeholder="Your Email" required/>
                        </div>
                        <div>
                            <input onBlur={handlePassword} className="p-3 w-96 my-3 border-blue-400 border-b-2 text-xl focus:outline-none" type="password" placeholder="Your Password" required/>
                        </div>
                        <div>
                            <input className="py-3 px-5 w-40 border-2 border-blue-400 rounded-3xl text-blue-400 bg-transparent hover:bg-blue-400 hover:text-white my-5" type="submit" value="Register" />
                        </div>
                    </form>
                        <div>
                            <h4 className="text-md">Already Registerd? <Link className="text-blue-400 font-semibold" to="/login">Login Here</Link></h4>
                            <p className="text-md font-semibold">Or</p>
                        </div>
                        <div>
                            <button onClick={handleGoogleSignIn} className="flex justify-center border-blue-300 border-2 w-60 rounded-3xl mx-auto mt-3 cursor-pointer">
                                <img className="w-10" src={google} alt="googleimag" />
                                <h3 className="mt-2 ml-4">Continue With Google</h3>
                            </button>
                        </div>
                        <div>
                            <button  className="flex justify-center border-blue-300 border-2 w-60 rounded-3xl mx-auto mt-3 py-2 cursor-pointer">
                            <img className="w-10" src={github} alt="googleimag" />
                            <h3 className="ml-4">Continue With Github</h3>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Register;