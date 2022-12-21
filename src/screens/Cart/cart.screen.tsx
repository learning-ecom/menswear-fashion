import PrimaryButton from "../../common_components/ui/button/primary_Button.ui";
import CartDetails from "../../common_components/ui/cart_details/cart_details.ui";
import "./cart.screen.scss";
import Input from "../../common_components/ui/input_field/input_field.ui";
import { useSetState } from "../../utils/function.utils";
import Splider from "../../common_components/ui/splider/splider.ui";

const Cart = () => {
  const [state, setState] = useSetState({
    discount: "",
  });
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
              <div className="price_title">Price</div>
              <div className="quantity_title">Quantity</div>
              <div className="total_title">Total</div>
            </div>
            <div className="cart_list_items">
              <CartDetails />
              <CartDetails />
              <CartDetails />
            </div>
            <div className="cart_sub_total_value">
              <div className="card_detail"></div>
              <div className="cart_sub_total">Sub-total</div>
              <div className="cart_total_value">$400</div>
            </div>
          </div>
          <div className="cart_total_value_list">
            <div className="cart_total_header">CART TOTAL</div>
            <div className="cart_quantity_value cart_total">
              <div className="quantity__title cart_total_title">Quantity</div>
              <div className="quantity__value ">4*$200</div>
            </div>
            <div className="sub_total cart_total">
              <div className="sub_total_title cart_total_title">Sub-total</div>
              <div className="sub_total_value ">$800</div>
            </div>
            <div className="discount cart_total">
              <div className="discount_title cart_total_title">Discount</div>
              <div className="discount_value ">$0</div>
            </div>
            <div className="line"></div>
            <div className="total cart_total">
              <div className="total_title cart_total_title">Total</div>
              <div className="total_value ">$800</div>
            </div>
            <div className="checkout">
              <PrimaryButton
                text={"PROCEED TO CHECKOUT"}
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
              onChange={(value: any) => setState({ discount: value })}
              width={"250px"}
              type={"text"}
              name={"discount"}
              value={state.discount}
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
            />
          </div>
        </div>
      </div>
      <Splider title={"You May Also Like"} />
    </section>
  );
};
export default Cart;
