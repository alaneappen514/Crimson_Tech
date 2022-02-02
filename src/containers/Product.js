import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { useDispatch } from "react-redux";
import ProductView from "../views/Product/ProductView";

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProduct(productId));
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      <ProductView />
    </div>
  );
};

export default Product;
