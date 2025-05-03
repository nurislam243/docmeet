import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div className="primary-bg pt-2 pb-[111px] px-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1550px]:px-[120px]  @min-[1750px]:px-[160px]">
            <div className='w-full rounded-3xl min-h-[calc(100vh-214px)] bg-linear-to-b from-[#EFEFEF] to-[#FFFFFF] border-3 border-[#FFFFFF] p-3 sm:p-6'>
                <div className="text-center max-w-2xl mx-auto bg-white rounded-2xl py-[200px] pt-14">
                    <div className="avatar mb-4 md:mb-6">
                        <div className="w-24 rounded border border-blue-300 mx-auto">
                            {
                                user?.photoURL 
                                ? <img src={user.photoURL} alt="User Avatar" /> 
                                : <FaUserCircle size={131} className="flex justify-center items-center -ml-[18px] -mt-[18px]" />
                            }
                        </div>
                    </div>
                    <h3 className="leading-normal text-blueGray-700 mb-2">
                        <span className='font-bold mr-2'>Name:</span> {user?.displayName || "Guest User"}
                    </h3>
                    <div className="leading-normal mt-0 mb-2">
                        <h4>
                            <span className='font-bold mr-2'>Email:</span> {user?.email || "No email available"}
                        </h4>
                    </div>
                    <h3>
                        <span className='font-bold text-center mr-2'>Is Email Verified:</span> 
                        {user?.emailVerified ? "Yes" : "No"}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;
