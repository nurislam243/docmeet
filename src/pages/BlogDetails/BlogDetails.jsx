import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const BlogDetails = () => {
    const blogData = useLoaderData();
    const {id} = useParams();

    const blogDetails = blogData.find(singleBlogData => singleBlogData.id === id);
    console.log(blogDetails);
    const { authorName, authorImage, publishedDate, title, details, image, category, comments, readingTime} = blogDetails;

    return (
        <div className="bg-[#EFEFEF] pt-2 pb-[111px] px-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1550px]:px-[120px]  @min-[1750px]:px-[160px]">
            <div className='w-full rounded-3xl bg-linear-to-b from-[#EFEFEF] to-[#FFFFFF] border-3 border-[#FFFFFF] bg-white/30 backdrop-invert backdrop-opacity-50 p-3 sm:p-5 md:p-7 lg:p-10 xl:p-12 2xl:px-16 2xl:py-14'>
            <div className=" bg-white rounded-2xl">
                <img
                    src={image}
                    className="w-full rounded-tr-2xl rounded-tl-2xl h-[400px]"
                />
                <div className="p-6">
                    {/* Categories */}
                    <div className="flex gap-4 text-sm text-blue-600 mb-2">
                    {category.split(",").map((cat, index) => (
                        <span key={index} className="hover:underline cursor-pointer">
                        #{cat.trim()}
                        </span>
                    ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer">
                    {title}
                    </h2>

                    {/* Author and Date */}
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <img
                        src={authorImage}
                        alt={authorName}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-medium text-gray-700">{authorName}</span>
                    <span>•</span>
                    <span>{new Date(publishedDate).toLocaleDateString()}</span>
                    </div>

                    {/* Details */}
                    <p className="text-gray-600">
                        {details}
                    </p>

                    {/* Footer (views/comments) */}
                    <div className="flex items-center justify-between mt-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <span>👁 {readingTime}</span>
                            <span>💬 {comments}</span>
                        </div>
                        <Link to={'/blogs'} className="text-pink-500 hover:underline">Back to Blogs Page</Link>
                    </div>
                </div>
                </div>

            </div>
        </div>
        
    
    );
};

export default BlogDetails;