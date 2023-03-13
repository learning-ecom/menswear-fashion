import CartDetails from "../../components/cart_details/cart_details.component";
import "./cart.screen.scss";
import { useSetState } from "../../utils/functions.utils";
import Splider from "../../common_components/ui/splider/splider.ui";
import { Functions } from "../../utils/imports.utils";
import { Model } from "../../imports/model.import";
import { useEffect } from "react";
import PriceDetails from "../../components/price_details/price_details.component";
import { PriceData } from "../../utils/redux.utils";
import { useNavigate } from "react-router";

const Cart = () => {
  // redux
  var subTotal: number = 0;
  const navigate=useNavigate()
  const [state, setState] = useSetState({
    cart_data: [], 
  });

  // getManyCart
  const getManyPopulateCart = async () => {
    Functions.notiflixLoader();
    try {
      const res: any = await Model.cart.getManyPopulateCart();
      
      setState({cart_data:res.data})
      PriceData(res.data)
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };
  useEffect(() => {
    if (!localStorage.token) {
      navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

// hooks
  useEffect(() => {
    if (localStorage.token) {
    getManyPopulateCart();
    }
    // eslint-disable-next-line
  }, []);

      
  


  return (
    <section className="cart">
      <div className="cart_container">
        <div className="cart-header">
          <div className="cart_title">My Cart</div>
          <div className="cart_desc">Items are reserved for 60 minutes</div>
        </div>
        <div className="cart_wrapper">
          <div className="cart_product_list">
            <div className="cart_product_header">
              <div className="product_title">Product</div>
              <div className="size_title">Size</div>
              <div className="price_title">Price</div>
              <div className="quantity_title">Quantity</div>
              <div className="total_title">Total</div>
            </div>
            <div className="cart_list_items">
              {state.cart_data?.map((item: any, index: number) => {
                subTotal += item.quantity * (item.product.amount-item.product.amount*item.product.discount/100);
                return (
                  <div key={index}>
                    <CartDetails cartData={item} refresh={getManyPopulateCart} />
                  </div>
                );
              })}
            </div>
            <div className="cart_sub_total_value">
              <div className="card_detail"></div>
              <div className="cart_sub_total">Sub-total</div>
              <div className="cart_total_value">₹{subTotal}</div>
            </div>
          </div>
          <PriceDetails type={"Cart"} />
      </div>
      </div>
      <Splider title={"You May Also Like"} />
    </section>
  );
};
export default Cart;
