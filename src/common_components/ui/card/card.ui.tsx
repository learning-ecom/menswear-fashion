import { useNavigate } from "react-router-dom";
import "./card.ui.scss";

interface ICard {
  id?:any;
  image?: string;
  desc?: string;
  amount?: any;
  discount?:any;
}
const Card = (props: ICard) => {
  const navigate=useNavigate()
  
  return (
    <div className="best_seller_card" onClick={()=>navigate(`/product_details?id=${props.id}`)} >
      <img src={props.image} alt="no img" />
      <div className="best_seller_content">{props.desc}</div>
      <div className="best_seller_price">
      <div className="best_seller_discount_amount">₹{props.amount-props.amount*props.discount/100}</div>
      <div className="best_seller_amount">₹{props.amount}</div>
      <div className="best_seller_discount">({props.discount}%OFF)</div>
      </div>
    </div>
  );
};

export default Card;
