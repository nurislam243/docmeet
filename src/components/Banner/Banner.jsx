import React from 'react';
import bannerImg1 from '../../assets/banner-img-1.png';
import bannerImg2 from '../../assets/banner-img-2.png';

const Banner = () => {
    return (
        <div className="primary-bg p-2 px-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1536px]:px-[50px]">
            <section class="rounded-3xl pt-3 pb-7 sm:pt-[64px] sm:pb-[64px] bg-linear-to-b from-[#EFEFEF] to-[#FFFFFF] border-3 border-[#FFFFFF] 2xl:px-[160px]">
                <div class="mx-auto max-w-screen-xl text-center mb-6 p-4">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Dependable Care, Backed by Trusted Professionals.</h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-3 xl:px-5 dark:text-gray-400">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                    <div class="flex flex-col space-y-4 md:flex-row sm:justify-center md:space-y-0 sm:space-x-4 md:px-[90px] lg:px-[110px] xl:px-[160px] 2xl:px-[193px]">
                        <input type="text" placeholder="Search any Doctor" className="input rounded-[99px] px-5 py-5 w-full lg:w-[79%] bg-white border border-gray-300 outline-none h-[56px]" />
                        <button class="primary-button min-w-[178px] max-w-[179px] mx-auto">
                        Search Now
                        </button>  
                    </div>               
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 sm:px-4 md:px-5 2xl:px-0">
                    <img className='w-full max-h-[390px] rounded-xl md:max-h-[357px]' src={bannerImg1} alt="" />
                    <img className='w-full max-h-[390px] rounded-xl md:max-h-[357px]' src={bannerImg2} alt="" />
                </div> 
            </section>
        </div>
    );
};

export default Banner;