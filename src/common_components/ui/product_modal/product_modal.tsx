import { findAllByTestId } from "@testing-library/react";
import React, { useEffect, useRef } from "react";
import { Modal } from "react-responsive-modal";
import { useSetState, notiflixFailure } from "../../../utils/functions.utils";
import axios from "axios";
import Assets from "../../../imports/assets.imports";
import { Functions } from "../../../utils/imports.utils";
import "./product_modal.scss";
const ProductModal = (props: any) => {
  const inputRef = useRef(null);
  const [state, setState] = useSetState({
    isModalOpen: false,
    image: "",
    url: "",
    urlPresent: false,
  });
  const createProductSubmit = () => {};
  const cloundinaryUpload = () => {
    const data = new FormData();
    data.append("file", inputRef.current || "");
    data.append("upload_preset", "x64ctvpl");
    data.append("cloud_name", "qbd4yd4e");
    axios({
      method: "post",
      url: "https://api.cloudinary.com/v1_1/dqbd4yd4e/image/upload",
      data: data,
    })
      .then((res) => {
        setState({ url: res.data.url, urlPresent: true });
        console.log(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const imageUploader = (e: any) => {
    setState({ image: e.target.files[0] });
    inputRef.current = e.target.files[0];
    cloundinaryUpload();
  };
  useEffect(() => {}, [state.url, state]);
  return (
    <div className="product_modal">
      <Modal
        open={props.open}
        onClose={() => {
          props.closeButton(false);
        }}
      >
        <div className="product_update_container">
          <form onSubmit={createProductSubmit}>
            <h3>Create Product</h3>
            <div className="row">
              {!state.urlPresent ? (
                <img src={Assets.accountIcon} alt="user-profile"></img>
              ) : (
                <img src={state.url} alt="upload"></img>
              )}
              <input
                className="upload_input"
                ref={inputRef}
                type="file"
                onChange={(e) => {
                  imageUploader(e);
                }}
              ></input>
            </div>
            <div className="row">
              .
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ProductModal;
