import { useRef, useImperativeHandle, forwardRef } from "react";

import {
  NavButton,
  Assets,
  PrimaryButton,
  Functions,
} from "../../../utils/imports.utils";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./invite_modal.scss";
import { useSetState } from "../../../utils/functions.utils";
import Input from "../input_field/input_field.ui";
import moment from "moment";

const InviteModal = forwardRef((props: any, ref) => {
  let data: any;
  // Reference
  const modalRef: any = useRef();

  // State
  const [state, setState] = useSetState({
    coupon_data: [],
    coupon_code: "",
    isModalOpen: false,
  });

  const selectCoupon: any = (item: any, check: any) => {
    var coupon: any;
    data = state.coupon_data[0];
    // input check
    if (check === "code") {
      let inputCheck = props.couponData?.filter((check: any) => {
        return check.code === item;
      });

      if (data && data?.code === item) {
        return Functions.notiflixFailure(" This coupoun is already applied. ");
      } else {
        coupon = inputCheck[0];
      }
    } else {
      coupon = item;
    }

    //  coupon
    if (data?._id === coupon._id) {
      data = [];
    } else {
      data = [];
      data.push(coupon);
    }
    setState({ coupon_data: data });
  };
  // Network req
  useImperativeHandle(ref, () => ({
    openModal() {
      setState({ isModalOpen: true });
    },
    closeModal() {
      setState({ isModalOpen: false });
    },
  }));

  return (
    <div className="Model">
      {props.type === "Coupon" && (
        <Modal
          open={state.isModalOpen}
          ref={modalRef}
          onClose={() => {
            setState({ isModalOpen: false });
          }}
          closeOnOverlayClick
          center
          showCloseIcon={false}
          classNames={{
            overlay: "customOverlay",
            modal: "coupon_model_wrapper",
          }}
        >
          <div className="invite_container">
            <div className="invite_wrapper">
              <div className="invite_header">
                <div className="invite_heading" style={{ fontSize: "18px" }}>
                  Apply Coupon
                </div>
                <NavButton
                  icon={Assets.black_close}
                  onClick={() => {
                    setState({ isModalOpen: false });
                  }}
                  style={{ height: "30px", width: "30px" }}
                />
              </div>
              <div className="invite_subheading"></div>
              <div className="discount_wrapper">
                <div className="discount_code">
                  <Input
                    onChange={(value: any) => setState({ coupon_code: value })}
                    width={"350px"}
                    type={"text"}
                    name={"discount"}
                    value={state.coupon_code}
                    placeholder={"Enter Coupon Code"}
                  />
                  <PrimaryButton
                    text={"CHECK"}
                    backgroundColor={"#000000"}
                    style={{ borderRadius: "0px", border: "#000000 2px solid" }}
                    fontFamily={"Jost"}
                    fontSize={"14px"}
                    fontWeight={600}
                    letterSpacing={"2px"}
                    onClick={() => {
                      selectCoupon(state.coupon_code, "code");
                      setState({ coupon_code: "" });
                    }}
                  />
                </div>
              </div>
              <div className="coupouns">
                <div className="coupon_header">COUPON</div>
                <div className="coupon_details">
                  {props.couponData?.map((item: any, index: number) => {
                    return (
                      <div
                        className="coupon_icon_detail"
                        onClick={() => selectCoupon(item)}
                        key={index}
                      >
                        <div className="select_coupon">
                          <img
                            src={
                              state.coupon_data.includes(item)
                                ? Assets.filter_active
                                : Assets.filter_inactive
                            }
                            alt=""
                          />
                        </div>
                        <div className="coupon_detail">
                          <div
                            className="coupon_code"
                            style={
                              state.coupon_data.includes(item)
                                ? {
                                    border: "2px solid rgb(11, 11, 11)",
                                    color: "#000000",
                                  }
                                : {}
                            }
                          >
                            {item.code}
                          </div>
                          <div className="coupon_offer">{item.title}</div>
                          <div className="expries">
                            <div className="expries_title">Expries:</div>
                            <div className="expries_date">
                              {moment(item.valid_to).format("DD MMMM YYYY")}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
                  style={{ borderRadius: "0px", border: "#000000 2px solid" }}
                  fontFamily={"Jost"}
                  fontSize={"14px"}
                  fontWeight={600}
                  letterSpacing={"2px"}
                />
                <PrimaryButton
                  text={"Ok"}
                  className={"send_invite_button"}
                  onClick={() => {
                    props.onClick(state.coupon_data[0].offer_value,state.coupon_data[0]._id,state.coupon_data[0].code);
                    setState({ isModalOpen: false });
                  }}
                  width={"20%"}
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
        </Modal>
      )}
      {props.type === "defaultAddress"&&(
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
            modal: "address_model_wrapper",
          }}
        >
          <div className="invite_container">
            <div className="invite_wrapper">
              <div className="invite_header">
                <div
                  className="invite_heading"
                  style={{ fontSize: "18px" }}
                >
                 DEFAULT ADDRESS
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
              <div className="address_detail">
                    <div className="address_name">{props.address[0]?.name}</div>
                    <div className="address">{props.address[0]?.street + ","}</div>
                    <div className="address">
                      {props.address[0]?.city + "," + props.address[0]?.country + "-" + props.address[0]?.pincode}
                    </div>
                    <div className="mobile">
                      <div className="mobile_title">Mobile:</div>
                      <div className="mobile_number">
                        {props.address[0]?.delivery_number}
                      </div>
                    </div>
                
              </div>

              <div className="invite_send_button">
                <PrimaryButton
                  text={"Cancel"}
                  className={"send_invite_button"}
                  onClick={() => {
                    setState({ isModalOpen: false })
                    props.cancel()
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
                  props.onClick(props.address[0]?._id)
                  setState({ isModalOpen: false })
                  }}
                />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      )}
    </div>
  );
});

export default InviteModal;
