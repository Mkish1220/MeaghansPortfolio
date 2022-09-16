import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import {FaBars, FaTimes} from 'react-icons/fa';


const Navbar = () => {
    const [nav, setNav]= useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
   <div>
    <img src={Logo} alt='Logo' style={{width: '50px' }} />
   </div>


    <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
    </ul>


   <div onClick={handleClick} className='md:hidden z-10'>
   {!nav ? <FaBars /> : <FaTimes />}
   </div>


    <ul className={!nav ? 'hidden' : 'absolute top-0 lrft-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
    </ul>
  

    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
       <ul>
        <li></li>
        </ul> 
    </div>
    </div>
    );
};

export default Navbar;