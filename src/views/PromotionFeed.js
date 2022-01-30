import React from "react";
import { useSelector } from "react-redux";

const PromotionFeed = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <div className="grid lg:grid-cols-2 ">
      {products.length > 0 ? (
        <>
          {products[0]?.slice(8, 12).map((product) => {
            return (
              <div
                className={`flex flex-col items-center m-2 p-9 sm:p-10 md:p-14 lg:p-16 ${
                  product.id % 3 === 0 ? `bg-white` : `bg-dark-green`
                } rounded-lg mt-12 drop-shadow-lg `}
                key={product.id}
              >
                <div className="text-center max-w-lg">
                  <h1 className=" text-lg sm:text-2xl md:text-2xl lg:text-3xl font-extrabold line-clamp-1">
                    {product.title}
                  </h1>
                  <p
                    className={` ${
                      product.id % 3 === 0 ? `text-black` : `text-white-smoke`
                    } my-5 text-clip overflow-hidden line-clamp-3 sm:line-clamp-2 md:line-clamp-2 lg:line-clamp-2`}
                  >
                    {product.description}
                  </p>
                  <button
                    className={`border-4 ${
                      product.id % 3 === 0
                        ? `border-black hover:bg-black`
                        : `border-white-smoke hover:bg-white-smoke hover:text-slate-800 text-white-smoke`
                    } hover:text-white-smoke px-4 py-3 text-sm md:text-base`}
                  >
                    Learn More
                  </button>
                </div>
                <img
                  className=" h-72 w-72 lg:h-96 lg:w-96 mt-10 object-contain"
                  src={product.image}
                  alt="Promotion_Image"
                ></img>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {" "}
          {/* //Loading containers */}
          {Array(4)
            .fill()
            .map((_, i) => (
              <div
                class="border border-slate-300 m-5 p-5  shadow rounded-xl h-80"
                key={i}
              >
                <div class="animate-pulse  space-x-4">
                  <div class="rounded-full bg-slate-200 h-20 w-20"></div>
                  <div class="flex-1 space-y-6 py-1 ">
                    <div class="h-2 bg-slate-200 rounded mt-10"></div>
                    <div class="space-y-3">
                      <div class="grid grid-cols-3 gap-4">
                        <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                      </div>
                      <div class="h-2 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
export default PromotionFeed;
