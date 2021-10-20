import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import logo from '../../../Image/logo.png';
import '../../Services/responsive.css';

const Header = () => {
    const{user,handleSignOut}=useAuth();
    return (
        <div className='relative'>
            <div className="container m-auto lg:flex lg:justify-between py-2">
                <div className="main-logo sm:block">
                    <Link to="/home"><img className="w-16" src={logo} alt="main-logo"/></Link>
                </div>
                <div className="lg:flex lg:justify-center lg:items-center sm:grid sm:grid-cols-2">
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/home">
                        Home
                    </Link>
                    <Link className=" rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/about">
                        About
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/Services">
                        Services
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to={`/details/id`}>
                        Details
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/appointment">
                    Appointment
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/register">
                        Register
                    </Link>
                    {user.email? <img className="w-8 h-8 mr-6 rounded-full" src={user.photoURL} alt="" /> :""}
                    {user.email?<span className="text-xl font-semibold text-blue-700 mr-6">{user.displayName}</span>:""}
                    {user.email? <Link onClick={handleSignOut} className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/home">
                        Logout
                    </Link>:
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/login">
                        Login
                    </Link>}
                </div>
            </div>
            <hr />
        </div>     
    );
};

export default Header;