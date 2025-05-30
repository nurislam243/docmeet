import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';


const ProfileAvatar = () => {
    const {user, handleLogout} = useContext(AuthContext);
    return (
        <div className="flex gap-2">
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="" className="">
                <div className="cursor-pointer  rounded-full">
                    {
                        user.photoURL? <img className='rounded-full outline-2 outline-[#176AE5] h-10 sm:h-11 lg:h-12 2xl:h-[51px] w-10 sm:w-11 lg:w-12 2xl:w-[51px]' src={ user.photoURL } alt="" /> : <FaUserCircle size={50} />
                    }
                    
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content border-2 border-[#176AE5] shadow-4xl flex dark-2 font-medium text-lg rounded-box z-1 w-52 sm:w-[220px] lg:w-[230px] 2xl:w-[240px] bg-white mt-10 p-4 md:p-5 2xl:p-6">
                    
                <div className="mb-20px">
                    <div className="avatar flex items-center justify-center">
                        <div className="w-20">
                            {
                                user.photoURL ? <img className='border-2 rounded-full' src={ user?.photoURL } alt=""/> : <FaUserCircle size={80} />
                            }
                        </div>
                    </div>
                    <h3 className='text-center mt-1'>{user?.displayName}</h3>
                </div> 
                
                <hr className='border-t my-4 border-gray-300'/>
                <Link to={'/profile'} className="justify-between">
                    Profile
                </Link>
                <hr className='border-t my-4 border-dashed border-gray-300'/>
                <Link to={'/dashboard'}>Dashboard</Link>
                <hr className='border-t my-4 border-dashed border-gray-300'/>
                <Link to={'/setting'}>Settings</Link>

                <hr className='border-t my-4 border-gray-300'/>
                               
                <button onClick={handleLogout} className="px-5 py-2 cursor-pointer relative group border border-[#176AE5] overflow-hidden font-medium bg-transparent inline-block rounded-[99px]">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#305486] group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white w-full flex justify-center items-center gap-2">Logout <RiLogoutCircleRLine size={20} />
                    </span>
                </button>
            </ul>
            </div>
        </div>
    );
};

export default ProfileAvatar;