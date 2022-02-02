import React, { useEffect } from "react";
import HomeView from "../views/Home/HomeView";
import { fetchProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  //Access all products from store
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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
