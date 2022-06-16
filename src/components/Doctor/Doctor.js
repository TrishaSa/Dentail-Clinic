import React from 'react';
import './Doctor.css'
const Doctor = (props) => {
    const {name, description, img, profession, fb, google, insta, twitter} = props.doctor
    return (
        <div className="col-lg-3 col-md-4 col-12 my-2 ">
        <div className="doctor h-100">
        <div className='img-container'>
         <img src={img} alt="..."/>
         </div>
         <div className="doctor-detail">
         <h4>{name}</h4>
         <h6 className='text-primary'>{profession}</h6>
         <p className='description'>{description.slice(0,150)}</p>
         <div className='icon-img'>
         <img src={fb} alt="" />
         <img src={google} alt="" />
         <img src={insta} alt="" />
         <img src={twitter} alt="" />
        </div>
         </div>
        </div>
      </div>
    );
};
export default Doctor;