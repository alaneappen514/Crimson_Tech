import React from "react";
import { userSelector, useSelector } from "react-redux";

const PromotionFeed = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-2">
      {products[0]?.slice(8, 12).map((product) => {
        return (
          <div
            className={`flex flex-col items-center m-2 p-9 sm:p-10 md:p-14 lg:p-16 ${
              product.id % 3 == 0 ? `bg-white` : `bg-dark-green`
            } rounded-lg mt-12 drop-shadow-lg `}
            key={product.id}
          >
            <div className="text-center max-w-lg">
              <h1 className=" text-lg sm:text-2xl md:text-2xl lg:text-3xl font-extrabold line-clamp-1">
                {product.title}
              </h1>
              <p
                className={` ${
                  product.id % 3 == 0 ? `text-black` : `text-white-smoke`
                } my-5 text-clip overflow-hidden line-clamp-4 sm:line-clamp-2 md:line-clamp-2 lg:line-clamp-2`}
              >
                {product.description}
              </p>
              <button
                className={`border-4 ${
                  product.id % 3 == 0
                    ? `border-black hover:bg-black`
                    : "border-white-smoke hover:bg-white-smoke text-white hover:text-black"
                } hover:text-white-smoke px-4 py-3 text-sm md:text-base`}
              >
                Learn More
              </button>
            </div>
            <img
              className=" h-72 w-72 lg:h-96lg:w-96 mt-10 object-contain"
              src={product.image}
              alt="product-image"
            ></img>
          </div>
        );
      })}
    </div>
  );
};
export default PromotionFeed;
