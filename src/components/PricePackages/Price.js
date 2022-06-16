import React from 'react';

const Price = (props) => {
    const {name, price, package1, package2, package3, package4, package5, package6} = props.price
    return (
        <div className="col-lg-3 col-md-6 col-12 my-2">
        <div className="doctor">
         <div className="doctor-detail">
         <h3>{name}</h3>
         <h4 className='text-primary'>{price}</h4>
         <div className='icon-img'>
            <h6>{package1}</h6>
            <h6>{package2}</h6>
            <h6>{package3}</h6>
            <h6>{package4}</h6>
            <h6>{package5}</h6>
            <h6>{package6}</h6>
        </div>
         </div>
        </div>
      </div>
    );
};

export default Price;