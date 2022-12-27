import { combineReducers } from "redux";
import shopReducer from "./shop.reducer";
import imageReducer from "./image.reducer";
import productReducer from "./product.reducer";

export default combineReducers({
    shop:shopReducer,
    image:imageReducer,
    product:productReducer
})