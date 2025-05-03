import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { Link } from 'react-router';


const Blog = ({singleData}) => {
    const { authorName, authorImage, publishedDate, title, details, image, category, id } = singleData;

    const shortDetails = details.slice(0, 120);
    return (
        <div className="flex flex-col group/all p-6 space-y-6 overflow-hidden rounded-2xl hover:shadow-lg shadow-gray-500 bg-white dark:text-gray-800">
            <div className="flex space-x-4 justify-between">
                <div className="flex gap-2 items-center">
                    <img alt="" src={authorImage} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <p rel="noopener noreferrer" className="text-sm font-semibold">{authorName}</p>
                </div>
            </div>
            <div>
                <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 transition-transform duration-500 ease-in-out group-hover/all:scale-109" />
                <p>{category}</p>
                <h2 className="mb-1 text-xl font-semibold">{title}</h2>
                <p className="text-sm dark:text-gray-600">
                    {shortDetails} ....
                </p>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="flex gap-1.5 items-center">
                    <p><CiCalendarDate size={20}/></p>
                    <p>{publishedDate}</p>
                </div>
                <div className="">
                    <Link to={`/blogDetails/${id}`} className='text-md cursor-pointer hover:text-[#305486] hover:border-b font-bold border-red-500 text-blue-700'>Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;