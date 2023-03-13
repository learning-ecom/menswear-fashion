import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Model } from "../../imports/model.import";
import { notiflixFailure, useQuery, useSetState } from "../../utils/functions.utils";
import { Assets, Functions } from "../../utils/imports.utils";
import { PriceData } from "../../utils/redux.utils";
import InviteModal from "../../common_components/ui/invite_modal/invite_modal";
import PrimaryButton from "../../common_components/ui/button/primary_Button.ui";

import "./price_details.component.scss";

const PriceDetails = (props: any) => {
 

  const CouponRef: any = useRef();
  var subTotal: any = 0;
  var discount: any = 0;
  //  query
  const query: any = useQuery();
  const params_id: any = query.get("id");
  const session_id: any = query.get("session");
  
  let priceData: any = useSelector((state: any) => state.price);
  const navigate = useNavigate();
  const [state, setState] = useSetState({
    sub_total: 0,
    coupon_id: "",
    payment_type: "",
    checkout_data: [],
    coupon_data: [],
    apply_coupon_code:"",
    apply_coupon: 0,
    discount: 0,
    delivery_charges: 0,
    total: 0,
    not_delivery_charges: 3000,
    cash_on_delivery: false,
    online_payment: false,
    terms_condition: false,
  });

  
    const handlePrice = () => {
      priceData.data?.forEach((item: any) => {
        subTotal += item.quantity * item.product.amount;
        discount +=item.quantity * item.product.amount * (item.product.discount / 100);
      });
      setState({ sub_total: subTotal, discount: discount});
    };
  
    // payment
    const handlePayment = (data: any) => {
      if (state.cash_on_delivery) {
        setState({
          cash_on_delivery: false,
          online_payment: true,
          payment_type: data,
        });
        setState({ online_payment: true });
      } else if (state.online_payment) {
        setState({
          online_payment: false,
          cash_on_delivery: true,
          payment_type: data,
        });
      } else {
        if (data === "Cash on Delivery") {
          setState({ cash_on_delivery: true, payment_type: data });
        } else if (data === "Online Payment") {
          setState({ online_payment: true, payment_type: data });
        }
      }
    };
  
    const handleTermsCondition = () => {
      if (state.terms_condition) {
        setState({ terms_condition: false });
      } else {
        setState({ terms_condition: true });
      }
    };
  
    const handleDeliveryCharges = () => {
      if (
        state.sub_total-state.discount >= state.not_delivery_charges ||
        state.sub_total === 0
      ) {
        setState({ delivery_charges: 0 });
      } else {
        setState({ delivery_charges: 150 });
      }
    };
  
    const handleTotal = () => {
      if (state.sub_total === 0) {
        setState({ total: 0 });
      } else {
        setState({
          total: state.delivery_charges + state.sub_total -(state.sub_total-state.discount) * state.apply_coupon / 100 -state.discount
        });
      }
    };

  const getManyPopulateCart = async () => {
    Functions.notiflixLoader();
    try {
      const res: any = await Model.cart.getManyPopulateCart();
      PriceData(res.data);
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };


  const getSingleCart = async () => {
    try {
      const query:any = {
        product_id: params_id
      }
      const res: any = await Model.singlecart.getSingleCart(query);
      PriceData([res.data])
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };
  
// coupon get
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
  
  // create payment stripe
  const createStripe = async () => {
    Functions.notiflixLoader();
    try {
      setState({payment_type:"Online Payment", online_payment:true})
      const query:any={
        cart:priceData.data,
        coupon_code:state.apply_coupon_code,
        price_amount:state.sub_total-state.discount,
        not_delivery_charges:state.not_delivery_charges
      }
      const res: any = await Model.stripe.createStripe(query);
      if(props.type === "Checkout" ){
        window.location.href=res.data
      }
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };

  //getStripe
  // const getStripe = async () => {
  //   Functions.notiflixLoader();
  //   try {
  //     const query:any={
  //       session_id:session_id
  //     }
  //     const res: any = await Model.stripe.getStripe(query);
  //     console.log(res)
  //   } catch (error) {
  //     Functions.notiflixFailure(error);
  //   } finally {
  //     Functions.notiflixRemove();
  //   }
  // };




  const createBooking = async () => {
    Functions.notiflixLoader();
    try {
      const query:any = {
          amount: state.total,
          name: props.addressData.name,
          street: props.addressData.street,
          city: props.addressData.city,
          country: props.addressData.country,
          pincode: props.addressData.pincode,
          delivery_number: props.addressData.delivery_number,
          cart: priceData.data
      };      
      if(state.coupon_id.length>0){
        query.coupon=state.coupon_id
      }
      if(session_id && session_id.length>0){
        query.stripe_id=session_id
        query.payment_type='Online Payment'
      }
      else{
        query.payment_type=state.payment_type
      }
      console.log(query)
      await Model.booking.createBooking(query);
      // navigate('/home')
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };
  // hooks
  useEffect(() => {
    if (params_id && params_id.length>0 ) {
      getSingleCart();
      getManyCoupon();
    }
    else if(props.type === "Checkout" && !params_id){
      getManyPopulateCart();
      getManyCoupon();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handlePrice();
    // eslint-disable-next-line
  }, [priceData.data]);

  useEffect(() => {
    handleDeliveryCharges();
    handleTotal();
    // eslint-disable-next-line
  }, [state.delivery_charges, state.discount, state.sub_total,state.coupon_id]);


  useEffect(()=>{
    if(props.type === "Checkout" ){
      if(session_id &&props.addressData.name && state.total && priceData.data &&session_id?.length>0){  
        // getStripe()
          createBooking()
      }
    }
    // eslint-disable-next-line
    },[session_id,state.total,priceData.data,state.coupon_id])
  return (
    <>
      {props.type === "Cart" && (
        <div className="cart_total_value_list">
          <div className="cart_total_header">PRICE DETAILS</div>
          <div className="cart_quantity_value cart_total">
            <div className="sub_total_title cart_total_title">
              Price ({priceData.data?.length} items)
            </div>
            <div className="price_value ">₹{state.sub_total}</div>
          </div>
          <div className=" discount cart_total">
            <div className="discount_title cart_total_title">Discount</div>
            <div className="discount_value">--₹{state.discount}</div>
          </div>
          <div className=" delivery_charges cart_total">
            <div className="delivery_charges_title cart_total_title">
              Delivery Charges
            </div>
            <div className="delivery_charges_value ">
              {state.delivery_charges === 0 && state.sub_total > 0
                ? "Free"
                : "₹" + state.delivery_charges}
            </div>
          </div>
          <div className="line"></div>
          <div className="total cart_total">
            <div className="total_header cart_total_title">Total</div>
            <div className="total_value ">₹{state.total}</div>
          </div>
          <div className="checkout">
            <PrimaryButton
              text={"PROCEED TO CHECKOUT"}
              onClick={() => {
                navigate("/checkout");
              }}
              backgroundColor={"#000000"}
              style={{ borderRadius: "0px", border: "#000000 2px solid" }}
              fontFamily={"Jost"}
              fontSize={"14px"}
              fontWeight={600}
              letterSpacing={"2px"}
            />
          </div>
        </div>
      )}
      {props.type === "Checkout" && (
        <div className="checkout_order">
          <div className="checkout_right">
            <div className="coupon_header">Coupon</div>
            <div className="coupons">
              <div className="coupon_title">Apply Coupons</div>
              <PrimaryButton
                text={"APPLY"}
                backgroundColor={"#000000"}
                style={{ borderRadius: "0px", border: "#000000 2px solid" }}
                fontFamily={"Jost"}
                fontSize={"14px"}
                fontWeight={600}
                letterSpacing={"2px"}
                onClick={() => {
                  CouponRef.current.openModal();
                }}
                // color={"#000000"}
              />
            </div>
            <InviteModal
              onClick={(value: any, couponid: any,couponcode:any) => {
               
                setState({ apply_coupon: value, coupon_id: couponid,apply_coupon_code:couponcode });
              }}
              couponData={state.coupon_data}
              ref={CouponRef}
              type={"Coupon"}
            />
            <div className="coupon_offer">Get 10% New Year Offer</div>
            <div className="your_order">YOUR ORDER</div>
            <div className="order_title">
              <div className="product_header">Product</div>
              <div className="price_header">Price</div>
            </div>
            <div className="products">
              {priceData?.data?.map((item: any, index: number) => {
                return (
                  <div className="checkout_product" key={index}>
                    <div>
                      {item.product.brand} {item.product.categories[0]}
                    </div>
                    <div>&#x20B9;{item.product.amount * item.quantity}</div>
                  </div>
                );
              })}
            </div>

            <div className="sub_total">
              <div>Subtotal</div>
              <div>&#x20B9;{state.sub_total}</div>
            </div>
            <div className="discount_coupon_delivery_charges">
              <div className=" discount cart_total">
                <div className="discount_title cart_total_title">Discount</div>
                <div className="discount_value">--₹{state.discount}</div>
              </div>
              <div className=" coupon cart_total">
                <div className="coupon_title cart_total_title">Coupon</div>
                <div className="coupon_value">
                  &#x20B9;
                  {state.apply_coupon !== 0
                    ? ((state.sub_total - state.discount) *
                        state.apply_coupon) /
                      100
                    : 0}
                </div>
              </div>
              <div className="delivery_charges cart_total">
                <div className="delivery_charges_title cart_total_title">
                  Delivery Charges
                </div>
                <div className="delivery_charges_value ">
                  {state.delivery_charges === 0 && state.sub_total > 0
                    ? "Free"
                    : "₹" + state.delivery_charges}
                </div>
              </div>
            </div>
            <div className="checkout_total">
              <div>Total</div>
              <div className="totalPrice_text">
                &#x20B9;
                {state.sub_total > 0 &&
                  state.total
                    }
              </div>
            </div>
            <div className="checkout_options">
              <div className="payment">
                <div
                  className="cash_on_delivery"
                  onClick={() => handlePayment("Cash on Delivery")}
                >
                  <img
                    src={
                      state.cash_on_delivery
                        ? Assets.filter_active
                        : Assets.filter_inactive
                    }
                    alt=""
                  />
                  Cash on delivery
                </div>
                <div
                  className="online_payment"
                  onClick={() => handlePayment("Online Payment")}
                >
                  <img
                    src={
                      state.online_payment
                        ? Assets.filter_active
                        : Assets.filter_inactive
                    }
                    alt=""
                  />
                  Stripe Payment
                </div>
              </div>
              <div className="payment_pic">
                <img
                  className="cardsImage"
                  src={Assets.cardsImage}
                  alt="card"
                />
              </div>
            </div>

            <div className="terms_conditions" onClick={handleTermsCondition}>
              <img
                src={
                  state.terms_condition
                    ? Assets.filter_active
                    : Assets.filter_inactive
                }
                alt=""
              />
              I agree to the website Terms and Conditions
            </div>
            <PrimaryButton
              text={"PLACED ORDER"}
              backgroundColor={"#000000"}
              style={{ borderRadius: "0px", border: "#000000 2px solid" }}
              fontFamily={"Jost"}
              fontSize={"14px"}
              fontWeight={600}
              letterSpacing={"2px"}
              onClick={()=>state.payment_type==='Online Payment'?createStripe():state.payment_type==="Cash on Delivery"?createBooking():
            notiflixFailure('please click on payment method')
            }

            />
          </div>
        </div>
      )}
    </>
  );
};

export default PriceDetails;
