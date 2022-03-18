import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { product } = props;
  return (
    <div>
      <div className="flex justify-evenly  flex-wrap ">
        <img
          className="h-80 w-80 object-contain bg-white border-dark-green rounded-xl border p-2"
          src={product.image}
          alt="Product Img"
        ></img>
        <div className="mt-5 md:mt-0">
          <div className="w-80">
            <Link to={`/product/${product.id}`}>
              <h1 className="lg:text-xl xl:text-2xl font-extrabold hover:underline cursor-pointer">
                {product.title}
              </h1>
            </Link>
            <div className="flex items-center">
              {/* //converts rate to an int and fills up an Array based on the number
                    /maps the icon */}
              {Array(parseInt(product.rating.rate))
                .fill()
                .map((_, i) => (
                  <i className="text-crimson-red fas fa-star" key={i}></i>
                ))}
              <p className="mx-2"> {product.rating.rate}</p>
            </div>
            <p className="text-sm ">
              {" "}
              {product.category[0].toUpperCase() +
                product.category.substring(1)}
            </p>
            <p className="text-sm  text-clip overflow-hidden line-clamp-3 mt-3">
              {product.description}
            </p>
          </div>
          <div className="text-center md:text-left my-3 ">
            <h1 className="text-lg lg:text:xl xl:text-2xl font-extrabold">
              ${product.price}
            </h1>
            <Link to={`/product/${product.id}`}>
              <button className="bg-crimson-red hover:bg-crimson-light-red text-white-smoke  px-10 xl:px-16 py-2 text-sm ">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {" "}
        <hr className="my-16 md:my-28  w-5/6"></hr>
      </div>
    </div>
  );
};

export default Product;
