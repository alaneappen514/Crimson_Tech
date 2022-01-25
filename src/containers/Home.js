import React from "react";
import Navbar from "../views/Navabar";
import HomeView from "../views/HomeView";

const Home = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <section>
        <HomeView />
      </section>
      <footer></footer>
    </div>
  );
};

export default Home;
