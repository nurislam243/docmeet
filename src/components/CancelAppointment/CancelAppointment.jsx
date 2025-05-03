import React from 'react';

const CancelAppointment = ({singleAppointment, handleRemoveAppointment}) => {
    const {name, education, speciality, fee, id} = singleAppointment;

    return (
        <div className='bg-white rounded-2xl p-8'>
            <div className="flex justify-between items-center mb-4">
                <div className="">
                    <h2 className='font-bold text-xl mb-3 dark-1 '>{name}</h2>
                    <p className='font-medium text-lg dark-3'>{education} - {speciality}</p>
                </div>
                <div className="flex items-center">
                    <p className='text-lg font-medium dark-3 '>Appointment Fee : {fee} Taka + Vat</p>
                </div>
            </div>
            <hr className='border-t border-dashed border-[#CFCFCF]' />
            <button onClick={()=>handleRemoveAppointment(id)} className='w-full text-center border border-[#FF0000] text-[#FF0000] font-semibold text-xl px-5 py-3 rounded-[99px] cursor-pointer hover:bg-[#878e9a] mt-[18px]'>Cancel Appointment</button>
        </div>
    );
};

export default CancelAppointment;