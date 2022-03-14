import React, { useEffect } from "react";
import AllProductsView from "../views/AllProducts/AllProductsView";
import { fetchProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <main>
      {Object.keys(products).length !== 0 ? (
        <AllProductsView products={products} />
      ) : (
        <div className="h-96 flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-14 w-14 "></div>
        </div>
      )}
    </main>
  );
};

export default AllProducts;
