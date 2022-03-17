import React, { useEffect, useState } from "react";
import logo from "../Images/Logo.png";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  const menuBar = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black px-6 sm:px-12 py-6">
        <div className="lg:flex items-center lg:space-x-10">
          <Link to="/">
            <img
              className="w-14 h-14 rounded-full "
              src={logo}
              alt="Brand-Logo"
            ></img>
          </Link>
          <Link to="/all_products">
            <span className="text-sm navlinks text-white-smoke hover:text-slate-400 cursor-pointer">
              Shop
            </span>
          </Link>
          <p className="text-sm navlinks text-white-smoke hover:text-slate-400 cursor-pointer">
            Deals
          </p>
          <form className="navlinks">
            <span>
              <input
                placeholder=" Search for anything..."
                aria-label="Enter Search Term"
                className="w-80 p-1  rounded-l-lg placeholder:italic focus:outline-none"
                type="search"
                id="inputSearch"
                name="inputSearch"
              ></input>
            </span>
            <button className="bg-dark-green  text-white-smoke rounded-r-lg px-4 py-1">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="lg:hidden ">
          <Link to="/cart">
            <i className="text-white-smoke hover:text-slate-400 inline-flex p-3 rounded  fas fa-shopping-cart text-2xl sm:text-3xl mr-5">
              <span className="ml-3">
                {cart.length ? <>({cartCount})</> : <></>}
              </span>
            </i>
          </Link>
          <button onClick={menuBar}>
            {navbarOpen ? (
              <i className="text-white-smoke hover:text-white-smoke hover:bg-gray-800 inline-flex p-3 rounded far fas fa-times text-2xl sm:text-3xl"></i>
            ) : (
              <i className="text-white-smoke hover:text-white-smoke hover:bg-gray-800 inline-flex p-3 rounded fas fa-bars text-2xl sm:text-3xl"></i>
            )}
          </button>
        </div>
        <div
          className={`w-full ${
            navbarOpen ? "" : "hidden"
          } lg:flex lg:items-center lg:w-auto`}
        >
          <form className="lg:hidden flex items-center justify-between mt-16 ">
            <div className="w-full">
              <input
                placeholder=" Search for anything..."
                aria-label="Enter Search Term"
                className="w-full p-2  rounded-l-lg placeholder:italic focus:outline-none"
                type="search"
                id="inputSearch"
                name="inputSearch"
              ></input>
            </div>
            <button
              className="bg-dark-green  text-white-smoke rounded-r-lg px-4 py-2"
              aria-label="Search Button"
            >
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="lg:flex lg:mt-0 mt-10 space-y-5 lg:space-y-0">
            <Link to="/all_products">
              <p
                onClick={menuBar}
                className="block text-sm lg:hidden p-3 lg:p-0  text-white-smoke  hover:bg-dark-green"
              >
                Shop
              </p>
            </Link>
            <p className="block text-sm lg:hidden p-3 lg:p-0  text-white-smoke hover:bg-dark-green cursor-pointer">
              Deals
            </p>
            <p className="block text-sm p-3 lg:p-0  text-white-smoke  lg:hover:text-slate-400 lg:hover:bg-inherit hover:bg-dark-green lg:mr-12 cursor-pointer">
              Store
            </p>
            <p className=" block text-sm  p-3 lg:p-0  text-white-smoke lg:hover:text-slate-400 lg:hover:bg-inherit hover:bg-dark-green lg:mr-12 cursor-pointer">
              Account
            </p>
            <Link to="/cart">
              <p className="hidden lg:block text-sm p-3 lg:p-0 text-white-smoke lg:hover:text-slate-400 lg:hover:bg-inherit hover:bg-dark-green cursor-pointer">
                {cart.length ? <>Cart({cartCount})</> : <>Cart</>}
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
