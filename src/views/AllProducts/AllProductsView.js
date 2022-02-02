import React from "react";
import FilterView from "./FilterView";
const AllProductsView = () => {
  return (
    <div className="px-20">
      <FilterView />
      <div className="flex">
        <img
          className="h-80 w-80 object-contain bg-white border-dark-green rounded-xl border p-2"
          src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
          alt="product_Img"
        ></img>
        <div>
          <h1>Title</h1>
          <p>x x x x x (789)</p>
          <p>Mens Clothing</p>
          <p>
            95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach,
            Lightweight fabric with great stretch for comfort, Ribbed on sleeves
            and neckline / Double stitching on bottom hem
          </p>
        </div>
        <div>
          <h1>$78.99</h1>
          <button className="bg-crimson-red text-white-smoke my-3 px-4 py-3 text-sm md:text-base">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProductsView;
