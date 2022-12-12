import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/home.screen";
import Navbar from "./common_components/hoc/navbar/navbar.screen";
import Shop from "./screens/Shop/shop.screen";
import ProductDetails from "./screens/product_details/product_details.screen";
import Cart from "./screens/Cart/cart.screen";
import Signup from "./screens/Signup/signup.screen";
import Login from "./screens/Login/login.screen";
import Footer from "./common_components/hoc/footer/footer.screen";
import "./App.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product_details" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
