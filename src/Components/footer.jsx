import React from "react";

import { BsFacebook } from "react-icons/bs";
import Logo from "../assets/Fixitlogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router";

function footer() {
  return (
    <div className="  w-full px-[11px] sm:px-[16px] py-[40px]  text-white  bg-[#0F1419] font-work sm:p-[100px] sm:w-full ">
      {/* desktop view */}
      <div className="hidden md:block md:px-0 ">
        <div className="flex flex-col   font-work md:">
          <div className="flex flex-col md:flex-row justify-between gap-[80px] sm:gap-[80px]  ">
            <div className=" lg:text-[20px] lg:mt-[8px]  lg:w-[436px] font-work lg:font-[400] lg:justify-center lg:leading-[36px]  sm:p-[2px] ">
              <img className="cursor-pointer " src={Logo} />
              <h3 className="pt-[10px] md:">
                Empowering Nigerians to report, track, and resolve
                infrastructure issues across
                the country
              </h3>
            </div>
            {/* flex links */}
            <div className="flex scroll-smooth leading-[18px] sm:leading-[24px] justify-evenly  w-[676px]  text-[14px] font-[400] font-work pb-[24px] ">
              <div className=" md:w-[98px]">
                <h3 className="font-bold">Get involved</h3>
                <ol className="cursor-pointer">
                  <li className="hover:text-[#0011ff]">Contact us</li>
                  <Link to="/AboutUs">
                    <li className="hover:text-[#0011ff]">About us</li>
                  </Link>
                  <li className="hover:text-[#0011ff]">Support</li>
                  <a href="#FAQ" className="block scroll-smooth">
                    <li className="hover:text-[#0011ff]">FAQs</li>
                  </a>
                  <li className="hover:text-[#0011ff]">Blog</li>
                </ol>
              </div>
            

              <div className=" ">
                <h3 className="font-bold"> Stay updated</h3>
                <ol className="cursor-pointer">
                  <li className="hover:text-[#0011ff]">Announcements</li>
                  <li className="hover:text-[#0011ff]">News letter</li>
                  <li className="hover:text-[#0011ff]">Feedback</li>
                  <li className="hover:text-[#0011ff]">Follow us</li>
                  <li className="hover:text-[#0011ff]">Updates</li>
                </ol>
              </div>
              <div className=" w-[225px]">
                <h3 className="font-bold">Contact us</h3>
                <ol className="cursor-pointer">
                  <li className="hover:text-[#0011ff59] hover:underline">
                    {" "}
                    Email: info@fixitnaija.com{" "}
                  </li>
                  <li className="hover:text-[#0011ff59]">
                    Phone : 09134029683
                  </li>
                  <li className="hover:text-[#575db059] hover:underline">
                    Whatsapp : 09134029683
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-between gap-[24px] mt-[24px] border-t-2">
          <div className="mt-[32px] flex justify-between gap-[24px]  font-work text-[#FFFFFF] border-t-white ">
            <p className="border-solid">
              © 2025 Fixitnaija All rights reserved.
            </p>
            <p className="underline cursor-pointer">Privacy Policy</p>
            <p className="underline cursor-pointer">Terms of Service</p>
            <p className="underline cursor-pointer">Cookies Settings</p>
          </div>

          <div className="flex mt-[32px] sm:gap-[16px] w-[132px]">
            <BsFacebook />
            <FaInstagramSquare />
            <RiTwitterXFill />
            <FaLinkedin />
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="md:hidden">
        <div className="flex w-[310px] sm:w-[358px]  mt-[50px]">
          <div className="w-[213px] text-[16px] lg:mt-[8px]  font-work lg:font-[400] lg:justify-center lg:leading-[36px]  ">
            <img className="cursor-pointer " src={Logo} />
            <h3 className="pt-[10px] w-[213px] h[116px]">
              Empowering Nigerians to report, track, and resolve infrastructure
              issues across
              <br /> the country
            </h3>
          </div>

          <div className="block ">
            <h3 className="font-bold">Get involved</h3>
            <ol className="cursor-pointer my-[16px] leading-8">
              <li className="hover:text-[#0011ff]">Contact us</li>
              <li className="hover:text-[#0011ff]">About us</li>
              <li className="hover:text-[#0011ff]">Support</li>
              <li>
  <a href="#FAQ" className="hover:text-[#0011ff] block scroll-smooth">FAQs</a>
</li>
              <li className="hover:text-[#0011ff]">FAQs</li>
              <li className="hover:text-[#0011ff]">Blog</li>
            </ol>
          </div>
        </div>
        <div className="flex w-[310px] h-[237px] mt-[40px] justify-between gap-[2px] leading-8">
          <div className=" ">
            <h3 className="font-bold"> Stay updated</h3>
            <ol className="cursor-pointer">
              <li className="hover:text-[#0011ff]">Announcements</li>
              <li className="hover:text-[#0011ff]">News letter</li>
              <li className="hover:text-[#0011ff]">Feedback</li>
              <li className="hover:text-[#0011ff]">Follow us</li>
              <li className="hover:text-[#0011ff]">Updates</li>
            </ol>
          </div>
          <div className="">
            <h3 className="font-bold">Contact us</h3>
            <ol className="cursor-pointer">
              <li className="hover:text-[#0011ff59] hover:underline">
                {" "}
                Email: info@fixitnaija.com{" "}
              </li>
              <li className="hover:text-[#0011ff59]">Phone : 09134029683</li>
              <li className="hover:text-[#575db059] hover:underline">
                Whatsapp : 09134029683
              </li>
            </ol>
          </div>
        </div>
        <div className=" flex w-full  mb-[32px] border-t-2"></div>
        <div className="mt-[32px] block my-[16px] leading-16 pb-[64px] font-work text-[#FFFFFF] ">
          <p className="underline cursor-pointer">Privacy Policy</p>
          <p className="underline cursor-pointer">Terms of Service</p>
          <p className="underline cursor-pointer">Cookies Settings</p>
          <p className="border-solid">© 2025 Fixitnaija All rights reserved.</p>
        </div>
        <div className="flex mt-[32px] gap-[16px] w-[132px]">
          <BsFacebook />
          <FaInstagramSquare />
          <RiTwitterXFill />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}

export default footer;
