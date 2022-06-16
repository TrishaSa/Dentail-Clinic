import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=> {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className='container-fluid'>
           <h3 className='my-3 pt-5 text-center'>Happy Customers</h3>
           <div className='container-fluid row'>
           {
                reviews.map(review =><Review 
                key = {review.id}
                review = {review}
                ></Review> )
            }
           </div>
        </div>
    );
};

export default CustomerReview;