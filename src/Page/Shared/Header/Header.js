import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import logo from '../../../Image/logo.png'

const Header = () => {
    const{handleSignOut,user}=useAuth();
    return (
        <div className='relative'>
            <div className="container m-auto flex justify-between py-2">
                <div className="main-logo">
                    <Link to="/home"><img className="w-16" src={logo} alt="main-logo" /></Link>
                </div>
                <div className="flex justify-center items-center">
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/home">
                        Home
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/about">
                        About
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/Services">
                        Services
                    </Link>
                    {/* <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/details">
                        Details
                    </Link> */}
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/appointment">
                    Appointment
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/register">
                        Register
                    </Link>
                    {user.email?<Link onClick={handleSignOut} className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/home">
                        Logout
                    </Link>
                    :<Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/login">
                        Login
                    </Link>
                    }
                    {
                        user.email?<h1 className="text-blue-600 text-xl font-semibold"><img className="w-10 rounded-full inline" src={user.photoURL} alt="" /> {user.displayName}</h1>: ""
                    }
                </div>
            </div>
            <hr />
        </div>     
    );
};

export default Header;