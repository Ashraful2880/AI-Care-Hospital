import React from 'react';
import './Login.css';
import login from '../../Image/login.png';
import doctor from '../../Image/doctor.png'
import { Link , useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
const Login = () => {

    const{handleSignIn,handleEmail,handlePassword,user,error,setError}=useAuth();
    let history=useHistory();
    return (
        <div className="container pt-5">
            <h2 className="text-info pt-5">Plesae Login</h2>
            <div className="row my-5">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <form onSubmit={handleSignIn} className="login-design w-100 mx-auto h-auto pb-4 rounded-3">
                        <div>
                            <img className="w-75" src={doctor} alt="UserImage" />
                            <h1 className="fs-2 my-3 fw-bold">Please Log in</h1>
                            {user.email?setError(""): <span className="text-danger">{error}</span> }
                        </div>
                        <div>
                            <input onBlur={handleEmail} className="login-input p-2 w-75 my-2 border-0 border-bottom border-info"  type="email" placeholder="Your Email" />
                        </div>
                        <div>
                            <input onBlur={handlePassword} className="login-input p-2 w-75 my-2 border-0 border-bottom border-info" type="password" placeholder="Your Password" />
                        </div>
                        <div>
                            {user.email?history.push('/home'):''}
                            <input className="p-2 w-75 my-3 btn btn-info" type="submit" value="Login"/>
                        </div>
                        <div>
                            <h5>New User? <Link to="/register">Please Register</Link></h5>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="login-text border-2 w-100 mx-auto h-auto pb-5 rounded-3">
                        <h2 className="fs-2 pt-5 fw-bold" style={{fontFamily:'cursive'}}>Welcome Back To</h2>
                        <h1 className="text-info">AI Care Hospital</h1>
                        <h4 className="text-info mb-5">We Care About You</h4>
                        <img className="w-100" src={login} alt="LoginImage" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;