import "./product_details.screen.scss";

// Default theme
import "@splidejs/react-splide/css";
import { shopSize } from "../../utils/redux.utils";
import _ from "lodash";
import { useSelector } from "react-redux";
import { RatingStar } from "rating-star";
import { useSetState } from "../../utils/function.utils";
import PrimaryButton from "../../common_components/ui/button/primary_Button.ui";
import Splider from "../../common_components/ui/splider/splider.ui";

const ProductDetails = () => {
  const size_data: any = useSelector((state: any) => state.shop);
  const [state, setState] = useSetState({
    rating: 16,
    quantity: 1,
  });
  // const onRatingChange = (score:any) => {
  //   setRating(score);
  // };
  let size = [
    {
      value: "S",
      label: "S",
    },
    {
      value: "M",
      label: "M",
    },
    {
      value: "L",
      label: "L",
    },
    {
      value: "XL",
      label: "XL",
    },
    {
      value: "2XL",
      label: "2XL",
    },
  ];
  const sizeFilter = (item: any, index: number) => {
    if (_.isEqual(size_data.data.toString(), item.value.toString())) {
      shopSize("");
    } else {
      shopSize(item.value);
    }
  };

  return (
    <section className="product_detail_container">
      <div className="product_detail_wrapper">
        <div className="product_detail_img">
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1669808571/menswear/card/Img_5_huxd3x.jpg"
            alt=""
          />
        </div>
        <div className="product_detail_content">
          <div className="product_detail_title">
            Under Armour Training Stretch Woven Half Zip Jacket.
          </div>
          <div className="product_detail_review">
            <div className="product_detail_review_icon">
              <RatingStar
                maxScore={100}
                id="review_rating"
                rating={state.rating}
                colors={{ mask: "black" }}
                noBorder
                // onRatingChange={onRatingChange}
              />
            </div>
            <div className="product_detail_review_text">16 Reviews</div>
          </div>
          <div className="product_detail_amount">$200</div>
          <div className="product_detail_colors">
            <div className="product_detail_color_title">COLOR</div>
            <div className="product_detail_color">
              <div className="color_box_purple"></div>
              <div className="color_box_white"></div>
              <div className="color_box_gray"></div>
              <div className="color_box_red"></div>
            </div>
          </div>
          <div className="product_detail_size">
            <div className="product_detail_size_header">
              <div className="product_detail_size_title">SIZE</div>
              <div className="size_value">{size_data.data}</div>
            </div>
            <div className="product_detail_size_items">
              {size.map((item: any, index: number) => {
                return (
                  <div
                    className={
                      size_data.data === item.value
                        ? "product_detail_wrapper_box_active"
                        : "product_detail_wrapper_box"
                    }
                    onClick={() => sizeFilter(item, index)}
                    key={index}
                  >
                    <div className="product_detail_item_size">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product_detail_quantity">
            <div className="product_detail_quantity_header">
              <div className="product_detail_quantity_title">QUANTITY</div>
            </div>
            <div className="product_detail_quantity_value">
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
          </div>
          <div className="product_detail_add_buy_now">
            <div className="add_product_detail">
              <PrimaryButton
                text={"ADD TO BAG"}
                backgroundColor={"#000000"}
                style={{ borderRadius: "0px", border: "#000000 2px solid" }}
                fontFamily={"Jost"}
                fontSize={"14px"}
                fontWeight={600}
                letterSpacing={"2px"}
              />
            </div>
            <div className="product_detail_buy_now">
              <PrimaryButton
                text={"BUY NOW"}
                backgroundColor={"#ffffff"}
                style={{ borderRadius: "0px", border: "#000000 2px solid" }}
                fontFamily={"Jost"}
                fontSize={"14px"}
                fontWeight={600}
                letterSpacing={"2px"}
                color={"#000000"}
              />
            </div>
          </div>
          <div className="product_types">
            <div className="hsn_code product_wrapper">
              <div className="product_type_tittle">SKU:</div>
              <div className="product_type_value">051</div>
            </div>
            <div className="category  product_wrapper">
              <div className="product_type_tittle">CATEGORY:</div>
              <div className="product_type_value">T-Shirts0</div>
            </div>
            <div className="tags product_wrapper">
              <div className="product_type_tittle">TAGS: </div>
              <div className="product_type_value">Shirt, Men</div>
            </div>
          </div>
        </div>
      </div>
      <div className="splider">
       <Splider title={"Related Products"}/>
       </div>
    </section>
  );
};
export default ProductDetails;
