import { combineReducers } from "redux";
import shopReducer from "./shop.reducer";
import imageReducer from "./image.reducer";
import productReducer from "./product.reducer";
import priceReducer from "./price.reducer";

export default combineReducers({
    shop:shopReducer,
    image:imageReducer,
    product:productReducer,
    price:priceReducer
})