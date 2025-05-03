import React from 'react';
import CountUp from 'react-countup';

const SuccessCard = ({successImg, number, cardName}) => {
    return (
        <div className='bg-white rounded-2xl px-12 py-10'>
            <img className='mb-4' src={successImg} alt="" />
            <h1 className='font-extrabold text-[64px] mb-3 text-[#0F0F0F]'>
                <CountUp start={0} end={number} enableScrollSpy duration={4} suffix="+" />
            </h1>
            <h4 className='font-semibold text-[#0F0F0F] text-2xl'>{cardName}</h4>
        </div>
    );
};

export default SuccessCard;