import  {storeAction} from '../../interface/common.interface'


const initialState ={
    data:[] 
}



const imageReducer=(state=initialState,action:storeAction) => {
    switch(action.type){
        case 'IMAGE_DATA':
            return{
                ...state,
                data:action.payload
            }
        default:
            return state;
            
}
}
export default imageReducer

