import React from 'react'
import { useState } from 'react'
import Drainage from '../assets/Wusedrainage.jpg'
import Dumping from '../assets/Dumping.jpg'
import Holes from '../assets/Potholes.jpg'
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import Profile from '../assets/Image.png'

const Report = () => {
  const [drainage, setDrainage] = useState(true)
  const [dumping, setDumping] = useState(false)
  const [holes, setHoles] = useState(false)

  const firstPicture = () => {
    setDrainage(true)
    setDumping(false)
    setHoles(false)
  }
  const secondPicture = () => {
    setDrainage(false)
    setDumping(true)
    setHoles(false)
  }
  const thirdPicture = () => {
    setDrainage(false)
    setDumping(false)
    setHoles(true)
  }
  return (
    <div className='bg-[#fffff0]'>
      <p className='font-poppins text-[40px] font-bold leading-[60px] flex justify-center align-center'> Recent Happenings </p>
      <p className='font-poppins text-[18px] font-normal leading-[24px] flex justify-center align-center'>Each report brings us one step closer to action and change.</p>


      <section className='flex justify-between align-center m-[100px] mr-[100px] mt-[64px] gap-[24px]'>
        <div className='relative w-[509px] h-[409px] rounded-[12px]'>
          {drainage && <img src={Drainage} alt='drainage' className='w-full h-full object-cover' />}
          {dumping && <img src={Dumping} alt='dumping' className='w-full h-full object-cover' />}
          {holes && <img src={Holes} alt='holes' className='w-full h-full object-cover' />}
          <div className='absolute inset-0 flex flex-col gap-[12px] pt-[10px]'>
            {/* <img src={Drainage} alt='drainage' className={`w-[120px] h-[120px] rounded-[12px] ${imageOne?'border border-[#54656]':''}`}/> */}

            <img onClick={firstPicture} src={Drainage} alt='drainage' className={`w-[120px] h-[120px] rounded-[12px] ml-[12px] ${drainage ? 'border-[2px] border-[#15803D]' : 'border-[2px] border-[#fff]'}`} />
            <img onClick={firstPicture} src={Drainage} alt='drainage' className={`w-[120px] h-[120px] rounded-[12px] ml-[12px] ${dumping ? 'border-[2px] border-[#15803D]' : ' border-[2px] border-[#fff]'} `} />
            <img onClick={firstPicture} src={Drainage} alt='drainage' className={`w-[120px] h-[120px] rounded-[12px] ml-[12px] ${holes ? 'border-[2px] border-[#15803D]' : 'border-[2px] border-[#fff]'}`} />
          </div>
        </div>
        <div >
          <div className='flex justify-between align-center mb-[12px]'>
            <p className='font-poppins font-semibold text-[32px] leading-[28px]' >Blocked Drainage</p>
            <p className='font-poppins font-normal text-[16px] leading-[16px] bg-[#DCFCE7] text-[#15803D] w-[104px] h-[32px] pl-[16px] pr-[16px] pt-[8px] pb-[8px] rounded-[9999px]'> Resolved </p>
          </div>
          <p className='flex text-[#15803D] align-center font-poppins font-normal text-[14px] leading-[18px] mb-[24px] '> <CiLocationOn /> 123, Business Street, Municipal, Kano State</p>
          <p className='font-poppins font-normal text-[14px] leading-[24px] '>I noticed the drainage on my street was blocked, and water flooded the road. It was
            <br /> causing trouble for people walking and driving the smell has gotten worse , and its
            <br /> starting to attract mosquitoes and flies. I decided ....</p>
          <div className='flex gap-[8px] mt-[24px]'>
            <button className='border w-[150px] h-[40px] font-poppins font-normal text-[16px] leading-[24px] flex justify-center align-center rounded-[8px] p-[8px]'> <AiOutlineLike />256.1k Upvotes</button>
            <button className='border w-[150px] h-[40px] font-poppins font-normal text-[16px] leading-[24px] flex justify-center align-center rounded-[8px] p-[8px]'> <FaRegComments />Comments</button>
            <button className='border  w-[150px] h-[40px] font-poppins font-normal text-[16px] leading-[24px] flex justify-center align-center rounded-[8px] p-[8px]'> <GoShareAndroid />Share</button>
          </div>
          <hr className='mt-[24px] mb-[24px]' />
          <div className='w-[707px] h-[128px] rounded-[24px] p-[16px] border'>
            <div className='flex justify-between '>
              <div className='flex gap-[8px] '>
                <img src={Profile} />
                <p className='font-normal font-poppins text-[14px] leading-[24px] mt-[8px]'> Gabriel Omotayo</p>
              </div>
              <p className='font-normal font-poppins text-[14px] leading-[24px] italic'>2days ago</p>
            </div>
            <p className='font-normal font-poppins text-[14px] leading-[24px]' >Thank you for speaking up about this ,we have the seen issue on our street,  it really affecting everyone, hope the authorities respond quickly,,</p>
            <div className='flex justify-center align-center mt-[-40px]'>
              <button className='border pt-[8px] pb-[8px] pr-[16px] pl-[16px] text-[#15803D] border-[#34A853] flex justify-center align-center bg-[#fffff0] rounded-[12px]'> Join Conversation </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className='flex justify-between align-center m-[100px] mr-[100px] mt-[64px] gap-[24px]'>
        <div className='relative w-[509px] h-[409px] rounded-[12px]'>
          {drainage && <img src={Drainage} alt='drainage' className='w-full h-full object-cover' />}
          {dumping && <img src={Dumping} alt='dumping' className='w-full h-full object-cover' />}
          {holes && <img src={Holes} alt='holes' className='w-full h-full object-cover' />}
          <div className='absolute inset-0 flex flex-col gap-[12px] pt-[10px]'>
            {/* <img src={Drainage} alt='drainage' className={`w-[120px] h-[120px] rounded-[12px] ${imageOne?'border border-[#54656]':''}`}/> */}

            <img onClick={secondPicture} src={Dumping} alt='drainage' className={`w-[120px] h-[120px] rounded-[12px] ml-[12px] ${drainage ? 'border-[2px] border-[#15803D]' : 'border-[2px] border-[#fff]'}`} />
            <img onClick={secondPicture} src={Dumping} alt='drainage' className={`w-[120px] h-[120px] rounded-[12px] ml-[12px] ${dumping ? 'border-[2px] border-[#15803D]' : ' border-[2px] border-[#fff]'} `} />
            <img onClick={secondPicture} src={Dumping} alt='drainage' className={`w-[120px] h-[120px] rounded-[12px] ml-[12px] ${holes ? 'border-[2px] border-[#15803D]' : 'border-[2px] border-[#fff]'}`} />
          </div>
        </div>
        <div >
          <div className='flex justify-between align-center mb-[12px]'>
            <p className='font-poppins font-semibold text-[32px] leading-[28px]' >Illegal Dumpings</p>
            <p className='font-poppins font-normal text-[16px] leading-[16px] bg-[#DBEAFE] text-[#1E40AF] w-[120px] h-[32px] pl-[16px] pr-[16px] pt-[8px] pb-[8px] rounded-[9999px]'> In Progress </p>
          </div>
          <p className='flex text-[#15803D] align-center font-poppins font-normal text-[14px] leading-[18px] mb-[24px] '> <CiLocationOn /> 25,Niran Adegoke Street, Ipamesan Sango Ota, Ogun State. </p>
          <p className='font-poppins font-normal text-[14px] leading-[24px] '>People have been dumping waste illegally near the junction , it started with few bags
            <br /> but now the area is full of trash and its getting worse, i’m reporting here so the right 
            <br /> people can take action before it becomes health h ....</p>
          <div className='flex gap-[8px] mt-[24px]'>
            <button className='border w-[150px] h-[40px] font-poppins font-normal text-[16px] leading-[24px] flex justify-center align-center rounded-[8px] p-[8px]'> <AiOutlineLike />256.1k Upvotes</button>
            <button className='border w-[150px] h-[40px] font-poppins font-normal text-[16px] leading-[24px] flex justify-center align-center rounded-[8px] p-[8px]'> <FaRegComments />Comments</button>
            <button className='border  w-[150px] h-[40px] font-poppins font-normal text-[16px] leading-[24px] flex justify-center align-center rounded-[8px] p-[8px]'> <GoShareAndroid />Share</button>
          </div>
          <hr className='mt-[24px] mb-[24px]' />
          <div className='w-[707px] h-[128px] rounded-[24px] p-[16px] border'>
            <div className='flex justify-between '>
              <div className='flex gap-[8px] '>
                <img src={Profile} />
                <p className='font-normal font-poppins text-[14px] leading-[24px] mt-[8px]'> Victor Adeleye</p>
              </div>
              <p className='font-normal font-poppins text-[14px] leading-[24px] italic'>2days ago</p>
            </div>
            <p className='font-normal font-poppins text-[14px] leading-[24px]' >Appreciate you reporting it-hoping for a quick clean p..</p>
            <div className='bg-[#fffff0] flex justify-center align-center mt-[-40px]'>
              <button className='border pt-[8px] pb-[8px] pr-[16px] bg-[#fffff0] pl-[16px] text-[#15803D] border-[#34A853] flex justify-center align-center rounded-[12px]'> Join Conversation </button>
            </div>
          </div>
        </div>
      </section>

       <section className='flex justify-between align-center m-[100px] mr-[100px] mt-[64px] gap-[24px]'>
        <div className='relative w-[509px] h-[409px] rounded-[12px]'>
          {drainage && <img src={Drainage} alt='drainage' className='w-full h-full object-cover' />}
          {dumping && <img src={Dumping} alt='dumping' className='w-full h-full object-cover' />}
          {holes && <img src={Holes} alt='holes' className='w-full h-full object-cover' />}
          <div className='absolute inset-0 flex flex-col gap-[12px] pt-[10px]'>
            {/* <img src={Drainage} alt='drainage' className={`w-[120px] h-[120px] rounded-[12px] ${imageOne?'border border-[#54656]':''}`}/> */}

            <img onClick={thirdPicture} src={Holes} alt='drainage' className={`w-[120px] h-[120px] rounded-[12px] ml-[12px] ${drainage ? 'border-[2px] border-[#15803D]' : 'border-[2px] border-[#fff]'}`} />
            <img onClick={thirdPicture} src={Holes} alt='drainage' className={`w-[120px] h-[120px] rounded-[12px] ml-[12px] ${dumping ? 'border-[2px] border-[#15803D]' : ' border-[2px] border-[#fff]'} `} />
            <img onClick={thirdPicture} src={Holes} alt='drainage' className={`w-[120px] h-[120px] rounded-[12px] ml-[12px] ${holes ? 'border-[2px] border-[#15803D]' : 'border-[2px] border-[#fff]'}`} />
          </div>
        </div>
        <div >
          <div className='flex justify-between align-center mb-[12px]'>
            <p className='font-poppins font-semibold text-[32px] leading-[28px]' >Potholes on Main Road</p>
            <p className='font-poppins font-normal text-[16px] leading-[16px] bg-[#DCFCE7] text-[#15803D] w-[104px] h-[32px] pl-[16px] pr-[16px] pt-[8px] pb-[8px] rounded-[9999px]'> Reported </p>
          </div>
          <p className='flex text-[#15803D] align-center font-poppins font-normal text-[14px] leading-[18px] mb-[24px] '> <CiLocationOn /> 23, Anuoluwapo Street, Leme Abeokuta, Ogun State</p>
          <p className='font-poppins font-normal text-[14px] leading-[24px] '>The road leading to my area is full of potholes ,drivers now try to avoid them and its
            <br /> causes traffic and accidents, on rainy days it is always filled with water making them 
            <br /> harder to see and more dangerous. Im reporting ....</p>
          <div className='flex gap-[8px] mt-[24px]'>
            <button className='border w-[150px] h-[40px] font-poppins font-normal text-[16px] leading-[24px] flex justify-center align-center rounded-[8px] p-[8px]'> <AiOutlineLike />256.1k Upvotes</button>
            <button className='border w-[150px] h-[40px] font-poppins font-normal text-[16px] leading-[24px] flex justify-center align-center rounded-[8px] p-[8px]'> <FaRegComments />Comments</button>
            <button className='border  w-[150px] h-[40px] font-poppins font-normal text-[16px] leading-[24px] flex justify-center align-center rounded-[8px] p-[8px]'> <GoShareAndroid />Share</button>
          </div>
          <hr className='mt-[24px] mb-[24px]' />
          <div className='w-[707px] h-[128px] rounded-[24px] p-[16px] border'>
            <div className='flex justify-between '>
              <div className='flex gap-[8px] '>
                <img src={Profile} />
                <p className='font-normal font-poppins text-[14px] leading-[24px] mt-[8px]'> Ishola Yunus</p>
              </div>
              <p className='font-normal font-poppins text-[14px] leading-[24px] italic'>2days ago</p>
            </div>
            <p className='font-normal font-poppins text-[14px] leading-[24px]' >I pass this road every day -those problems are really bad, thanks for reporting it ,we need more people to speak to the government can fix it</p>
            <div className=' flex justify-center align-center mt-[-40px]'>
              <button className='border pt-[8px] pb-[8px] bg-[#fffff0] pr-[16px] pl-[16px] text-[#15803D] border-[#34A853] flex justify-center align-center rounded-[12px]'> Join Conversation </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Report
