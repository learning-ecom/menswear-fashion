import "./product_details.screen.scss";

// Default theme
import "@splidejs/react-splide/css";
import { shopSize } from "../../utils/redux.utils";
import { useSelector } from "react-redux";
import { RatingStar } from "rating-star";
import { useQuery, useSetState } from "../../utils/functions.utils";
import PrimaryButton from "../../common_components/ui/button/primary_Button.ui";
import Splider from "../../common_components/ui/splider/splider.ui";
import { Functions } from "../../utils/imports.utils";
import { Model } from "../../imports/model.import";
import { useEffect } from "react";

let product_data: any;
const ProductDetails = () => {
  // redux size
  const size_data: any = useSelector((state: any) => state.shop);

  // setSizeData
  let setProductSize: any = {
    value: size_data.data.length > 0 ? size_data.data : "S",
  };

  // store the data it used first to update variable so used

  // state
  const [state, setState] = useSetState({
    quantity: 1,
    product_details: "",
    available_product: false,
    cart_data:0
  });

  let size: any = [
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
      value: "XXL",
      label: "2XL",
    },
    {
      value: "XXXL",
      label: "3XL",
    },
  ];


  //  query
  const query: any = useQuery();
  const params_id: any = query.get("id");

  // getProduct
  const getProduct = async () => {
    Functions.notiflixLoader();
    try {
      if (params_id.length > 0) {
        const query: any = {
          product_id: params_id,
        };
        const res: any = await Model.product.getProduct(query);
        setState({ product_details: res.data });
        product_data = res.data;
      }
      sizeFilter(setProductSize);
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }   
  };
  // createCart
  const createCart = async (data?:any) => {
    Functions.notiflixLoader();
    try {
      if (params_id.length > 0) {
        const query: any = {
          product_id: params_id,
          size: setProductSize.value,
          quantity: state.quantity,
        };
        const res: any = await Model.cart.createCart(query);
        if(res&&data.length>0){
          getCart()
        }
      }
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };

  const getCart = async () => {    
    Functions.notiflixLoader();
    try {
      const query={
        product_id:params_id,
        size: setProductSize.value
      }      
      const res: any = await Model.cart.getCart(query);
       if(res.data){

         setState({ cart_data: res.data?.quantity });
       }
    } catch (error) {
      Functions.notiflixFailure(error);
    } finally {
      Functions.notiflixRemove();
    }
  };
       
  // const onRatingChange = (score:any) => {
  //   setRating(score);
  // };

  // sizeFilter
  const sizeFilter = (item: any) => {
    //  setState({cart_data:0})
    if (product_data && product_data?.stock[0][item.value] === 0) {
      shopSize(item.value);
      setState({ available_product: true });
    } else {
      shopSize(item.value);
      setState({ available_product: false });
    }
  };
  
  
 
  const addToBag = () => {
    // getCart()
  //   console.log('let',cart_data );
    if(state.cart_data!==0&&state.cart_data + state.quantity > product_data?.stock[0][setProductSize.value]){
      Functions.notiflixFailure(
        `Available ${product_data?.stock[0][setProductSize.value]-state.cart_data} Stocks Only`
      );
    }
    else if(product_data?.stock[0][setProductSize.value] < state.quantity) {
      Functions.notiflixFailure(
        `Available ${product_data?.stock[0][setProductSize.value]} Stocks Only ss`
      );
    } else {      
      createCart("reload");
    }
  };

  
    
    
  
  // hooks
  useEffect(() => {
    window.scrollTo(0, 0)
    getProduct();
    // eslint-disable-next-line
  },[])
  
  useEffect(() => {   
    getCart();
    // eslint-disable-next-line
  }, [setProductSize.value]); 
  return (   
    <section className="product_detail_container">
      <div className="product_detail_wrapper">
        <div className="product_detail_img">
          <img src={state.product_details.img} alt="" />
        </div>
        <div className="product_detail_content">
          <div className="product_detail_title">
            {state.product_details.desc}
          </div>
          <div className="product_detail_review">
            <div className="product_detail_review_icon">
              <RatingStar
                maxScore={100}
                id="review_rating"
                rating={state.product_details.ratings}
                colors={{ mask: "black" }}
                noBorder
                // onRatingChange={onRatingChange}
              />
            </div>
            <div className="product_detail_review_text">
              {state.product_details.ratings} Reviews
            </div>
          </div>
          <div className="product_detail_amount">
            {" "}
            {state.available_product
              ? "Out of Stock"
              : "₹" + state.product_details.amount}
          </div>
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
              <div className="size_value">
                {size_data.data === "XXXL"
                  ? "3XL"
                  : size_data.data === "XXL"
                  ? "2XL"
                  : size_data.data}
              </div>
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
                    onClick={() => sizeFilter(item)}
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
                onClick={() =>
                  setState(
                    state.quantity === 1
                      ? { quantity: 1 }
                      : { quantity: state.quantity - 1 }
                  )
                }
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
                onClick={addToBag}
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
        <Splider title={"Related Products"} />
      </div>
    </section>
  );
};
export default ProductDetails;
