import "./cart.screen.scss";

// Default theme
import "@splidejs/react-splide/css";
import { shopSize } from "../../utils/redux.utils";
import _ from "lodash";
import { useSelector } from "react-redux";
import { RatingStar } from "rating-star";
import { useSetState } from "../../utils/function.utils";
import PrimaryButton from "../../common_components/ui/button/primary_Button.ui";

const Cart = () => {
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
    <section className="cart_container">
      <div className="cart_wrapper">
        <div className="cart_img">
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1669808571/menswear/card/Img_5_huxd3x.jpg"
            alt=""
          />
        </div>
        <div className="cart_content">
          <div className="cart_title">
            Under Armour Training Stretch Woven Half Zip Jacket.
          </div>
          <div className="cart_review">
            <div className="cart_review_icon">
              <RatingStar
                maxScore={100}
                id="review_rating"
                rating={state.rating}
                colors={{ mask: "black" }}
                noBorder
                // onRatingChange={onRatingChange}
              />
            </div>
            <div className="cart_review_text">16 Reviews</div>
          </div>
          <div className="cart_amount">$200</div>
          <div className="cart_colors">
            <div className="cart_color_title">COLOR</div>
            <div className="cart_color">
              <div className="color_box_purple"></div>
              <div className="color_box_white"></div>
              <div className="color_box_gray"></div>
              <div className="color_box_red"></div>
            </div>
          </div>
          <div className="cart_size">
            <div className="cart_size_header">
              <div className="cart_size_title">SIZE</div>
              <div className="size_value">{size_data.data}</div>
            </div>
            <div className="cart_size_items">
              {size.map((item: any, index: number) => {
                return (
                  <div
                    className={
                      size_data.data === item.value
                        ? "cart_wrapper_box_active"
                        : "cart_wrapper_box"
                    }
                    onClick={() => sizeFilter(item, index)}
                    key={index}
                  >
                    <div className="cart_item_size">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cart_quantity">
            <div className="cart_quantity_header">
              <div className="cart_quantity_title">QUANTITY</div>
            </div>
            <div className="cart_quantity_value">
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
          <div className="add_cart">
            <PrimaryButton
            text={'ADD TO BAG'}backgroundColor={"#000000"} style={{borderRadius:"0px",border:"#000000 2px solid"}} 
            fontFamily={"Jost"}    fontSize={"14px"} fontWeight={600} letterSpacing={"2px"}

/>
          </div>
          <div className="cart_buy_now">
          <PrimaryButton
            text={'BUY NOW'}backgroundColor={"#ffffff"} style={{borderRadius:"0px",border:"#000000 2px solid"}} 
            fontFamily={"Jost"}    fontSize={"14px"} fontWeight={600} letterSpacing={"2px"}
color={"#000000"}
/>
          </div>
        </div>

        {/* <div className="best_seller">
          <div className="best_seller_header">
            <div className="best_seller_title">Best Seller</div>
            <div className="best_seller_view">View All</div>
          </div>
          <div className="best_seller_list">
            <Splide
              options={{
                type: "loop",
                drag: "free",
                focus: "center",
                fixedWidth: "270px",
                autoplay: true,
                perPage: 5,
                autoScroll: {
                  speed: 10,
                },
                autoStart: true,
              }}
              aria-label="Testmonials"
            >
              <SplideSlide>
                <div className="best_seller_card">
                  <img
                    src="https://res.cloudinary.com/denokpulg/image/upload/v1669808291/menswear/card/Img_vdka54.jpg"
                    alt=""
                  />
                  <div className="best_seller_content">
                    Under Armour Training stretch woven half zip jacket in white
                  </div>
                  <div className="best_seller_footer">$222</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="best_seller_card">
                  <img
                    src="https://res.cloudinary.com/denokpulg/image/upload/v1669808291/menswear/card/Img_vdka54.jpg"
                    alt=""
                  />
                  <div className="best_seller_content">
                    Under Armour Training stretch woven half zip jacket in white
                  </div>
                  <div className="best_seller_footer">$222</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="best_seller_card">
                  <img
                    src="https://res.cloudinary.com/denokpulg/image/upload/v1669808291/menswear/card/Img_vdka54.jpg"
                    alt=""
                  />
                  <div className="best_seller_content">
                    Under Armour Training stretch woven half zip jacket in white
                  </div>
                  <div className="best_seller_footer">$222</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="best_seller_card">
                  <img
                    src="https://res.cloudinary.com/denokpulg/image/upload/v1669808291/menswear/card/Img_vdka54.jpg"
                    alt=""
                  />
                  <div className="best_seller_content">
                    Under Armour Training stretch woven half zip jacket in white
                  </div>
                  <div className="best_seller_footer">$222</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="best_seller_card">
                  <img
                    src="https://res.cloudinary.com/denokpulg/image/upload/v1669808291/menswear/card/Img_vdka54.jpg"
                    alt=""
                  />
                  <div className="best_seller_content">
                    Under Armour Training stretch woven half zip jacket in white
                  </div>
                  <div className="best_seller_footer">$222</div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Cart;
