import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import './Header.css';
import logo from '../../../Image/logo.png';

const Header = () => {
    const{user,handleSignOut}=useAuth();
    return (
          <nav className="navbar fixed-top navbar-expand-lg navbar-light nav-bg">
            <div className="container">
              <Link className="navbar-brand" to="/home"><img className="logo" src={logo} alt="main-logo"/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav justify-content-end w-100 me-5">
                  <li className="nav-item">
                      <Link className="nav-link text-light fs-4" to="/home"> Home </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-light fs-4" to="/about"> About </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-light fs-4" to="/services"> Service </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-light fs-4" to="/appointment"> Appointment</Link>
                  </li>
                  {!user.email?<li className="nav-item">
                      <Link className="nav-link text-light fs-4" to="/register"> Register </Link>                      
                  </li>:""}
                  <li className="nav-item">
                  {user.email? <img className="user-image rounded-circle" src={user.photoURL} alt="UserPhoto" /> :""}
                      {user.email?<span className="text-dark fs-5 userName">{user.displayName}</span>:""}                      
                  </li>
                  {user.email?<li className="nav-item">
                      <Link onClick={handleSignOut} className="nav-link text-light fs-4" to="/home">Logout</Link>
                  </li>:
                  <li className="nav-item">
                      <Link className="nav-link text-light fs-4" to="/login">Login</Link>
                  </li>}
                </ul>
              </div>
            </div>
          </nav>          
    );
};

export default Header;