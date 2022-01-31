import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductView from "../views/ProductView";

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log("error", error);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <div>
      <ProductView />
    </div>
  );
};

export default Product;
