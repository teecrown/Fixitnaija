import React from "react";
import Footer from "../Components/Footer";
import Location from "../assets/location.png";
import Todo from "../assets/todo.png";
import Ppl from "../assets/ppl.png";
import Eye from "../assets/eye.png";
import Correct from "../assets/correct.png";
import Round from "../assets/rounded.png";
// import ArrowUp from "../assets/arrowup.png";
import Love from "../assets/love.png";

const AboutUs = () => {
  return (
    <div className=" bg-[#FBFBFB] w-full  ">
      <div className="w-full font-poppins flex py-[60px] flex-col justify-center items-center ">
        <h1 className="font-poppins font-[700]  text-[24px] leading-[36px] text-center align-middle  ">
          {" "}
          Our Values{" "}
        </h1>
        <p className=" font-[400] text-[16px] leading-[24px] pt-[8px] text-center align-middle ">
          The principles that guide everything we do
        </p>
      </div>
      <section className="flex flex-col sm:flex-row justify-center items-center">
        <div className="  mx-auto border border-white rounded-[16px] pb-[16px] shadow-[0px 4px 24px 0px #00000014] h-[237px] bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center  w-[392px]">
          <img className="pt-[24px]" src={Eye} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px] ">
              Report an Issue
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
              Submit details about infrastructure problems in your area with
              photos and location.
            </p>
          </div>
        </div>
        <div className="  mx-auto border border-white rounded-[16px] pb-[16px] shadow-[0px 4px 24px 0px #00000014] h-[237px] bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center  w-[392px]">
          <img className="pt-[24px]" src={Ppl} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px] ">
              Report an Issue
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
              Submit details about infrastructure problems in your area with
              photos and location.
            </p>
          </div>
        </div>

        <div className="  mx-auto border border-white rounded-[16px] pb-[16px] shadow-[0px 4px 24px 0px #00000014] h-[237px] bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center  w-[392px]">
          <img className="pt-[24px]" src={Love} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px] ">
              Report an Issue
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
              Submit details about infrastructure problems in your area with
              photos and location.
            </p>
          </div>
        </div>

        <div className="  mx-auto border border-white rounded-[16px] pb-[16px] shadow-[0px 4px 24px 0px #00000014] h-[237px] bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center  w-[392px]">
          <img className="pt-[24px]" src={Round} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px] ">
              Report an Issue
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
              Submit details about infrastructure problems in your area with
              photos and location.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col sm:flex-row justify-center py-[60px] items-center">
        <div className="  mx-auto border border-white rounded-[16px] pb-[16px] shadow-[0px 4px 24px 0px #00000014] h-[237px] bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center  w-[392px]">
          <img className="pt-[24px]" src={Eye} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px] ">
              Report an Issue
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
              Submit details about infrastructure problems in your area with
              photos and location.
            </p>
          </div>
        </div>
        <div className="  mx-auto border border-white rounded-[16px] pb-[16px] shadow-[0px 4px 24px 0px #00000014] h-[237px] bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center  w-[392px]">
          <img className="pt-[24px]" src={Ppl} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px] ">
              Report an Issue
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
              Submit details about infrastructure problems in your area with
              photos and location.
            </p>
          </div>
        </div>

        <div className="  mx-auto border border-white rounded-[16px] pb-[16px] shadow-[0px 4px 24px 0px #00000014] h-[237px] bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center  w-[392px]">
          <img className="pt-[24px]" src={Love} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px] ">
              Report an Issue
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
              Submit details about infrastructure problems in your area with
              photos and location.
            </p>
          </div>
        </div>

        <div className="  mx-auto border border-white rounded-[16px] pb-[16px] shadow-[0px 4px 24px 0px #00000014] h-[237px] bg-[#fbfbfb] p-[24px] flex flex-col items-center justify-center  w-[392px]">
          <img className="pt-[24px]" src={Round} alt="" />
          <div className="text-center font-poppins">
            <p className="font-Poppins font-[600] text-[16px] leading-[24px] text-center mx-auto py-[20px] ">
              Report an Issue
            </p>
            <p className=" font-[400] text-[14px] leading-[24px] text-center mx-auto">
              Submit details about infrastructure problems in your area with
              photos and location.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
