import store from "../store/store";
import { IMAGE_DATA, PRODUCT_DATA, SHOP_SIZE } from "./types.utlis";


export const shopSize=(payload:any)=>{
    store.dispatch({
        type: SHOP_SIZE,
        payload: payload
    })
}

export const ImageData=(payload:any)=>{
    store.dispatch({
        type:IMAGE_DATA,
      payload:payload
    })
}

export const ProductData=(payload:any)=>{
    store.dispatch({
        type:PRODUCT_DATA,
        payload:payload
    })
}