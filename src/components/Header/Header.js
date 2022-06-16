import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const {user, logOut} = useAuth()
    return (
      <div className="container-fliud row bg-dark py-3 ">
    <div className="nav-items col-lg-8 col-md-12 col-sm-12">
      <span>Navana Dental Clinic</span>
        <Link to='/home' className='link-item'>Home</Link>
        <Link to='/service' className='link-item'>Services</Link>
        <Link to='/about' className='link-item'>About Us</Link>
        <Link to='/price' className='link-item'>Price &amp; Packages</Link>
      </div>
     <div className='col-lg-4 col-md-12 col-sm-12 text-center'> 
              {
                  user.email && <span className='text-success pe-3'>Hello {user.displayName}</span>
              }
              {
                  user.email?
                  <button onClick={logOut}>Log out</button>
                  :
                   <Link to='/login' className='link-item pe-4'>Login</Link>
              }
        </div>
    </div>
    );
};

export default Header;