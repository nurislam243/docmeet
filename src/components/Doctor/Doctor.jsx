import React from 'react';
import registration from '../../assets/Group (2).png';
import { Link } from 'react-router';
import { dayName } from '../../utility';

const Doctor = ({singleDoctor}) => {
    const {name, image, education, speciality, experience, registrationNumber, availability, id} = singleDoctor;

    const isAvailable = availability.includes(dayName());

    return (
        <div className="card group/all rounded-2xl p-3 @min-[330px]:p-8 bg-white hover:shadow-lg shadow-gray-700">
            <figure className='overflow-hidden rounded-2xl'>
                <img 
                    className='w-full h-[248px] rounded-2xl transition-transform duration-500 ease-in-out group-hover/all:scale-109' 
                    src={image} 
                    alt="" 
                />
            </figure>

            
            <div className="card-body p-0 pt-4">
                <div className="flex gap-2">
                    {
                        isAvailable ? <span className='rounded-[99px] flex justify-center items-center text-[#09982F] bg-[#E6F5EA] border border-[#BAE2C5] font-medium text-[14px] h-[30px] px-6 py-[18px]'>Available</span>: <span className='rounded-[99px] flex justify-center items-center text-red-500 bg-red-100 border border-red-200 font-medium text-[14px] h-[30px] px-6 py-[18px]'>Unavailable</span>
                    }
                    
                    <span className='rounded-[99px] flex justify-center items-center text-[#176AE5] bg-[#E8F0FC] border border-[#BED5F7] font-medium text-[14px] h-[30px] px-6 py-[18px]'>{experience}+ Years Experience</span>
                    
                </div>
                <h2 className="font-extrabold text-2xl dark-1 mt-4">
                    {name}
                </h2>
                <h3 className='font-medium dark-3 text-lg mt-3 mb-4'>{education} - {speciality}</h3>
                <hr className='border border-dashed border-[#E1E1E1] mb-4'/>
                <div className="flex items-center font-medium text-lg gap-3 dark-2">
                    <img className='h-6 w-6' src={registration} alt="" />
                    <h3>Reg No:  {registrationNumber}</h3>
                </div>
                <div className="mt-4">
                    <Link to={`doctorDetails/${id}`}>
                        <button className="relative w-full mt-auto text-center cursor-pointer font-bold text-xl px-5 py-3 rounded-[99px] border border-[#176AE5] text-[#176AE5] overflow-hidden group/btn">
                            <span className="absolute inset-0 w-full h-0 bg-[#305486] opacity-90 group-hover/btn:h-full transition-all duration-300 ease-in-out rounded-[99px]"></span>
                            <span className="relative group-hover/btn:text-white z-10">View Details</span>
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Doctor;