import React from 'react';
import sideImage from '../../images/dental-office-burnaby-in-burnaby.jpg'
import CustomerReview from '../CustomerReview/CustomerReview';
import './About.css'
const About = () => {
    return (
        <>
        <div className='about py-4'>
            <h3 className='pb-3 text-center'>About Us</h3> 
            <div className='container-fluid row'>
                <div className='col-lg-6 col-12'>
                    <img src={sideImage} className="img-fluid" alt="" />
                </div>
                <div className='col-lg-6 col-12 '>
                    <div className='about-details mt-5'>
                    <p className='text-primary'><small>WELCOME TO OUR DENTAL CLINIC</small></p>
                    <h5>
                    Toothcare is a Dental Clinic and <br/>Innovative Approach to Treatment
                    </h5>
                    <p className='my-4'>
                    Since 1990 we have provided patients with the best dental care treatments & our team of highly skilled dentist specialists & also equipped to provide a complete range of treatments.                    </p>
                    <p>
                    Dentures actually improve our smiles and overall apperance. Not only they make us look better, but also make our life easier. Enjoy simple things as food, conversation and smile. Forget about uncomfortable social encounters. Our focus is on your overall well being and helping you achieve optimal health and esthetics.                    </p>
                    </div>
                </div>
                </div> 
        </div>
        <CustomerReview></CustomerReview>          
        </>
    );
};

export default About;