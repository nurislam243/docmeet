import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from '../../contexts/AuthContext';
import ProfileAvatar from '../ui/ProfileAvatar/ProfileAvatar';
import { BiLogInCircle } from 'react-icons/bi';

const Navbar = () => {
    const {user} = useContext(AuthContext);

    return ( 
        <div className="primary-bg  sticky top-0 z-30 flex py-[10px] sm:py-4 md:py-5 lg:py-[22px] px-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1550px]:px-[120px]  @min-[1750px]:px-[160px]">
            <div className="navbar-start">
                <img src={logo} className='w-[50px]' alt="" />
                <a className="dark-1 hidden @min-[340px]:block text-[32px] font-extrabold ml-4">DocMeet</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="gap-9 flex dark-2 font-medium text-lg">
                    <NavLink to='/' className={({isActive})=>(isActive ? 'text-[#176AE5] border-b-2 border-[#d63a0f]' : 'stroke-link relative hover:text-[#176AE5] transition-colors duration-500')} end><span className=''>Home</span></NavLink>

                    <NavLink to='/myBookings' className={({isActive})=>(isActive ? 'text-[#176AE5] border-b-2 border-[#d63a0f]' : 'stroke-link relative hover:text-[#176AE5] transition-colors duration-500')}><span className=''>My-Bookings</span></NavLink>

                    <NavLink to='/blogs' className={({isActive})=>(isActive ? 'text-[#176AE5] border-b-2 border-[#d63a0f]' : 'stroke-link relative hover:text-[#176AE5] transition-colors duration-500')}><span className=''>Blogs</span></NavLink>

                    <NavLink to='/contact' className={({isActive})=>(isActive ? 'text-[#176AE5] border-b-2 border-[#d63a0f]' : 'stroke-link relative hover:text-[#176AE5] transition-colors duration-500')}><span className=''>Contact Us</span></NavLink>                    
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex justify-center items-center gap-2">
                    {
                        user ? '' : 
                       <button>
                            <Link to={'login'} className="px-5 py-2.5 hidden relative group border border-[#176AE5] overflow-hidden font-medium bg-transparent @min-[660px]:inline-block rounded-[99px]">
                                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#305486] group-hover:h-full opacity-90"></span>
                                <span className="relative group-hover:text-white">Login</span>
                            </Link>
                        </button>
                    }
                    {
                        user ? <ProfileAvatar></ProfileAvatar>:
                        <button className="hidden @min-[660px]:block">
                            <Link to={'/registration'} className='px-5 py-2.5 text-white relative group border bg-[#176AE5] border-[#176AE5] overflow-hidden font-medium inline-block rounded-[99px]'>
                                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#305486] group-hover:h-full opacity-90"></span>
                                <span className="relative group-hover:text-white">Registration</span>
                            </Link>
                        </button>
                    }
                </div>
                <div className="dropdown dropdown-bottom dropdown-end lg:hidden">
                    <div tabIndex={0} className="text-[40px] cursor-pointer ml-3"><GiHamburgerMenu /></div>
                    <ul tabIndex={0} className="dropdown-content border-2 border-[#176AE5] menu flex dark-2 font-medium text-lg rounded-box z-1 w-52 sm:w-[220px] lg:w-[230px] 2xl:w-[240px] bg-white mt-10 p-4 py-5 md:p-5 2xl:p-6">
                        <NavLink to='/' className={({isActive})=>(isActive ? 'text-[#176AE5]' : '')} end>Home</NavLink>
                        <hr className='border-t my-4 border-dashed border-gray-300'/>
                        <NavLink to='/myBookings' className={({isActive})=>(isActive ? 'text-[#176AE5]' : '')}>My-Bookings</NavLink>
                        <hr className='border-t my-4 border-dashed border-gray-300'/>
                        <NavLink to='/blogs' className={({isActive})=>(isActive ? 'text-[#176AE5]' : '')}>Blogs</NavLink>
                        <hr className='border-t my-4 border-dashed border-gray-300'/>
                        <NavLink to='/contact' className={({isActive})=>(isActive ? 'text-[#176AE5]' : '')}>Contact Us</NavLink>
                        <hr className='border-t my-4 @min-[660px]:hidden border-gray-300'/>
                        <div className="w-full flex @min-[660px]:hidden flex-col justify-start">
                            {
                                user ? '' : 
                                <button className="w-full">
                                <Link to={'/registration'} className='px-5 py-2.5 text-white relative group border bg-[#176AE5] border-[#176AE5] overflow-hidden font-medium inline-block rounded-[99px]'>
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#305486] group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">Registration</span>
                                </Link>
                            </button>
                            }
                            {
                                user ? '' : 
                                <button className='w-full'>
                                        <Link to={'login'} className="px-5 py-2 relative group border border-[#176AE5] overflow-hidden font-medium bg-transparent inline-block rounded-[99px]">
                                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#305486] group-hover:h-full opacity-90"></span>
                                            <span className="relative group-hover:text-white w-full gap-1 flex justify-center items-center">Login <BiLogInCircle size={20} /></span>
                                        </Link>
                                </button>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;