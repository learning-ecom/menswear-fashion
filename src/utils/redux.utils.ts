import store from "../store/store";
import { SHOP_SIZE } from "./types.utlis";


export const shopSize=(payload:any)=>{
    store.dispatch({
        type: SHOP_SIZE,
        payload: payload
    })
}