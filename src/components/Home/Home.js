import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import DoctoreList from '../DoctorList/DoctoreList';
import Banner from '../Header/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='text-center'>
            <Banner></Banner>
            <Services></Services>
            <DoctoreList></DoctoreList>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;