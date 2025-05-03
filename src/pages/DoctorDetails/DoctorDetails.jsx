import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DoctorDetailsContent from '../../components/DoctorDetailsContent/DoctorDetailsContent';
import Error2 from '../../components/ui/Error2';



const DoctorDetails = () => {   
    const {id} = useParams();
    const data = useLoaderData();
    const singleDoctor = data.find(doctor => doctor.id===id);
    return (
        <div className="">
            {
                !singleDoctor ? <Error2 id={id}></Error2> : <DoctorDetailsContent singleDoctor={singleDoctor} ></DoctorDetailsContent>
            }
        </div>
    );
};

export default DoctorDetails;