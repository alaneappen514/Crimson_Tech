import Home from "./containers/Home";
import Product from "./containers/Product";
import AllProductsView from "./containers/AllProducts";
import Footer from "./views/Footer";
import Navbar from "./views/Navabar";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <nav>
            <Navbar />
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all_products/" element={<AllProductsView />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
          <footer className="pt-3">
            <Footer />
          </footer>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
