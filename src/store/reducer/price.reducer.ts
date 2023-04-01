import  {storeAction} from '../../interface/common.interface'


const initialState ={
    data:[] 
}

const priceReducer=(state=initialState,action:storeAction) => {
    switch(action.type){
        case 'PRICE_DATA':
            return{
                ...state,
                data:action.payload
            }
        
        default:
            return state;
            
}
}
export default priceReducer

