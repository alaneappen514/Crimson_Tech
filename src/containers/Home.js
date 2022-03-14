import React, { useEffect } from "react";
import HomeView from "../views/Home/HomeView";
import { fetchProducts } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <main>
      <HomeView />
    </main>
  );
};

export default Home;
