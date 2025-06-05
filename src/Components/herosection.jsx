import React from 'react'


const Herosection = () => {
    return (
        <div >
            <div className=' bg-[url(../src/assets/Hero.jpg)] bg-cover bg-no-repeat h-[700px] relative'>
                {/* Underlay for dark overlay */}
                <div className='absolute inset-0 bg-black opacity-60 z-0'></div>
                <div className='relative z-10'>
                    <h1 className='text-[54px] font-poppins font-bold leading-[80px] text-white ml-[100px] mr-[323px] pt-[137px]'>
                        Empowering <br /> Communities  to Report <br /> Infrastructure Issues
                    </h1>
                    <p className='text-[17px] font-poppins font-medium leading-[30px] text-white ml-[100px] mr-[323px] pt-[16px]'>
                        Welcome to our innovative civic tech platform, where you can easily report and 
                        <br/> track public infrastructure problems in your community.Join us in making a 
                        <br/> difference by highlighting issues in your community.
                    </p>
                    <button  className='border font-poppins text-base font-medium border-[#15803D] bg-[#15803D] text-[#fff] rounded-lg width-[183px] height[48px] pt-[12px] pb-[12px] pl-[42px] pr-[42px] ml-[100px] mr-[323px] mt-[32px]  '>Report Issue</button>
                </div>
            </div>
            <div className='flex justify-between items-center ml-[100px] mr-[100px] mt-[40px]'>
                <div className='w-[286px] h-[148px] block justify-center align-center ml-[100px] mt[40px]' >
                    <p className='font-poppins text-[48px] font-semibold leading-[48px] text-[#15803D]'>5,280+</p>
                    <p className='font-poppins font-normal text-[16px] leading-[24px]'>Issues Reported</p>
                </div>
                <div className='w-[286px] h-[148px] block justify-center align-center ml-[100px] mt[40px]'>
                    <p className='font-poppins text-[48px] font-semibold leading-[48px] text-[#15803D]'>3,140+</p>
                    <p className='font-poppins font-normal text-[16px] leading-[24px]'>Issues Resolved</p>
                </div>
                <div className='w-[286px] h-[148px] block justify-center align-center ml-[100px] mt[40px]'>
                    <p className='font-poppins text-[48px] font-semibold leading-[48px] text-[#15803D]'>2,000+</p>
                    <p className='font-poppins font-normal text-[16px] leading-[24px]'>Active Communities</p>
                </div>
                <div className='w-[286px] h-[148px] block justify-center align-center ml-[100px] mt[40px]'>
                    <p className='font-poppins text-[48px] font-semibold leading-[48px] text-[#15803D]'>36</p>
                    <p className='font-poppins font-normal text-[16px] leading-[24px]'>States Covered</p>
                </div>
            </div>
        </div>
    )
}

export default Herosection


