import React, { useState } from 'react';
import Logo from '../assets/Fixitlogo.png'
import { Link } from 'react-router'
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
// import Poppins from '../Fonts/Poppins-Regular.ttf'
// import './index.css'

const Navbar = () => {
  const [hide, setHide] = useState(false)
  return (
    <div>
      <navbar className='flex justify-between items-center mr-[100px] ml-[100px] mt-[16px] mb-[16px]'>
        <div classname='nav-logo'>
          <Link to="/"><img src={Logo} alt="logo" /> </Link>
        </div>
        <div className='nav-links'>
          <p></p>
          <ul className='flex gap-16 justify-center items-center'>
            <Link to="/"> <li className="font-poppins text-base font-medium width-[156px] height-[48px] flex justify-center items-center">Home</li></Link>
            <Link to="/"><li className="font-poppins text-base font-medium width-[156px] height-[48px] flex justify-center items-center">About</li> </Link>
            <li className='relative'>
              <div className='font-poppins text-base font-medium width-[156px] height-[48px] flex justify-center items-center' >
                <p  className='flex justify-center items-center ' onClick={()=>setHide(prev=>!prev)}>Help & Info <IoIosArrowDown /></p>
                {hide && <div className='absolute right-0 bottom-[-70px] z-100 bg-[#fff] border border-[#fff] pt-[12px] pb-[12px] pl-[12px] pr-[12px] mr-[15px] mt-[40px]'>
                  <p className="font-poppins text-base font-medium" > FAQs </p>
                  <p className="font-poppins text-base font-medium" > Blog </p>
                  <p className="font-poppins text-base font-medium" > Support </p>
                </div>}
              </div>
            </li>
            <li className='gap-[10px] flex '>
                <button  className='border font-poppins text-base font-medium border-[#15803D] bg-[#fff] text-[#15803D] rounded-lg width-[183px] height[48px] pt-[12px] pb-[12px] pl-[42px] pr-[42px]  '>Join Community</button>
              <button  className='border font-poppins text-base font-medium border-[#15803D] bg-[#15803D] text-[#fff] rounded-lg width-[183px] height[48px] pt-[12px] pb-[12px] pl-[42px] pr-[42px]  '>Report Issue</button>
            </li>
          </ul>
         {/* <div >
              <button type='button' className='border border-[#34A853] bg-[#fff] text-[#34A853]'>Join Community</button>
            </div> */}
        </div>
      </navbar>
    </div>
  )
}

export default Navbar 