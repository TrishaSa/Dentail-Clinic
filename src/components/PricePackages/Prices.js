import React, { useEffect, useState } from 'react';
import Price from './Price';

const Prices = () => {
    const [prices, setPrices] = useState([])
    useEffect(()=> {
            fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data))
        }, [])
        return (
            <div className='my-5 container-fluid'>
                <div className='my-4'>
                <h6 className='pt-3 text-primary'>Price &amp; Packages</h6>
               <h3>Qualified Dentist</h3>
                </div>
               <div className='container-fluid row'>
               {
                    prices.map(price =><Price 
                    key = {price.id}
                    price = {price}
                    ></Price> )
                }
               </div>
            </div>
    );
};

export default Prices;