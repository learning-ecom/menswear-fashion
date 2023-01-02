import PrimaryButton from "../../common_components/ui/button/primary_Button.ui";
import CartDetails from "../../common_components/ui/cart_details/cart_details.ui";
import "./cart.screen.scss";
import Input from "../../common_components/ui/input_field/input_field.ui";
import { useSetState } from "../../utils/functions.utils";
import Splider from "../../common_components/ui/splider/splider.ui";
import { Functions } from "../../utils/imports.utils";
import { Model } from "../../imports/model.import";
import { useEffect } from "react";
import { stat } from "fs";
import { useNavigate } from "react-router-dom";
// import { CartData } from "../../utils/redux.utils";
// import { useSelector } from "react-redux";

const Cart = () => {
  // redux
  // let cartData: any = useSelector((state: any) => state.cart);
  // console.log("cartData", cartData);
  var subTotal: number = 0;
  const navigate = useNavigate()
  const [state, setState] = useSetState({
    cart_data: [],
    coupon_data: [],
    discount_code: "",
    discount: 0,
    delivery_charges: 0,
    total:0,
    not_delivery_charges: 3000,
  });

  // getManyCart
  const getManyCart = async () => {
    Functions.notiflixLoader();
    try {
      const res: any = await Model.cart.getManyCart();
      // CartData(res.data)
      setState({ cart_data: res.data });
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };

  const getManyCoupon = async () => {
    Functions.notiflixLoader();
    try {
      const res: any = await Model.coupon.getManyCoupon();
      setState({ coupon_data: res.data });
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };

// hooks
  useEffect(() => {
    getManyCoupon();
    getManyCart();
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    if (state.discount_code.length > 0) {
      handleDiscount();
    }
    handleDeliveryCharges();
      // eslint-disable-next-line
    }, [state.cart_data]);

    useEffect(()=>{
      if (subTotal > 0) {
      handleTotal();
      }
    // eslint-disable-next-line

    },[state.delivery_charges,state.discount])

  const handleDiscount = async (data?: any) => {

    if (subTotal > 0) {
      if (state.discount_code.length > 0 ) {
          
          state.coupon_data?.forEach((item: any) => {
            if (state.discount_code === item.code) {
              setState({ discount: (subTotal * item.offer_value) / 100 });
            }
            else{
              Functions.notiflixFailure(" InValid Coupon Code ");
            }
          });
        
      } else if (data) {
      
        setState({ discount: 0 });
        Functions.notiflixFailure("Please Enter Coupon Code");
      }
    } else {
      setState({ discount_code: "" });
      setState({ discount: 0 });
      Functions.notiflixFailure("No Product Available");
    }

  };
  
  const handleDeliveryCharges = () => {

    if (subTotal >= state.not_delivery_charges || subTotal===0 ) {
      setState({ delivery_charges: 0 });
    } else {
      setState({ delivery_charges: 150 });
    }
    handleTotal()
  };

  const handleTotal=()=>{

    if(subTotal===0){
      setState({total:0})
    }
    else{
      setState({total:subTotal - state.discount + state.delivery_charges})
    }

  }

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
                subTotal += item.quantity * item.product.amount;
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
          <div className="cart_total_value_list">
            <div className="cart_total_header">PRICE DETAILS</div>
            <div className="cart_quantity_value cart_total">
              <div className="quantity__title cart_total_title">
                Price ({state.cart_data?.length} items)
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
          </div>
        </div>
        <div className="discount_wrapper">
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
        </div>
      </div>
      <Splider title={"You May Also Like"} />
    </section>
  );
};
export default Cart;
