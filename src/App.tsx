import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";
import Footer from "./common_components/hoc/footer/footer.screen";
import Home from "./screens/Home/home.screen"
import Navbar from "./common_components/hoc/navbar/navbar.screen";
import Shop from "./screens/Shop/shop.screen";
import store from "./store/store";
import ProductDetails from "./screens/product_details/product_details.screen";
import CheckoutScreen from "./screens/Checkout/checkout.screen";
import Cart from "./screens/Cart/cart.screen";
import Login from "./screens/login/login.screen";
import Signup from "./screens/signup/signup.screen";
import  { Toaster } from 'react-hot-toast';
import Main from "./common_components/hoc/main.hoc";
import Dashboard from "./admin/screen/dashboard/dashboard.admin_screen";
import UserDashboard from "./admin/screen/dashboard/user/user_dashboard";
import Bookings from "./admin/screen/dashboard/bookings/bookings_screen";
import Products from "./admin/screen/dashboard/products/products_screen";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>} />
          <Route path="/home" element={<Main><Home /></Main> } />
          <Route path="/shop" element={<Main><Shop /></Main>} />
          <Route path="/cart" element={<Main><Cart /></Main>} />
          <Route path="/product_details" element={<Main><ProductDetails /></Main>} />
          <Route path="/checkout" element={<Main><CheckoutScreen /></Main>} />
          <Route path="/login" element={<Main><Login /></Main>} />
          <Route path="/signup" element={<Main><Signup /></Main>} />
          <Route path='/admin/dashboard' element={<Main><Dashboard /></Main>}/>
          <Route path='/admin/users' element={<Main><UserDashboard  /></Main>}/>
          <Route path='/admin/bookings' element={<Main><Bookings /></Main>}/>
          <Route path='/admin/products' element={<Main><Products /></Main>}/>
        </Routes>
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
