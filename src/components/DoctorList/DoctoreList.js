import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const DoctoreList = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=> {
            fetch('docters.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
        }, [])
        return (
            <div className='my-5 container-fluid'>
                <div className='my-4'>
                <h6 className='pt-3 text-primary'>OUR DOCTORS</h6>
               <h3>Qualified Dentist</h3>
                </div>
               <div className='container-fluid row'>
               {
                    doctors.map(doctor =><Doctor 
                    key = {doctor.id}
                    doctor = {doctor}
                    ></Doctor> )
                }
               </div>
            </div>
    );
};

export default DoctoreList;