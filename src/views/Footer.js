import React from "react";
import logo from "../Images/Logo.png";

const Footer = () => {
  return (
    <div className="bg-black mx-auto  p-10 ">
      <div className="flex flex-col xl:flex-row xl:space-y-0 space-y-16 items-center justify-around">
        <img className="w-56 h-56 rounded-full" src={logo} alt="logo"></img>
        <div className="flex flex-wrap justify-center sm:justify-evenly text-white-smoke ">
          <div className="max-w-xs m-4">
            <h1 className="text-lg text-dark-green font-extrabold">
              My Account
            </h1>
            <a href="#" className="block hover:text-slate-400">
              Check Order Status
            </a>
            <a href="#" className="block hover:text-slate-400">
              Returns and Exchagnes
            </a>
            <a href="#" className="block hover:text-slate-400">
              Shipping, Delivery, Pickup
            </a>
            <a href="#" className="block hover:text-slate-400">
              Rewards Program
            </a>
          </div>
          <div className="max-w-xs m-4">
            <h1 className="text-lg text-dark-green font-extrabold">
              Support Services
            </h1>
            <a href="#" className="block hover:text-slate-400">
              View Support Center
            </a>
            <a href="#" className="block hover:text-slate-400">
              Contact Us
            </a>
            <a href="#" className="block hover:text-slate-400">
              Protection and Support
            </a>
            <a href="#" className="block hover:text-slate-400">
              Recycling Program
            </a>
          </div>
          <div className="max-w-xs m-4">
            <h1 className="text-lg text-dark-green font-extrabold">
              About Crimson Tech
            </h1>
            <a href="#" className="block hover:text-slate-400">
              Our Story
            </a>
            <a href="#" className="block hover:text-slate-400">
              Careers
            </a>
            <a href="#" className="block hover:text-slate-400">
              Newsroom
            </a>
            <a href="#" className="block hover:text-slate-400">
              Corporate Responsibility
            </a>
          </div>
        </div>
        <div className="text-center bg-white-smoke rounded-lg p-6 ">
          <h1 className="font-extrabold text-lg ">
            Get the Hottest Deals and More!!!
          </h1>
          <form className="mt-5">
            <input
              placeholder="Email"
              type="search"
              id="emailDeals"
              name="emailDeals"
              className="w-full p-2 roundedl-lg placeholder:italic border-gray-600 border-2 focus:outline-none"
            ></input>
            <button className="px-4 py-3 my-5 text-sm md:text-base bg-dark-green text-white-smoke hover:bg-slate-400 hover:text-black">
              {" "}
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="text-white   mt-16 flex flex-wrap justify-center">
        <a href="#" className=" m-5 hover:text-slate-400">
          Accessibility
        </a>
        <a href="#" className=" m-5 hover:text-slate-400">
          Terms and Conditions
        </a>
        <a href="#" className=" m-5 hover:text-slate-400">
          Internet-based ads
        </a>
        <a href="#" className=" m-5 hover:text-slate-400">
          Privacy Policy
        </a>
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
