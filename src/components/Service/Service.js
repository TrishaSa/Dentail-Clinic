import React from 'react';
import './service.css'
import { Link } from "react-router-dom";

const Service = (props) => {
    const {id, name, description, img} = props.service
    const url = `/service/${id}`;

    return (
        <div className="col-lg-4 col-md-6 col-12 my-2">
    <div className="cart text-center">
     <div className='img-container'>
     <img src={img} alt="..."/>
     </div>
      <div className="cart-body">
        <h3 className='py-2'>{name}</h3>
        <p>{description.slice(0,150)}</p>
        <Link to = {url}>
        <button className='btn-more'>More Details</button>
        </Link>
      </div>
    </div>
  </div>

    );
};

export default Service;