import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";
import Footer from "./screens/Footer/footer.screen.";
import Home from "./screens/Home/home.screen";
import Navbar from "./screens/Navbar/navbar.screen";
import Shop from "./screens/Shop/shop.screen";
import store from "./store/store";
import Cart from "./screens/Cart/cart.screen";
import Signup from "./screens/Signup/signup.screen";
import Login from "./screens/Login/login.screen";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
