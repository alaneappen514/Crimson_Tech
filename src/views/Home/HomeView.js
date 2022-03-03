import React from "react";
import { Link } from "react-router-dom";
import pixel_6 from "../../Images/pixel6.png";
import ProductFeed from "../Home/ProductFeed";
import PromotionFeed from "../Home/PromotionFeed";

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
                className="text-3xl md:text-4xl font-extrabold"
              >
                Better than Ever <br></br>Pixel 6
              </h1>

              <p className="my-7">
                Get yours today <strong>Free</strong> with activation.
              </p>
              <button className="border-4 text-sm border-slate-600 hover:bg-slate-600 hover:text-white-smoke px-4 py-3">
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
            <h1 className=" sm:text-xl md:text-2xl font-bold">
              {" "}
              Best Selling Products
            </h1>
            <Link to={"/all_products"}>
              <a className="text-gray-600 text-sm hover:underline" href="#">
                View All
              </a>
            </Link>
          </div>
          <div>
            <ProductFeed />
          </div>
        </div>
        <div className="Promotions my-10">
          <PromotionFeed />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
