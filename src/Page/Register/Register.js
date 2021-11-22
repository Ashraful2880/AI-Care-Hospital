import React from 'react';
import './Register.css';
import { Link, useHistory } from 'react-router-dom';
import registerImage from '../../Image/register.png';
import google from '../../Image/google.png';
import github from '../../Image/gtihub.png';
import useAuth from '../../Hooks/UseAuth';

const Register = () => {
    const{handleRegister,handleName,handleEmail,handlePassword,googleSignIn,gitHubSignIn,error,user,setError}=useAuth();
    let history=useHistory();
    return (
        <div className="mt-5 container mx-auto border-2 rounded-3 row">
            <h2 className="text-center text-info my-5">Please Register</h2>
            <div className="col-lg-6 col-md-12 col-sm-12 rounded-3 pt-4">
                <h1 className="text-start">AI Care Hospital</h1>
                <p className="fs-5 text-start pt-3 text-secondary">Health is the first step to prosperity
                Healthy does not mean expensive.</p>
                <p className="fs-5 text-start text-secondary">Better Care and Better Understanding.</p>
                <img className="w-100" src={registerImage} alt="RegisterImage" />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 rounded-3 reg-area mb-5 py-5">
                <div className="col-md-12 col-sm-12 col-lg-6 w-100">
                    <h2 className="text-info mb-5">Register For Appoint</h2>
                    <form onSubmit={handleRegister}>
                    {user.email?history.push('/home'):''}
                    {user.email?setError(''): <span className="text-warning">{error}</span> }
                        <div>
                            <input onBlur={handleName} className="reg-input w-75 p-3 my-2 border-0 border-bottom border-info" type="text" placeholder="Your Name" required/>
                        </div>
                        <div>
                            <input onBlur={handleEmail} className="reg-input w-75 p-3 my-2 border-0 border-bottom border-info" type="email" placeholder="Your Email" required/>
                        </div>
                        <div>
                            <input onBlur={handlePassword} className="reg-input w-75 p-3 my-2 border-0 border-bottom border-info" type="password" placeholder="Your Password" required/>
                        </div>
                        <div>
                            <input className="w-75 p-2 my-3 btn btn-info rounded-3" type="submit" value="Register" />
                        </div>
                        <div>
                        <h5 className="text-md">Already Registerd? 
                            <Link to="/login"> Login Here</Link>
                        </h5>
                        <p>Or</p>
                        </div>

                        <button onClick={googleSignIn} className="sign-btn btn btn-outline-info border border-info border-1">
                            <img style={{width:"35px"}} src={google} alt="googleImage" />
                               <span>Continue With Google</span>
                        </button>
                        <br />
                        <button onClick={gitHubSignIn} className="sign-btn btn btn-outline-info border border-info border-1 mt-2" >
                            <img style={{width:"65px"}} src={github} alt="googleImage" />
                            <span>Continue With GitHub</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;