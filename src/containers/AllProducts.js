import React, { useEffect } from "react";
import AllProductsView from "../views/AllProducts/AllProductsView";
import { fetchProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      {Object.keys(products).length !== 0 ? (
        <AllProductsView products={products} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AllProducts;
