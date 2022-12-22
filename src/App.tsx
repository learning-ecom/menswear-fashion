import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./common_components/hoc/footer/footer.screen";
import Home from "./screens/Home/home.screen";
import Navbar from "./common_components/hoc/navbar/navbar.screen";
import Shop from "./screens/Shop/shop.screen";
import ProductDetails from "./screens/product_details/product_details.screen";
import CheckoutScreen from "./screens/Checkout/checkout.screen";
import Cart from "./screens/Cart/cart.screen";
import Login from "./screens/Login/login.screen";
import Signup from "./screens/Signup/signup.screen";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product_details" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
