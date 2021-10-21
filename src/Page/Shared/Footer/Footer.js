import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../../Image/logo2.png'

const Footer = () => {
    return (
        <div>
            <div>
                <div className="bg-dark py-5">
                    <div className="w-75 mx-auto mb-5">
                        <img src={logo} alt="mainLogo" />
                    </div>
                    <div className="social-area">
                        <i className="text-white bg-primary p-2 mx-2 rounded-circle fs-3 fab fa-facebook">
                        </i>
                        <i className="text-white bg-primary mx-2 rounded-circle fs-3 fab fa-twitter">
                        </i>
                        <i className="text-white bg-primary mx-2 rounded-circle fs-3 fab fa-instagram">
                        </i>
                        <i className="text-white bg-primary mx-2 rounded-circle fs-3 fab fa-linkedin-in">
                        </i>
                        <i className=" text-white bg-primary mx-2 rounded-circle fs-3 fab fa-google-plus-g">
                        </i>
                    </div>
                    <div className="mt-5">
                        <Link className="text-white fs-5 me-3 pe-3 border-3 border-end" to="appointment">Appointment</Link>
                        <Link className="text-white fs-5 me-3 pe-3 border-3 border-end" to="register">Register</Link>
                        <Link className="text-white fs-5 me-3 pe-3" to="login">Login</Link>
                    </div>
                </div>
                <div className="bg-secondary py-5">
                    <p className="text-white fs-5">Copyright &copy; 2021-All Rights Reserved- <Link className="text-warning fs-5" to="https://www.ashrafulislambd.com">ashrafulislambd.com</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;