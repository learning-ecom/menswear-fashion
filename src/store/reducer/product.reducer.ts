import { storeAction } from "../../interface/common.interface";


const initialState:any={
    data:[]

}


const productReducer =(state=initialState,action:storeAction)=>{
    switch (action.type){
        case "PRODUCT_DATA":
           return {...state,
           data: action.payload}
           default:
            return state;
            
}
}
export default productReducer

