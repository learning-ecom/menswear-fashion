import Assets from "../../../imports/assets.imports";
import { useSetState } from "../../../utils/function.utils";
import "./cart_details.ui.scss";
const CartDetails = () => {
  const [state, setState] = useSetState({
    quantity: 1,
  });
  return (
    <div className="cart_list_item">
    <div className="cart_list_item_wrapper">
      
    <div className="cart_product_details">
      <img className="cart_detail_close" src={Assets.cart_close} alt="" />
      <img
        className="cart_product"
        src="https://res.cloudinary.com/denokpulg/image/upload/v1669808570/menswear/card/Img_4_vwrrqz.jpg"
        alt=""
      />
      <div className="cart_product_desc">
        Funny Shorts with Mesh Lining Swimwear Bathing Suits
      </div>
    </div>
    <div className="cart_product_price">$200</div>
    <div className="cart_product_quantity">
     
        <div
          className="quantity_decrement"
          onClick={() => setState({ quantity: state.quantity - 1 })}
        >
          --
        </div>
        <div className="quantity_value">{state.quantity}</div>
        <div
          className="quantity_increment"
          onClick={() => setState({ quantity: state.quantity + 1 })}
        >
          +
        </div>
     
    </div>
    <div className="cart_product_total">$500</div>
  </div>
  <div className="line"></div>
  
    </div>
  );
};

export default CartDetails;
