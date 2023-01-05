import CartDetails from "../../common_components/ui/cart_details/cart_details.ui";
import "./cart.screen.scss";
import { useSetState } from "../../utils/functions.utils";
import Splider from "../../common_components/ui/splider/splider.ui";
import { Functions } from "../../utils/imports.utils";
import { Model } from "../../imports/model.import";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PriceDetails from "../../common_components/ui/price_details/price_details";
import { PriceData } from "../../utils/redux.utils";
import { useSelector } from "react-redux";

const Cart = () => {
  // redux
  var subTotal: number = 0;
  const navigate = useNavigate()
  const [state, setState] = useSetState({
    cart_data: [], 
  });

  // getManyCart
  const getManyCart = async () => {
    Functions.notiflixLoader();
    try {
      const res: any = await Model.cart.getManyCart();
      setState({cart_data:res.data})
      PriceData(res.data)
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };


// hooks
  useEffect(() => {
    getManyCart();
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
                    <CartDetails cartData={item} refresh={getManyCart} />
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
          {/* <div className="cart_total_value_list">
            <div className="cart_total_header">PRICE DETAILS</div>
            <div className="cart_quantity_value cart_total">
              <div className="quantity__title cart_total_title">
                Price ({priceData.data?.length} items)
              </div>
              <div className="quantity__value ">₹{subTotal}</div>
            </div>
            <div className="sub_total cart_total">
              <div className="sub_total_title cart_total_title">Discount</div>
              <div className="sub_total_value  ">₹{state.discount}</div>
            </div>
            <div className="discount cart_total">
              <div className="discount_title cart_total_title">
                Delivery Charges
              </div>
              <div className="discount_value ">{state.delivery_charges===0 && subTotal>0?"Free":"₹"+state.delivery_charges}</div>
            </div>
            <div className="line"></div>
            <div className="total cart_total">
              <div className="total_title cart_total_title">Total</div>
              <div className="total_value ">
                ₹{state.total}
              </div>
            </div>
            <div className="checkout">
              <PrimaryButton
                text={"PROCEED TO CHECKOUT"}
                onClick={()=>{navigate('/checkout')}}
                backgroundColor={"#000000"}
                style={{ borderRadius: "0px", border: "#000000 2px solid" }}
                fontFamily={"Jost"}
                fontSize={"14px"}
                fontWeight={600}
                letterSpacing={"2px"}
              />
            </div>
          </div> */}
        </div>
        {/* <div className="discount_wrapper">
          <div className="discount_header">Got a Discount Code?</div>
          <div className="discount_code">
            <Input
              onChange={(value: any) => setState({ discount_code: value })}
              width={"250px"}
              type={"text"}
              name={"discount"}
              value={state.discount_code}
              placeholder={"Enter Your Code"}
            />
            <PrimaryButton
              text={"APPLY"}
              backgroundColor={"#000000"}
              style={{ borderRadius: "0px", border: "#000000 2px solid" }}
              fontFamily={"Jost"}
              fontSize={"14px"}
              fontWeight={600}
              letterSpacing={"2px"}
              width={"250px"}
              onClick={() => handleDiscount("coupon")}
            />
          </div>
        </div> */}
      </div>
      <Splider title={"You May Also Like"} />
    </section>
  );
};
export default Cart;
