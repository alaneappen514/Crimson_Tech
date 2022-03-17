import React from "react";
import logo from "../Images/Logo.png";

const Footer = () => {
  return (
    <div className="bg-black mx-auto  p-10 ">
      <div className="flex flex-col xl:flex-row xl:space-y-0 space-y-16 items-center justify-around">
        <img
          className="w-56 h-56 rounded-full"
          src={logo}
          alt="Brand-Logo"
        ></img>
        <div className="flex flex-wrap justify-center sm:justify-evenly text-white-smoke ">
          <div className="max-w-xs m-4">
            <p className="text-lg text-dark-green font-extrabold">My Account</p>
            <p className="block text-sm hover:text-slate-400 cursor-pointer">
              Check Order Status
            </p>
            <p className="block text-sm hover:text-slate-400  cursor-pointer">
              Returns and Exchagnes
            </p>
            <p className="block text-sm hover:text-slate-400  cursor-pointer">
              Shipping, Delivery, Pickup
            </p>
            <p className="block text-sm hover:text-slate-400  cursor-pointer">
              Rewards Program
            </p>
          </div>
          <div className="max-w-xs m-4">
            <p className="text-lg text-dark-green font-extrabold">
              Support Services
            </p>
            <p className="block hover:text-slate-400 text-sm  cursor-pointer">
              View Support Center
            </p>
            <p className="block hover:text-slate-400 text-sm  cursor-pointer">
              Contact Us
            </p>
            <p className="block hover:text-slate-400 text-sm  cursor-pointer">
              Protection and Support
            </p>
            <p className="block hover:text-slate-400 text-sm  cursor-pointer">
              Recycling Program
            </p>
          </div>
          <div className="max-w-xs m-4">
            <p className="text-lg text-dark-green font-extrabold">
              About Crimson Tech
            </p>
            <p className="block hover:text-slate-400 text-sm  cursor-pointer">
              Our Story
            </p>
            <p className="block hover:text-slate-400 text-sm  cursor-pointer">
              Careers
            </p>
            <p className="block hover:text-slate-400 text-sm  cursor-pointer">
              Newsroom
            </p>
            <p className="block hover:text-slate-400 text-sm  cursor-pointer">
              Corporate Responsibility
            </p>
          </div>
        </div>
        <div className="text-center bg-white-smoke rounded-lg p-6 ">
          <form className="flex flex-col">
            <label htmlFor="Email" className="font-extrabold text-lg mb-5">
              Sign Up to get the hottest deals and more!!!
            </label>
            <input
              placeholder="Email"
              aria-label="Enter Email Address"
              type="search"
              id="emailDeals"
              name="emailDeals"
              className="w-full p-2 roundedl-lg placeholder:italic border-gray-600 border-2 focus:outline-none"
            ></input>
            <button className="px-4 py-3 my-5 text-sm  bg-dark-green text-white-smoke hover:bg-slate-400 hover:text-black">
              {" "}
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="text-white   mt-16 flex flex-wrap justify-center">
        <p className=" m-5 hover:text-slate-400 text-sm  cursor-pointer">
          Accessibility
        </p>
        <p className=" m-5 hover:text-slate-400 text-sm  cursor-pointer">
          Terms and Conditions
        </p>
        <p className=" m-5 hover:text-slate-400 text-sm  cursor-pointer">
          Internet-based ads
        </p>
        <p className=" m-5 hover:text-slate-400 text-sm  cursor-pointer">
          Privacy Policy
        </p>
      </div>
      <div className="flex justify-center space-x-6 mt-6 ">
        <i className="fab fa-facebook-square text-white-smoke fa-2x hover:text-slate-400 "></i>
        <i className="fab fa-instagram text-white-smoke fa-2x hover:text-slate-400"></i>
        <i className="fab fa-youtube text-white-smoke fa-2x hover:text-slate-400"></i>
      </div>
    </div>
  );
};

export default Footer;
