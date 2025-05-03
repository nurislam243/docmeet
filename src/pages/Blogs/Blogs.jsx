import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../../components/Blog/Blog';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    const blogsData = useLoaderData();
    const [viewAllBlogs, setViewAllBlogs] =useState(false);
    const [displayBlogs, setDisplayBlogs] = useState([])
    
        useEffect(() => {
            if(viewAllBlogs){
                setDisplayBlogs(blogsData);
            }
            else{
                setDisplayBlogs(blogsData.slice(0, 6))
            }
        }, [blogsData, viewAllBlogs])
    return (
        <div className="px-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1550px]:px-[120px]  @min-[1750px]:px-[160px] pt-2 bg-[#EFEFEF] pb-[100px]">
            <Helmet>
                <title>Blogs | DocMeet</title>
            </Helmet>
            {/* Title */}

            <div className="primary-bg text-center flex items-center mb-[76px] w-full rounded-3xl bg-linear-to-b from-[#EFEFEF] to-[#FFFFFF] border-3 border-[#FFFFFF] p-4">
                <div className=" w-full">
                    <div className='w-full rounded-3xl pt-[25px] pb-[50px] lg:pt-[75px] lg:pb-[140px] bg-white/30 backdrop-invert backdrop-opacity-10'>
                        <div className="max-w-[1000px] mx-auto p-2">
                            <h2 className="text-2xl font-bold md:text-4xl dark-1 md:leading-tight">
                                Read our latest blogs
                            </h2>
                            <p className="mt-5 dark-2 text-lg">
                            We are dedicated to empowering you with trusted health tips, expert advice, and daily wellness inspiration. From nutrition and fitness to mental health and self-care, our expert-backed content helps you make informed choices for a healthier life. Whether you’re starting your wellness journey or looking to stay motivated, we’re here to guide you with practical tips and uplifting inspiration every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* End Title */}
            <div className="">
                <h1 className='dark-1 font-bold text-3xl text-center mb-7'>Blogs</h1>
                <div className="grid grid-cols-1 @min-[800px]:grid-cols-2 @min-[1400px]:grid-cols-3 gap-5">
                    {
                        displayBlogs.map((singleData)=><Blog key={singleData.id} singleData={singleData}></Blog>)
                    }
                </div>
            </div>

            <div onClick={()=>{
                setViewAllBlogs(prv => !prv)
                if(viewAllBlogs) window.scrollTo(0, 530)
            }} className="flex justify-center mt-12">
                <button className='primary-button'>{viewAllBlogs ? "View Less Blogs" : "View All Blogs"}</button>
            </div>
        </div>
    );
};

export default Blogs;