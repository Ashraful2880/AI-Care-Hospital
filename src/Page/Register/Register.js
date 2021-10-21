import React from 'react';
import './Register.css';
import { Link, useHistory } from 'react-router-dom';
import registerImage from '../../Image/register.png';
import google from '../../Image/google.png';
import github from '../../Image/gtihub.png';
import useAuth from '../../Hooks/UseAuth';

const Register = () => {
    const{handleRegister,handleName,handleEmail,handlePassword,googleSignIn,gitHubSignIn,error,password,user,setError}=useAuth();
    let history=useHistory();
    return (
        <div>
            <div className="mt-5 container mx-auto border-2 rounded-3 row">
                <div className="col-lg-6 col-md-12 col-sm-12 reg-text rounded-3 pt-5">
                    <p className="fs-4 text-center pt-3">Health is the first step to prosperity
                    Healthy does not mean expensive.</p>
                    <p className="fs-4 text-center">Better Care and Better Understanding.</p>
                    <h1 className="text-info text-2 mt-3 text-center">AI Care Hospital</h1>
                    <img className="w-100" src={registerImage} alt="RegisterImage" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 rounded-3 reg-area py-5">
                    <div className="col-md-12 col-sm-12 col-lg-6 w-100">
                        <h1 className="text-info mb-5">Register For Appoint</h1>
                        <form onSubmit={handleRegister}>
                        {user.email?history.push('/home'):''}
                        {user.email?setError(''): <span className="text-warning">{error}</span> }
                            <div>
                                <input onBlur={handleName} className="reg-input w-75 p-3 my-3 border-0 border-bottom border-info" type="text" placeholder="Your Name" required/>
                            </div>
                            <div>
                                <input onBlur={handleEmail} className="reg-input w-75 p-3 my-3 border-0 border-bottom border-info" type="email" placeholder="Your Email" required/>
                            </div>
                            <div>
                                <input onBlur={handlePassword} className="reg-input w-75 p-3 my-3 border-0 border-bottom border-info" type="password" placeholder="Your Password" required/>
                            </div>
                            <div>
                                <input className="w-75 p-3 my-3 btn btn-info rounded-3" type="submit" value="Register" />
                            </div>
                            <div>
                            <h4 className="text-md">Already Registerd? <Link className="text-blue-400 font-semibold" to="/login">Login Here</Link></h4>
                            <p className="text-md font-semibold">Or</p>
                            </div>
                            <div className="mx-auto row">
                                <button onClick={googleSignIn} className="col-sm-12 d-flex border justify-content-around align-items-center sign-btn border border-info border-2">
                                    <img style={{width:"45px"}} src={google} alt="googleImage" />
                                    <h5>Continue With Google</h5>
                                </button>
                                <button onClick={gitHubSignIn} className=" d-flex border mt-3 justify-content-around align-items-center sign-btn border border-info border-2 col-sm-12" >
                                    <img style={{width:"75px"}} src={github} alt="googleImage" />
                                    <h5>Continue With GitHub</h5>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>














                {/* <div className="register-details px-1 border-info col-md-6 col-sm-12 col">                    
                    
                    
                </div>
                <div className="col-md-6 col-sm-12 col">
                    
                        
                </div> */}
            </div>
        </div>
    );
};

export default Register;