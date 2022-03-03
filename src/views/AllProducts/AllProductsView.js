import React, { useEffect, useState } from "react";
import SortView from "./SortView";
import Products from "../AllProducts/Products";
import { Link } from "react-router-dom";

const AllProductsView = (props) => {
  const { products } = props;

  const [items, setItems] = useState(products[0]);
  const [category, setCategory] = useState("all");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  useEffect(() => {
    let filterProducts = products[0];
    if (category !== "all") {
      filterProducts = filterProducts.filter(
        (product) => product.category === category
      );
    }
    if (min !== "") {
      filterProducts = filterProducts.filter((product) => product.price > min);
    }
    if (max !== "") {
      filterProducts = filterProducts.filter((product) => product.price < max);
    }
    setItems(filterProducts);
  }, [category, min, max]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex my-8">
        {" "}
        <Link to={"/"}>
          {" "}
          <p className="hover:underline">_Home</p>
        </Link>
        <Link to={"/all_products/"}>
          {" "}
          <p className="hover:underline">_All Products</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 ">
        <div>
          <SortView
            items={items}
            products={products}
            setCategory={setCategory}
            setMin={setMin}
            setMax={setMax}
          />
          <hr className="w-full mb-16 md:mb-28"></hr>
          {items.length !== 0 ? (
            items.map((product) => (
              <Products key={product.id} product={product} />
            ))
          ) : (
            <div className="w-full h-96 text-center">
              <p>No Products Found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProductsView;
