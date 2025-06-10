import React from "react";
import Logo from "../assets/Fixitlogo.png";

function Reset() {
  return (
    <div className="font-Poppins">
      <img src={Logo} alt="fixit-logo" />
      <section>
        <div> 
          <img src="" alt="" />
        </div>
        <div className="text-[#FF6D00] font-[500] text-[14px] leading[17px]">
          {" "}
          Please provide a valid email address.
        </div>
        <div className="items-center flex flex-col justify-center">
          <div className="font-Poppins items-center">
            <h2 className="font-[700] text-[24px] leading-[28px]  text-[#333333] mb-[16px] text-center">
              Reset your password{" "}
            </h2>
            <p className="w-[310px] text-center font-Poppins font-[500] text-[16px]  leading-[24px] text-[#333333]">
              Enter your email address, and we'll send instructions to reset
              your password.
            </p>
          </div>
          <div className="flex flex-col mt-[16px]">
            <label htmlFor="email">Email address </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className=" w-[288px] rounded-[6px] pl-[13px] h-[46px] border "
            />
            <button className="text-[#FFFFFF] font-Poppins font-[500] text-[16px] rounded-[12px] bg-[#15803D] mt-[24px] w-[288px] h-[46px] cursor-pointer">
              Reset Password
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          
        <button className="text-[#259A48]  font-Poppins font-[500] text-[16px] rounded-[12px] bg-[#F7F7F7] mt-[24px] w-[172px] h-[52px] cursor-pointer">
          Back to? Log in
        </button>
        </div>
      </section>
    </div>
  );
}

export default Reset;
