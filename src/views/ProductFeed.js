import React from "react";
import { useSelector } from "react-redux";

const ProductFeed = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <div className="grid grid-flow-row-dense xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {products.length > 0 ? (
        <>
          {products[0]?.map((product) => {
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
                  <div>x x x x x 278</div>
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
        <p>hello</p>
      )}
    </div>
  );
};

export default ProductFeed;
