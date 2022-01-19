import React from "react";
import logo from "../Images/Logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black h-24 text-white-smoke no-underline flex">
        <div className="flex items-center  justify-between container mx-auto px-6">
          <div className="flex items-center space-x-14">
            <img
              className=" flex-1 w-20 h-20 rounded-full "
              src={logo}
              alt="logo"
            ></img>
            <a href="#">Shop</a>
            <a href="#">Deals</a>
            <form>
              <label for="search">
                <input
                  placeholder=" Search for anything..."
                  className="w-96 px-2 rounded-l-lg placeholder:italic focus:outline-none focus:ring-1 "
                  type="text"
                  id="inputSearch"
                  name="inputSearch"
                ></input>
              </label>
              <button className="bg-dark-green rounded-r-lg px-4">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
          <div className="flex space-x-14">
            <a href="#">Store</a>
            <a href="#">Account</a>
            <a href="#">Cart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
