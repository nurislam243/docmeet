import React from 'react';
import { Link } from 'react-router';

const EmptyAppointment = () => {
    return (
        <div className="primary-bg text-center flex items-center">
            <div className='h-[calc(100vh-214px)] w-full rounded-3xl pt-[9vh]  sm:pt-[14vh] lg:pt-[19vh] bg-linear-to-b from-[#EFEFEF] to-[#FFFFFF] border-3 border-[#FFFFFF] px-2'>
                <h1 className='text-4xl font-bold dark-1 mb-12'>You Have not Booked any appointment yet</h1>
                <p className='dark-3 text-lg'>Our platform connects you with verified, experienced doctors across various specialities- all at your convenience.</p>
                <button className='primary-button mt-9'><Link to='/'>Book an Appointment</Link></button>
            </div>
        </div>
    );
};

export default EmptyAppointment;
