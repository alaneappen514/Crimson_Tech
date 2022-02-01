import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductView from "../views/Product/ProductView";

const Product = () => {
  const { productId } = useParams();
  const API_PRODUCT_ID = `https://fakestoreapi.com/products/${productId}`;
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios.get(API_PRODUCT_ID).catch((error) => {
      console.log("error", error);
    });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
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
