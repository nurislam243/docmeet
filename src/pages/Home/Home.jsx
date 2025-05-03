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
            <div className="bg-[#EFEFEF] py-[80px] @container">
                <div className="text-center mb-8 @min-[400px]:px-7 @min-[630px]:px-12">
                    <h1 className='font-extrabold text-[40px] text-[#0F0F0F]'>Our Best Doctors</h1>
                    <p className='leading-6 dark-1 mx-1 mt-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                <Doctors data={data}></Doctors>

                <div className="mt-20 @container">
                    <div className="text-center @min-[400px]:px-7 @min-[630px]:px-12">
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
            {/* FAQ section */}
            <div className="mt-4 bg-[#EFEFEF] pt-2 pb-[111px] px-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1550px]:px-[120px]  @min-[1750px]:px-[160px]">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col group/all p-6 space-y-6 overflow-hidden rounded-2xl bg-white dark:text-gray-800">
                    <div className="flex space-x-4 justify-between">
                        <FAQ></FAQ>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;