import React from "react";
import { useSelector } from "react-redux";

const ProductView = () => {
  const product = useSelector((state) => state.product);

  return (
    <div className="container mx-auto p-4 mt-16">
      <div className="flex flex-wrap justify-evenly  ">
        <img
          className="w-80 h-80 lg:w-96 lg:h-96 object-contain bg-white border-dark-green border-2"
          src={product.image}
          alt="product_img"
        ></img>
        <div className="m-10 w-full lg:w-1/2 flex flex-col justify-center p-10 rounded-3xl bg-white drop-shadow-lg ">
          <div className="space-y-2">
            <h1 className="text-lg sm:text-2xl   font-extrabold">
              {product.title}
            </h1>
            {/* <div className="flex items-center">
              {Array(parseInt(product.rating.rate))
                .fill()
                .map((_, i) => (
                  <i className="text-crimson-red fas fa-star" key={i}></i>
                ))}
              <p className="mx-2">{product.rating.count}</p>
            </div> */}
          </div>
          <div className="my-4">
            <h3 className="sm:text-lg  font-extrabold">Category:</h3>
            <p className="text-base">{product.category}</p>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-lg md:text-2xl font-extrabold">
              ${product.price}
            </h1>
            <button className="bg-crimson-red text-white-smoke w-full px-4 py-3 text-base sm:text-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
