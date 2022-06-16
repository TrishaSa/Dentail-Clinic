import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
            <div className='footer pt-5 mt-5 container-fluid'>
                <div className='row container-fluid ms-2'>
                    <div className='col-md-3'>
                    <div class="app-container">
                        <div class="col-md-6">
                            <img class="w-75" src="/static/media/logon.ca069059.png" alt=""/>
                            </div>
                            <div class="col-md-6 ms-5">
                                <h3>Navana Dental Clinic</h3>
                                <p>Best Dental care Service For Your Family</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <h5>Contact Details</h5>
                        <p>Jl. Raya Kuta No.70, Kuta</p>
                        <p>support@domain.com</p>
                        <p>8 AM - 5 PM , Monday - Saturday</p>
                        <p>(+021) 2336 278</p>
                    </div>
                    <div class="col-md-3">
                        <h5>Other Pages</h5>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Services</p>
                        <p>Login</p>
                     </div>
                    <div class="col-md-3">
                        <h5>Make Appointment</h5>
                        <p>call us.</p>
                        <p>(+021) 2336 278</p>
                     </div>               
                 </div>
                 <hr/>
                 <div class="row">
                    <div class="col-md-6">
                        <p>Life Motion Clinic by Trisha Saha</p>
                        </div>
                        <div class="col-md-6">
                            <p>Copyright © 2021 All rights reserved.</p>
                    </div>
                </div>
            </div>
    );
};

export default Footer;
