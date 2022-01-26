import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1290 },
    items: 3,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 570 },
    items: 2,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 20,
  },
};

const ProductFeed = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderProducts = products[0]?.map((product) => {
    return (
      <div
        className=" w-60 md:w-80 lg:w-96  bg-white-smoke rounded-3xl mt-12 drop-shadow-lg"
        key={product.id}
      >
        <div className="text-center py-2 px-10 lg:py-4  lg:px-16">
          {" "}
          <img src={product.image} alt="product-image"></img>
          <h2 className="lg:text-xl font-bold">{product.title}</h2>
          <div>x x x x x 278</div>
          <hr className="my-3 "></hr>
          <h2 className="lg:text-xl font-extrabold">{product.price}</h2>
          <button className="border-4 border-crimson-red hover:bg-crimson-red hover:text-white-smoke my-3 px-4 py-3 text-xs md:text-base">
            Buy Now
          </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Carousel partialVisible={true} responsive={responsive} ssr={true}>
        <>{renderProducts}</>
      </Carousel>
    </div>
  );
};

export default ProductFeed;
