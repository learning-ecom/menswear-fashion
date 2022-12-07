import { BrowserRouter, Route,   Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';
import Footer from './screens/Footer/footer.screen.';
import Home from './screens/Home/home.screen';
import Navbar from './screens/Navbar/navbar.screen';
import Shop from './screens/Shop/shop.screen';
import store from './store/store';
import Cart from './screens/Cart/cart.screen';

function App() {
  return (

<Provider store={store}>

    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
     
        </Routes>
        <Footer/>
      </BrowserRouter>
</Provider>

  
  );
}

export default App;
