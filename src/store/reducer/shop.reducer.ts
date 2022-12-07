
import  {storeAction} from '../../interface/common.interface'

const initialState ={
    data:[]
  
}


const shopReducer=(state=initialState,action:storeAction) => {
    switch(action.type){
        case 'SHOP_SIZE':
            return{
                ...state,
                data:action.payload
            }
        default:
            return state;
            
}
}
export default shopReducer