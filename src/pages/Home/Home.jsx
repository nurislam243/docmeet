import React from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../../components/Doctors/Doctors';
import { useLoaderData } from 'react-router';
import SuccessCard from '../../components/SuccessCard/SuccessCard';
import successDoctorsLogo from '../../assets/success-doctor.png'
import successReviewLogo from '../../assets/success-review.png'
import successPatientsLogo from '../../assets/success-patients.png'
import successStaffsLogo from '../../assets/success-staffs.png'
import { Helmet } from 'react-helmet-async';
import FAQ from '../../components/ui/FAQ/FAQ';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Home | DocMeet</title>
            </Helmet>
            <Banner></Banner>           
            <div className="bg-[#EFEFEF] py-[80px]">
                <div className="text-center mb-8">
                    <h1 className='font-extrabold text-[40px] text-[#0F0F0F]'>Our Best Doctors</h1>
                    <p className='leading-6 dark-1 mx-1 mt-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                <Doctors data={data}></Doctors>

                <div className="mt-20">
                    <div className="text-center">
                        <h1 className='font-extrabold text-[40px] text-[#0F0F0F] mb-4'>We Provide Best Medical Services</h1>
                        <p className='text-[#0F0F0F] mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 px-6 sm:px-[68px] md:px-[50px] lg:px-[70px] xl:px-[60px] 2xl:px-[160px]">
                        <SuccessCard successImg={successDoctorsLogo} number='199' cardName='Total Doctors'></SuccessCard>
                        <SuccessCard successImg={successReviewLogo} number='467' cardName='Total Doctors'></SuccessCard>
                        <SuccessCard successImg={successPatientsLogo} number='1900' cardName='Patients'></SuccessCard>
                        <SuccessCard successImg={successStaffsLogo} number='300' cardName='Total Stuffs'></SuccessCard>
                    </div>
                </div>
            </div>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;