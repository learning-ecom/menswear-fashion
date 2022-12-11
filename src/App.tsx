import { BrowserRouter, Route,   Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';
import Footer from "./common_components/hoc/footer/footer.screen";

import Home from './screens/home/home.screen';
import Navbar from './common_components/hoc/navbar/navbar.screen';
import Shop from './screens/shop/shop.screen';
import store from './store/store';
import ProductDetails from './screens/product_details/product_details.screen';
import Cart from './screens/cart/cart.screen';

function App() {
  return (

<Provider store={store}>

    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/product_details" element={<ProductDetails/>}/>
     
        </Routes>
        <Footer/>
      </BrowserRouter>
</Provider>

  
  );
}

export default App;
