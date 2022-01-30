import React from "react";
import pixel_6 from "../Images/pixel6.png";
import ProductFeed from "./ProductFeed";
import PromotionFeed from "./PromotionFeed";
import Footer from "./Footer";

const HomeView = () => {
  return (
    <div>
      <div className=" Hero_Banner bg-light-blue">
        <div
          className="grid lg:grid-cols-2 pt-10
      "
        >
          <div className="flex items-center text-center justify-center p-6">
            <div>
              <h1
                style={{ lineHeight: "1.5em" }}
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold"
              >
                Better than Ever <br></br>Pixel 6
              </h1>

              <p className="my-7">
                Get yours today <strong>Free</strong> with activation.
              </p>
              <button className="border-4 border-slate-600 hover:bg-slate-600 hover:text-white-smoke px-4 py-3">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img
              className="max-w-full mt-16 lg:mt-0"
              src={pixel_6}
              alt="Google Pixel 6"
            ></img>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="Product_Feed">
          <div className="flex items-center space-x-10 mt-12">
            <h1 className=" sm:text-xl md:text-2xl lg:text-3xl font-bold">
              {" "}
              Best Selling Products
            </h1>
            <a className="text-gray-400 text-sm md:text-base" href="#">
              View All
            </a>
          </div>
          <div>
            <ProductFeed />
          </div>
        </div>
        <div className="Promotions my-10">
          <PromotionFeed />
        </div>
      </div>
      <div className="Footer pt-3">
        <Footer />
      </div>
    </div>
  );
};

export default HomeView;
