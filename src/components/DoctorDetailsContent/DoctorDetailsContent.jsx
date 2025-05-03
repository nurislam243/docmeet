import React from 'react';
import registrationLogo from '../../assets/Group (2).png'
import frame2 from '../../assets/Frame (2).png'
import { addAppointment, dayName } from '../../utility';
import { Navigate, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet-async';

const DoctorDetailsContent = ({singleDoctor}) => {
    const navigate = useNavigate();
    const {name, image, education, registrationNumber, speciality, workplace, availability, fee, slogan, designation} = singleDoctor;

    const isAvailable = availability.includes(dayName());

    const handleAppointment = (doctor) =>{
        const success = addAppointment(doctor);
        if(success){
         navigate('/myBookings');
        }
     }

    return (
        <div className='pt-[32px] pb-[78px] bg-[#EFEFEF] px-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1550px]:px-[120px]  @min-[1750px]:px-[160px]'>
            <Helmet>
                <title>{singleDoctor?.name ? `${singleDoctor.name} | Phudu` : "Doctor Details | DocMeet"}</title>
            </Helmet>
            <div className="text-center rounded-3xl bg-white py-[72px] px-3 lg:px-[50px] 2xl:px-[126px] mb-[33px]">
                <h2 className='font-extrabold mb-4 text-[32px] text-[#141414]'>Doctor’s Profile Details</h2>
                <p className='font-medium dark-2 text-lg leading-[28px]'>
                    <span className='font-bold dark-1'>{name}</span> is a compassionate and highly experienced <span className='font-bold dark-1'>{speciality}</span> committed to providing personalized care. 
                    {slogan && <span className="block my-2 font-bold dark-1">"{slogan}"</span>} 
                    He believes in patient education and early prevention. With modern diagnostic tools and evidence-based treatment, he ensures each patient receives the best possible outcome.
                </p>

            </div>

            <div className="bg-white rounded-3xl mt-[32px] mb-[24px] p-3 @min-[350px]:p-[24px] @min-[400px]:p-[38px] @min-[600px]:p-[80px] @min-[760px]:p-7 @min-[900px]:p-14">
                <div className="flex flex-col @min-[760px]:flex-row gap-6">
                    <div className="flex-1/2 lg:flex-1">
                        <img src={image} className="rounded-[14px] h-[300px] @min-[450px]:h-[430px] w-full @min-[760px]:w-[375px]"/>
                    </div>
                    <div className='lg:flex-2 mx-[10px]'>
                        <h1 className="text-[32px] font-extrabold text-[#0F0F0F] mb-4">{name}</h1>
                        <div className="font-medium leading-[30px] text-lg dark-3">
                            <h4 className="">
                                {education}
                            </h4>
                            <h4>{speciality}</h4>
                        </div>
                        <div className="mt-4">
                            <h4 className='font-medium text-xl dark-3 '>Working at</h4>
                            <h3 className='font-bold text-xl dark-1 leading-10'>{workplace}</h3>
                            <p className='text-gray-500'>{designation}</p>
                        </div>
                        <hr className='my-4  border-t border-[#CFCFCF] border-dashed'/>
                        <h4 className='flex gap-3'>
                            <img className='h-6 w-6' src={registrationLogo} alt="" />
                            Reg No: { registrationNumber}
                        </h4>
                        <hr className='mt-4 mb-6 border-t border-[#CFCFCF] border-dashed'/>
                        <div className="sm:flex space-y-2 sm:space-y-0 font-bold dark-1 mb-4">
                            <h3 className=''><span className='mr-3 text-lg'>Availability:</span>
                            </h3>
                            <h3 className='@min-[370px]:flex space-y-2 gap-x-2 text-center'>
                                {
                                    availability.map((day, index)=> <p  key={index} className='text-[#FFA000] text-[14px] font-medium border border-[#ffa00033] bg-[#ffa0001a] flex justify-center items-center px-[14px] py-[7px] rounded-[99px] max-h-[37px]'>{day}</p>)
                                }
                            </h3>
                        </div>
                        <div className="">
                            <h3>
                                <span className='mr-4 font-extrabold text-lg dark-1'>Consultation Fee: </span>
                                <span className='font-bold text-[#176AE5] text-lg mr-2 '>Taka: {fee}</span> <span className='text-gray-500 text-lg mr-2'>(incl.Vat)</span>
                                <span className='text-[#176AE5] text-lg'>Per consultation</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-white rounded-3xl px-4 md:px-8 pt-5 lg:pt-7 2xl:pt-10 pb-6 lg:pb-9 2xl:pb-14">
                <h1 className='text-[#141414] text-2xl  font-extrabold mb-4 text-center'>Book an Appointment</h1>
                <hr className='my-4  border-t border-[#CFCFCF] border-dashed'/>
                <div className="sm:flex space-y-2 sm:justify-between items-center">
                    <h3 className='font-bold text-lg dark-1'>Availability</h3>
                    {
                        isAvailable 
                            ? <span className='text-[#09982F] text-[14px] font-medium border border-[#BAE2C5] bg-[#E6F5EA] px-[14px] py-[7px] rounded-[99px]'>Doctor Available Today</span>
                            : <span className='text-red-500 text-[14px] font-medium border border-red-200 bg-red-100 px-[14px] py-[7px] rounded-[99px]'>Doctor is unavailable today</span>
                    }

                </div>
                <hr className='my-4  border-t border-[#CFCFCF]'/>                                  
                <div className="pt-3">
                    <span className='text-[#FFA000] font-medium bg-[#ffa0001a] px-4 py-[7px] rounded-[99px]'>
                        <img className='inline -mt-1 mr-2' src={frame2} alt="" />
                        Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                    </span>
                </div>
                <div className="sm:px-6 mt-10">
                    <button onClick={()=>handleAppointment(singleDoctor)} className=' primary-button w-full'><span className='hidden @min-[360px]:block'>Book Appointment Now</span><span className='@min-[360px]:hidden'>Book Now</span></button>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetailsContent;