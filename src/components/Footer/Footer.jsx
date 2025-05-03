import React from 'react';
import { NavLink } from 'react-router';
import facebookLogo from '../../assets/facebook-logo.png';
import youtubeLogo from '../../assets/youtube-logo.png';
import linkdinLogo from '../../assets/linkdin-logo.png';
import xLogo from '../../assets/twiter-logo.png';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center py-[100px]">
            
            <div className="flex">
                <img src={logo} className='w-[50px]' alt="" />
                <a className="dark-1 text-[32px] font-extrabold ml-3">DocMeet</a>
            </div>

            <ul className='flex flex-col @min-[400px]:flex-row dark-2 font-medium text-lg gap-2 sm:gap-4 md:gap-7 lg:gap-12'>
                <NavLink to='/' className={({isActive})=>(isActive ? 'text-[#176AE5] border-b-2 border-[#d63a0f]' : 'stroke-link relative hover:text-[#176AE5] transition-colors duration-500')} end><span className=''>Home</span></NavLink>
                
                <NavLink to='/myBookings' className={({isActive})=>(isActive ? 'text-[#176AE5] border-b-2 border-[#d63a0f]' : 'stroke-link relative hover:text-[#176AE5] transition-colors duration-500')}><span className=''>My-Bookings</span></NavLink>

                <NavLink to='/blogs' className={({isActive})=>(isActive ? 'text-[#176AE5] border-b-2 border-[#d63a0f]' : 'stroke-link relative hover:text-[#176AE5] transition-colors duration-500')}><span className=''>Blogs</span></NavLink>

                <NavLink to='/contact' className={({isActive})=>(isActive ? 'text-[#176AE5] border-b-2 border-[#d63a0f]' : 'stroke-link relative hover:text-[#176AE5] transition-colors duration-500')}><span className=''>Contact Us</span></NavLink>
            </ul>
            <hr className='border border-t border-[#D5D5D5] flex justify-center w-[70%]' />
            <nav>
                <div className="grid grid-flow-col gap-6">
                    <a href="https://www.facebook.com/nur.islam.568309/" target="_blank"><img src={facebookLogo} alt="" /></a>
                    <a href="https://x.com/MdNurIslam55434" target="_blank"><img src={xLogo} alt="" /></a>
                    <a href="https://www.linkedin.com/in/md-nur-islam-360b372a0/" target="_blank"><img src={linkdinLogo} alt="" /></a>
                    <a href="https://www.youtube.com/@Nurscodingcorner" target="_blank"><img src={youtubeLogo} alt="" /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;