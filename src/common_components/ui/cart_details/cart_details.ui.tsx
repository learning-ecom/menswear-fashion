import Assets from "../../../imports/assets.imports";
import { Model } from "../../../imports/model.import";
import { Functions } from "../../../utils/imports.utils";
import "./cart_details.ui.scss";

interface ICartDetails {
  cartData?: any;
  refresh?: any;
}

const CartDetails = (props: ICartDetails) => {
  const deleteCart = async (data?: any) => {
    Functions.notiflixLoader();
    try {
      let query = {
        cart_id: data,
      };
      const res: any = await Model.cart.deleteCartById(query);
      if (res.data) {
        props.refresh()
      }
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };

  return (
    <div className="cart_list_item">
      <div className="cart_list_item_wrapper">
        <div className="cart_product_details">
          <img
            className="cart_detail_close"
            src={Assets.cart_close}
            alt=""
            onClick={() => deleteCart(props.cartData?._id)}
          />
          <img
            className="cart_product"
            src={props.cartData?.product.img}
            alt=""
          />
          <div className="cart_product_desc">
            Funny Shorts with Mesh Lining Swimwear Bathing Suits
          </div>
        </div>
        <div className="cart_product_size">
          {props.cartData?.size === "XXXL"
            ? "3XL"
            : props.cartData?.size === "XXL"
            ? "2XL"
            : props.cartData?.size}
        </div>
        <div className="cart_product_price">
          ₹{props.cartData?.product.amount-props.cartData?.product.amount * props.cartData?.product.discount/100}
        </div>
        <div className="cart_product_quantity">{props.cartData?.quantity}</div>
        <div className="cart_product_total">
          ₹{props.cartData?.quantity * (props.cartData?.product.amount-props.cartData?.product.amount * props.cartData?.product.discount/100)}
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default CartDetails;
