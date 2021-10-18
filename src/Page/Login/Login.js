import React from 'react';
import login from '../../Image/login.png';
import doctor from '../../Image/doctor.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="flex mt-4 border-0 shadow-2xl rounded-3xl w-8/12 mx-auto py-16">
                <div className="login-area w-6/12">
                    <div className="login-design border-2 w-96 mx-auto h-auto pb-10 rounded-3xl shadow-2xl mt-8">
                        <div>
                            <img src={doctor} alt="UserImage" />
                            <h1 className="text-2xl font-semibold font-mono leading-3 my-3">Please Login</h1>
                        </div>
                        <div>
                            <input className="p-3 w-80 my-3 border-blue-400 border-b-2 text-xl focus:outline-none"  type="email" placeholder="Your Email"/>
                        </div>
                        <div>
                            <input className="p-3 w-80 my-3 border-blue-400 border-b-2 text-xl focus:outline-none" type="password" placeholder="Your Password"/>
                        </div>
                        <div>
                            <input className="py-3 px-5 w-80 border-2 border-blue-400 rounded-3xl text-blue-400 bg-transparent hover:bg-blue-400 hover:text-white my-5" type="button" value="Login"/>
                        </div>
                        <div>
                            <h4>New User? <Link className="text-blue-400 font-semibold" to="/register">Please Register</Link></h4>
                        </div>
                    </div>
                </div>
                <div className="login-text w-6/12">
                <h3 className="text-3xl leading-3 mt-3">Welcome Back To</h3>
                <h1 className="text-blue-400 text-4xl font-semibold font-mono mt-8 leading-3 mb-5">AI Care Hospital</h1>
                    <img src={login} alt="LoginImage" />
                </div>
            </div>
        </div>
    );
};

export default Login;