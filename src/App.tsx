import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";
import Footer from "./common_components/hoc/footer/footer.screen";
import Home from "./screens/home/home.screen"
import Navbar from "./common_components/hoc/navbar/navbar.screen";
import Shop from "./screens/shop/shop.screen";
import store from "./store/store";
import ProductDetails from "./screens/product_details/product_details.screen";
import CheckoutScreen from "./screens/checkout/checkout.screen";
import Cart from "./screens/cart/cart.screen";
import Login from "./screens/login/login.screen";
import Signup from "./screens/signup/signup.screen";
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Provider store={store}>
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
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              className: '',
              duration: 2000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                
              }
            }}
          />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
