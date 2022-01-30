import React from "react";
import { useSelector } from "react-redux";

const ProductFeed = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {products.length > 0 ? (
        <>
          {products[0]?.slice(0, 4).map((product) => {
            return (
              <div
                className="flex flex-col items-center m-5 p-5 bg-white rounded-3xl mt-12 drop-shadow-lg"
                key={product.id}
              >
                {" "}
                <img
                  className=" h-52 w-52 object-contain"
                  src={product.image}
                  alt="product-image"
                ></img>
                <h2 className="lg:text-xl text-lg font-bold mt-4 line-clamp-1">
                  {product.title}
                </h2>
                <div className="text-center">
                  <div className="flex justify-center ">
                    <div>
                      {/* //converts rate to an int and fills up an Array based on the number
                    /maps the icon */}
                      {Array(parseInt(product.rating.rate))
                        .fill()
                        .map((_, i) => (
                          <i
                            className="text-crimson-red fas fa-star"
                            key={i}
                          ></i>
                        ))}
                    </div>
                    <p className="mx-2"> {product.rating.count}</p>
                  </div>
                  <hr className="my-3 "></hr>
                  <h2 className="lg:text-xl text-lg font-extrabold">
                    ${product.price}
                  </h2>
                  <button className="border-4 border-crimson-red hover:bg-crimson-red hover:text-white-smoke my-3 px-4 py-3 text-sm md:text-base">
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {" "}
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

export default ProductFeed;
