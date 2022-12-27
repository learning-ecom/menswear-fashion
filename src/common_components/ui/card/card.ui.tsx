import "./card.ui.scss";

interface ICard {
  image?: string;
  desc?: string;
  amount?: any;
}

const Card = (props: ICard) => {
  return (
    <div className="best_seller_card">
      <img src={props.image} alt="no img" />
      <div className="best_seller_content">{props.desc}</div>
      <div className="best_seller_footer">{props.amount}</div>
    </div>
  );
};

export default Card;
