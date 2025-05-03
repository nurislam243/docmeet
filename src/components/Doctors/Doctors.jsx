import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({data}) => {
    const [displayAppointments, setDisplayAppointments] = useState([]);
    const [viewAllDoctors, setViewAllDoctors] =useState(false);

    useEffect(() => {
        if(viewAllDoctors){
            setDisplayAppointments(data);
        }
        else{
            setDisplayAppointments(data.slice(0, 6))
        }
    }, [data, viewAllDoctors])

    return (
        <div className='@container'>           
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 px-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1550px]:px-[120px]  @min-[1750px]:px-[160px]">
                {
                    displayAppointments.map((singleDoctor)=><Doctor key={singleDoctor.id} singleDoctor={singleDoctor}></Doctor>)
                }
            </div>
            
            <div onClick={()=>{
                setViewAllDoctors(prv => !prv)
                if(viewAllDoctors) window.scrollTo(0, 900)
            }} className="flex justify-center mt-12">
                <button className='primary-button'>{viewAllDoctors ? "View Less Doctors" : "View All Doctors"}</button>
            </div>
        </div>
    );
};

export default Doctors;