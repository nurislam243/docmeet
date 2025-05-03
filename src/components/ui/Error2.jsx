import React from 'react';
import { Link } from 'react-router';
import { FaPlusCircle } from "react-icons/fa";

const Error2 = ({id}) => {
    return (
        <div className="bg-[#EFEFEF] pt-2 pb-[111px] px-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1550px]:px-[120px]  @min-[1750px]:px-[160px]">
            <div className="primary-bg text-center flex items-center">
                <div className='h-[calc(100vh-214px)] w-full px-2 rounded-3xl pt-[19vh] bg-linear-to-b from-[#EFEFEF] to-[#FFFFFF] border-3 border-[#FFFFFF]'>
                    <h1 className='text-3xl sm:text-5xl font-bold dark-1 mb-12'>No Doctor Found!!</h1>
                    <p className='dark-3 text-xl'>
                        No Doctor Found With this ID Number_
                    </p>
                    <h3 className='text-center flex justify-center items-center gap-2 font-extrabold mt-7 text-2xl'><FaPlusCircle size={32}/>{id}
                    </h3>
                    <button className='primary-button mt-9'><Link to='/'>Book an Appointment</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Error2;