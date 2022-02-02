import Home from "./containers/Home";
import Product from "./containers/Product";
import Footer from "./views/Footer";
import Navbar from "./views/Navabar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <footer className="pt-3">
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
