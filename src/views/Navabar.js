import React, { useState, useEffect } from "react";
import logo from "../Images/Logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const menuBar = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black px-12 py-6">
        <div className="lg:flex items-center lg:space-x-10">
          <img className="w-20 h-20 rounded-full " src={logo} alt="logo"></img>
          <a
            className="navlinks text-white-smoke hover:text-slate-400"
            href="#"
          >
            Shop
          </a>
          <a
            className="navlinks text-white-smoke hover:text-slate-400"
            href="#"
          >
            Deals
          </a>
          <form className="navlinks">
            <label>
              <input
                placeholder=" Search for anything..."
                className="w-80 p-1  rounded-l-lg placeholder:italic focus:outline-none"
                type="search"
                id="inputSearch"
                name="inputSearch"
              ></input>
            </label>
            <button className="bg-dark-green  text-white-smoke rounded-r-lg px-4 py-1">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="lg:hidden">
          <button onClick={menuBar}>
            {navbarOpen ? (
              <i class="text-dark-green hover:text-white-smoke hover:bg-gray-800 inline-flex p-3 rounded far fas fa-times fa-2x"></i>
            ) : (
              <i className="text-dark-green hover:text-white-smoke hover:bg-gray-800 inline-flex p-3 rounded fas fa-bars fa-2x"></i>
            )}
          </button>
        </div>
        <div
          className={`w-full ${
            navbarOpen ? "" : "hidden"
          } lg:flex lg:items-center lg:w-auto`}
        >
          <form className="lg:hidden flex items-center justify-between mt-16 ">
            <label className="w-full">
              <input
                placeholder=" Search for anything..."
                className="w-full p-2  rounded-l-lg placeholder:italic focus:outline-none"
                type="search"
                id="inputSearch"
                name="inputSearch"
              ></input>
            </label>
            <button className="bg-dark-green  text-white-smoke rounded-r-lg px-4 py-2">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="lg:flex lg:mt-0 mt-10 space-y-5 lg:space-y-0">
            <a
              className="block lg:hidden p-3 lg:p-0  text-white-smoke  hover:bg-dark-green"
              href="#"
            >
              Shop
            </a>
            <a
              className="block lg:hidden p-3 lg:p-0  text-white-smoke hover:bg-dark-green"
              href="#"
            >
              Deals
            </a>
            <a
              className="block  p-3 lg:p-0  text-white-smoke  lg:hover:text-slate-400 lg:hover:bg-inherit hover:bg-dark-green lg:mr-12"
              href="#"
            >
              Store
            </a>
            <a
              className=" block p-3 lg:p-0  text-white-smoke lg:hover:text-slate-400 lg:hover:bg-inherit hover:bg-dark-green lg:mr-12"
              href="#"
            >
              Account
            </a>
            <a
              className="block p-3 lg:p-0 text-white-smoke lg:hover:text-slate-400 lg:hover:bg-inherit hover:bg-dark-green"
              href="#"
            >
              Cart
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
