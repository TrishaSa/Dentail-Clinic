import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name, description, img, profession} = props.review
    return (
        <div className="col-md-6 col-12 my-2">
    <div className="review h-100">
    <div className="review-detail">
        <p>{description}</p>
      </div>
     <div className='review-body d-flex justify-content-evenly align-items-center'>
     <div className='img-container'>
     <img src={img} alt="..."/>
     </div>
     <div>
     <h3>{name}</h3>
     <h5 className='text-primary pt-2'>{profession}</h5>
     </div>
     </div>
    </div>
  </div>
    )
};

export default Review;