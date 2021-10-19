import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Image/logo.png'

const Header = () => {
    return (
        <div className='relative'>
            <div className="container m-auto flex justify-between py-2 ">
                <div className="main-logo">
                    <Link to="/home"><img className="w-16" src={logo} alt="main-logo" /></Link>
                </div>
                <div className="flex justify-center items-center menu-area">
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/home">
                        Home
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/about">
                        About
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/Services">
                        Services
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/details">
                        Details
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/appointment">
                    Appointment
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/register">
                        Register
                    </Link>
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/home">
                        Logout
                    </Link>:
                    <Link className="rounded-md mr-5 p-3 text-blue-400 text-xl font-semibold hover:bg-blue-400 hover:text-white transition duration-500 ease-in-out" to="/login">
                        Login
                    </Link>
                </div>
            </div>
            <hr />
        </div>     
    );
};

export default Header;