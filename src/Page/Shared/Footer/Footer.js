import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Image/logo2.png'

const Footer = () => {
    return (
        <div>
            <div>
                <div className="bg-black py-10">
                    <div className=" w-72 mx-auto mb-5">
                        <img className="w-72" src={logo} alt="mainLogo" />
                    </div>
                    <div>
                        <i class="text-white bg-blue-400 px-2 py-1 mx-2 rounded-full hover:bg-white hover:text-blue-500 text-xl transition transform hover:-translate-y-1 fab fa-facebook">

                        </i>
                        <i class="text-white bg-blue-400 px-2 py-1 mx-2 rounded-full hover:bg-white hover:text-blue-500 text-xl transition transform hover:-translate-y-1 fab fa-twitter">

                        </i>
                        <i class="text-white bg-blue-400 px-2 py-1 mx-2 rounded-full hover:bg-white hover:text-blue-500 text-xl transition transform hover:-translate-y-1 fab fa-instagram">

                        </i>
                        <i class="text-white bg-blue-400 px-2 py-1 mx-2 rounded-full hover:bg-white hover:text-blue-500 text-xl transition transform hover:-translate-y-1 fab fa-linkedin-in">

                        </i>
                        <i class="text-white bg-blue-400 px-2 py-1 mx-2 rounded-full hover:bg-white hover:text-blue-500 text-xl transition transform hover:-translate-y-1 fab fa-google-plus-g">

                        </i>
                    </div>
                    <div className="mt-5">
                        <Link className="text-white mr-3 border-r-2 pr-3" to="appointment">Appointment</Link>
                        <Link className="text-white mr-3 border-r-2 pr-3" to="register">Register</Link>
                        <Link className="text-white mr-3 pr-3" to="login">Login</Link>
                    </div>
                </div>
                <div className="bg-blue-400 py-5">
                    <p className="text-white text-xl">Copyright &copy; 2021-All Rights Reserved-www.ashrafulislambd.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;