import { useSetState } from "../../utils/functions.utils";
import Input from "../../common_components/ui/input_field/input_field.ui";
import "./checkout.screen.scss";
import PrimaryButton from "../../common_components/ui/button/primary_Button.ui";
import Assets from "../../imports/assets.imports";

const CheckoutScreen = () => {
  const [state, setState] = useSetState({
    name: "",
    lname: "",
    address: "",
    city: "",
    country: "",
    pincode: "",
    mobile: "",
    email: "",
  });
  return (
    <section className="checkout">
      <div className="checkout_title">Checkout</div>
      <div className="checkout_container">
        <div className="checkout_billing">
          <h4 className="billing_details">BILLING DETAILS</h4>
          <label htmlFor="" className="checkout_text">
            Name*
          </label>
          <Input
            onChange={(value: any) => setState({ name: value })}
            type={"text"}
            name={"name"}
            value={state.name}
            placeholder={"Name"}
            fontSize={"16px"}
          />
          <label htmlFor="" className="checkout_text">
            LastName*
          </label>
          <Input
            onChange={(value: any) => setState({ lname: value })}
            type={"text"}
            name={"name"}
            value={state.lname}
            placeholder={"LastName"}
            fontSize={"16px"}
          />
          <label htmlFor="" className="checkout_text">
            Street Address
          </label>
          <Input
            onChange={(value: any) => setState({ address: value })}
            type={"text"}
            name={"address"}
            value={state.address}
            placeholder={"Address"}
            fontSize={"16px"}
          />
          <label htmlFor="" className="checkout_text">
            Town/City*
          </label>
          <Input
            onChange={(value: any) => setState({ city: value })}
            type={"text"}
            name={"city"}
            value={state.city}
            placeholder={"City"}
            fontSize={"16px"}
          />
          <label htmlFor="" className="checkout_text">
            Country
          </label>
          <Input
            onChange={(value: any) => setState({ country: value })}
            type={"text"}
            name={"name"}
            value={state.country}
            placeholder={"Country"}
            fontSize={"16px"}
          />
          <label htmlFor="" className="checkout_text">
            Pincode*
          </label>
          <Input
            onChange={(value: any) => setState({ pincode: value })}
            type={"number"}
            name={"pincode"}
            value={state.pincode}
            placeholder={"Pincode"}
            fontSize={"16px"}
          />
          <label htmlFor="" className="checkout_text">
            Mobile*
          </label>
          <Input
            onChange={(value: any) => setState({ mobile: value })}
            type={"number"}
            name={"name"}
            value={state.mobile}
            placeholder={"mobile"}
            fontSize={"16px"}
          />
          <label htmlFor="" className="checkout_text">
            Email*
          </label>
          <Input
            onChange={(value: any) => setState({ email: value })}
            type={"email"}
            name={"email"}
            value={state.email}
            placeholder={"email"}
            fontSize={"16px"}
          />
        </div>
        <div className="checkout_order">
          <div className="checkout_right">
            <h4 className="your_order">YOUR ORDER</h4>
            <div className="order_title">
              <h4>Product</h4>
              <h4>Sub-total</h4>
            </div>
            <div className="checkout_product">
              <p>Nike shirt</p>
              <h4>&#x20B9; 300</h4>
            </div>
            <div className="checkout_product">
              <p>Nike pant</p>
              <h4>&#x20B9; 300</h4>
            </div>
            <div className="sub_total">
              <h4>Subtotal</h4>
              <h4>&#x20B9; 600</h4>
            </div>
            <div className="checkout_total">
              <h4>Total</h4>
              <h4 className="totalPrice_text">&#x20B9; 600</h4>
            </div>
            <div className="checkout_options">
              <div className="cashon_delivery">
                <input type="radio" name="" id="" />
                Cash on delivery
              </div>
              <div className="paypal">
                <input type="radio" name="" id="" />
                Paypal
                <img
                  className="cardsImage"
                  src={Assets.cardsImage}
                  alt="card"
                />
              </div>
            </div>

            <div className="terms_conditions">
              <input type="checkbox" name="" id="" />I agree to the website
              Terms and Conditions
            </div>
            <PrimaryButton
              text={"PLACE ORDER"}
              backgroundColor={"#000000"}
              style={{ borderRadius: "0px" }}
              fontFamily={"Jost"}
              fontSize={"14px"}
              fontWeight={500}
              // letteU+20B9;pacing={"2px"}
              padding={"0.5rem"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutScreen;
