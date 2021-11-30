import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../../Image/logo2.png';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <>
            <Fade bottom>
            <div className="bg-dark pt-5">
                <div className="mx-auto mb-3 w-25">
                    <img className="w-50" src={logo} alt="mainLogo"/>
                </div>
                <div className="social-area">
                    <i className="text-white bg-primary mx-2 rounded-circle fs-5 fab fa-facebook">
                    </i>
                    <i className="text-white bg-primary mx-2 rounded-circle fs-5 fab fa-twitter">
                    </i>
                    <i className="text-white bg-primary mx-2 rounded-circle fs-5 fab fa-instagram">
                    </i>
                    <i className="text-white bg-primary mx-2 rounded-circle fs-5 fab fa-linkedin-in">
                    </i>
                    <i className="text-white bg-primary mx-2 rounded-circle fs-5 fab fa-google-plus-g">
                    </i>
                </div>
                <div className="py-3">
                    <Link className="text-white me-3 pe-3 border-3 border-end" to="/appointment">Appointment</Link>
                    <Link className="text-white me-3 pe-3 border-3 border-end" to="/register">Register</Link>
                    <Link className="text-white me-3 pe-3" to="/login">Login</Link>
                </div>
                <p className="text-white pb-4">Copyright &copy; 2021-All Rights Reserved- <Link className="text-warning fs-5" to="https://www.ashrafulislambd.com">ashrafulislambd.com</Link></p>
            </div>
            </Fade>
        </>
    );
};

export default Footer;