import React, { useEffect } from "react";
import HomeView from "../views/Home/HomeView";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  //Access all products from store
  const products = useSelector((state) => state);
  const API_URL = "https://fakestoreapi.com/products";
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get(API_URL).catch((error) => {
      console.log("error", error);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);

  return (
    <div>
      <section>
        <HomeView />
      </section>
    </div>
  );
};

export default Home;
