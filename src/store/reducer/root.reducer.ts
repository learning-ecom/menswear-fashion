import { combineReducers } from "redux";
import shopReducer from "./shop.reducer";

export default combineReducers({
    shop:shopReducer,
})