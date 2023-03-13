import {
  capitalizeFirstLetter,
  useSetState,
} from "../../utils/functions.utils";
import Input from "../../common_components/ui/input_field/input_field.ui";
import "./checkout.screen.scss";
import PrimaryButton from "../../common_components/ui/button/primary_Button.ui";
import Assets from "../../imports/assets.imports";
import { useEffect, useRef } from "react";
import "../../common_components/ui/invite_modal/invite_modal.scss";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Functions, NavButton } from "../../utils/imports.utils";
import InviteModal from "../../common_components/ui/invite_modal/invite_modal";
import { Model } from "../../imports/model.import";
import PriceDetails from "../../components/price_details/price_details.component";
import { useNavigate } from "react-router";

const CheckoutScreen = () => {
  const ModalRef: any = useRef();
  const navigate=useNavigate()

  var address: any;
  
  const [state, setState] = useSetState({
    coupon_id: "",
    cart_id: [],
    payment_type: "",
    address_id: "",
    address_data: [],
    name: "",
    street: "",
    city: "",
    country: "",
    pincode: "",
    delivery_number: "",
    select_address: false,
    isModalOpen: false,
    user_data: {},
  });

  const getUser = async () => {
    try {
      const res: any = await Model.user.getUser({});
      setState({ user_data: res.data });
      setState({ address_data: res.data?.address[0] });
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };



  const createBillingAddress = async () => {
    try {
      const query = {
        name: state.name,
        street: state.street,
        city: state.city,
        country: state.country,
        pincode: state.pincode,
        delivery_number: state.delivery_number,
      };
      await Model.address.createAddress(query);
      setState({ isModalOpen: false });
      setState({
        address_id: "",
        name: "",
        street: "",
        city: "",
        country: "",
        pincode: "",
        delivery_number: "",
      });
      getUser();
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };

  const defaultBillingAddress = async (address_id: any) => {
    try {
      const query = {
        address_id: address_id,
      };
      await Model.address.defaultAddress(query);

      setState({ isModalOpen: false });
      getUser();
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };

  const defaultAddress = (item: any) => {
    address = state.address_data;
    if (address._id === item._id) {
      address = [];
    } else {
      address = [];
      address.push(item);
    }
    setState({ address_data: address });
    ModalRef.current.openModal();
  };

 
  useEffect(() => {
    if (!localStorage.token) {
      navigate('/login');
    }
    else{
      getUser();
    }
    // eslint-disable-next-line
  }, []);

  const removeBillingAddress = async (address_id: any) => {
    try {
      const query = {
        address_id: address_id,
      };
      await Model.address.removeAddress(query);
      getUser();
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };

  const updateBillingAddress = async () => {
    try {
      const query = {
        address_id: state.address_id,
        name: state.name,
        street: state.street,
        city: state.city,
        country: state.country,
        pincode: state.pincode,
        delivery_number: state.delivery_number,
      };
      await Model.address.editAddress(query);
      setState({ isModalOpen: false });
      setState({
        address_id: "",
        name: "",
        street: "",
        city: "",
        country: "",
        pincode: "",
        delivery_number: "",
      });
      getUser();
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };

  return (
    <section className="checkout">
      <div className="checkout_title">Checkout</div>
      <div className="checkout_container">
        <div className="checkout_billing">
          <div className="add_address_details">
            <div className="delivery_address">Select Delivery Address</div>
            <PrimaryButton
              text={"Add New Address"}
              className={"send_invite_button"}
              onClick={() => {
                setState({
                  address_id: "",
                  name: "",
                  street: "",
                  city: "",
                  country: "",
                  pincode: "",
                  delivery_number: "",
                  isModalOpen: true,
                });
              }}
              backgroundColor={"#000000"}
              style={{ borderRadius: "0px", border: "#000000 2px solid" }}
              fontFamily={"Jost"}
              fontSize={"14px"}
              fontWeight={600}
              letterSpacing={"2px"}
            />
          </div>
          <div className="show_address">
            <div className="default_address">Default Address</div>
            <div className="address_details">
              {state.user_data?.address?.map((item: any, index: number) => (
                <div className="address_icon_detail" key={index}>
                  <div
                    className="select_address"
                    onClick={() => defaultAddress(item)}
                  >
                    <img
                      src={
                        index === 0
                          ? Assets.filter_active
                          : Assets.filter_inactive
                      }
                      alt=""
                    />
                  </div>

                  <div className="address_detail">
                    <div
                      className="checkout_address"
                      onClick={() => defaultAddress(item)}
                    >
                      <div className="address_name">{item.name}</div>
                      <div className="address">{item.street + ","}</div>
                      <div className="address">
                        {item.city + "," + item.country + "-" + item.pincode}
                      </div>
                      <div className="mobile">
                        <div className="mobile_title">Mobile:</div>
                        <div className="mobile_number">
                          {item.delivery_number}
                        </div>
                      </div>
                    </div>
                    <div className="remove_edit_btn">
                      <PrimaryButton
                        text={"Remove"}
                        className={"send_invite_button"}
                        onClick={() => {
                          removeBillingAddress(item._id);
                        }}
                        backgroundColor={"#000000"}
                        style={{
                          borderRadius: "0px",
                          border: "#000000 2px solid",
                        }}
                        fontFamily={"Jost"}
                        fontSize={"10px"}
                        fontWeight={600}
                        letterSpacing={"2px"}
                      />
                      <PrimaryButton
                        text={"Edit"}
                        className={"send_invite_button"}
                        onClick={() => {
                          setState({
                            address_id: item._id,
                            name: item.name,
                            street: item.street,
                            city: item.city,
                            country: item.country,
                            pincode: item.pincode,
                            delivery_number: item.delivery_number,
                            isModalOpen: true,
                          });
                        }}
                        backgroundColor={"#ffffff"}
                        color={"#000000"}
                        style={{
                          borderRadius: "0px",
                          border: "#000000 2px solid",
                        }}
                        fontFamily={"Jost"}
                        fontSize={"10x"}
                        fontWeight={600}
                        letterSpacing={"2px"}
                      />
                    </div>
                    <InviteModal
                      ref={ModalRef}
                      address={state.address_data}
                      type={"defaultAddress"}
                      onClick={defaultBillingAddress}
                      cancel={() => setState({ address_data: [] })}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="option_address">
            <PrimaryButton
              text={"Add New Address"}
              className={"send_invite_button"}
              onClick={() => {
                setState({
                  address_id: "",
                  name: "",
                  street: "",
                  city: "",
                  country: "",
                  pincode: "",
                  delivery_number: "",
                  isModalOpen: true,
                });
              }}
              icon={Assets.plus}
              backgroundColor={"#ffffff"}
              color={"#000000"}
              style={{ borderRadius: "0px", border: "#000000 2px solid" }}
              fontFamily={"Jost"}
              fontSize={"14px"}
              fontWeight={600}
              letterSpacing={"2px"}
            />
          </div>
          <div className="Model">
            <Modal
              open={state.isModalOpen}
              // ref={ModalRef}
              onClose={() => {
                setState({ isModalOpen: false });
              }}
              closeOnOverlayClick
              center
              showCloseIcon={false}
              classNames={{
                overlay: "customOverlay",
                modal: "billing_model_wrapper",
              }}
            >
              <div className="invite_container">
                <div className="invite_wrapper">
                  <div className="invite_header">
                    <div
                      className="invite_heading"
                      style={{ fontSize: "18px" }}
                    >
                      BILLING DETAILS
                    </div>
                    <NavButton
                      icon={Assets.black_close}
                      onClick={() => {
                        setState({ isModalOpen: false });
                      }}
                      style={{ height: "30px", width: "30px" }}
                    />
                  </div>
                  <div className="invite_subheading">
                    <div className="billing_address">
                      <div className="address_billing_name">
                        <div className="checkout_text">Name*</div>
                        <Input
                          onChange={(value: any) =>
                            setState({ name: capitalizeFirstLetter(value) })
                          }
                          type={"text"}
                          name={"name"}
                          value={state.name}
                          placeholder={"Name"}
                          fontSize={"16px"}
                        />
                      </div>
                      <div className="address_street">
                        <div className="checkout_text">Street Address</div>
                        <Input
                          onChange={(value: any) => setState({ street: value })}
                          type={"text"}
                          name={"Street"}
                          value={state.street}
                          placeholder={"Address"}
                          fontSize={"16px"}
                        />
                      </div>
                      <div className="address_town">
                        <div className="checkout_text">Town/City*</div>
                        <Input
                          onChange={(value: any) =>
                            setState({ city: capitalizeFirstLetter(value) })
                          }
                          type={"text"}
                          name={"city"}
                          value={state.city}
                          placeholder={"City"}
                          fontSize={"16px"}
                        />
                      </div>
                      <div className="address_country">
                        <div className="checkout_text">Country</div>
                        <Input
                          onChange={(value: any) =>
                            setState({ country: capitalizeFirstLetter(value) })
                          }
                          type={"text"}
                          name={"name"}
                          value={state.country}
                          placeholder={"Country"}
                          fontSize={"16px"}
                        />
                      </div>
                      <div className="address_pincode">
                        <div className="checkout_text">Pincode*</div>
                        <Input
                          onChange={(value: any) =>
                            setState({ pincode: value })
                          }
                          type={"number"}
                          name={"pincode"}
                          value={state.pincode}
                          placeholder={"Pincode"}
                          fontSize={"16px"}
                        />
                      </div>
                      <div className="address_phone_num">
                        <div className="checkout_text">Mobile*</div>
                        <Input
                          onChange={(value: any) =>
                            setState({ delivery_number: value })
                          }
                          type={"number"}
                          name={"name"}
                          value={state.delivery_number}
                          placeholder={"Mobile"}
                          fontSize={"16px"}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="invite_send_button">
                    <PrimaryButton
                      text={"Cancel"}
                      className={"send_invite_button"}
                      onClick={() => {
                        setState({ isModalOpen: false });
                      }}
                      width={"20%"}
                      backgroundColor={"#000000"}
                      style={{
                        borderRadius: "0px",
                        border: "#000000 2px solid",
                      }}
                      fontFamily={"Jost"}
                      fontSize={"14px"}
                      fontWeight={600}
                      letterSpacing={"2px"}
                    />
                    <PrimaryButton
                      text={"Ok"}
                      className={"send_invite_button"}
                      width={"20%"}
                      backgroundColor={"#000000"}
                      style={{
                        borderRadius: "0px",
                        border: "#000000 2px solid",
                      }}
                      fontFamily={"Jost"}
                      fontSize={"14px"}
                      fontWeight={600}
                      letterSpacing={"2px"}
                      onClick={() => {
                        if (state.address_id.length > 0) {
                          updateBillingAddress();
                        } else {
                          createBillingAddress();
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
        <PriceDetails type={"Checkout"} addressData={state.address_data} />
      </div>
    </section>
  );
};

export default CheckoutScreen;
