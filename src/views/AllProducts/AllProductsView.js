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
  }, [category, min, max, products]);

  return (
    <div className="container mx-auto px-4">
      <section>
        <div className="flex my-8">
          {" "}
          <Link className="flex items-center" to={"/"}>
            {" "}
            <p className="hover:underline">Home</p>
          </Link>
          <Link className="flex items-center mx-3" to={"/all_products/"}>
            {" "}
            <i className="fa fa-chevron-left mr-2"></i>
            <p className="hover:underline">All Products</p>
          </Link>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 ">
          <div>
            <SortView
              items={items}
              products={products}
              setCategory={setCategory}
              setMin={setMin}
              setMax={setMax}
            />
            <hr className="w-full mb-14 sm:mb-16 md:mb-28"></hr>
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
      </section>
    </div>
  );
};

export default AllProductsView;
