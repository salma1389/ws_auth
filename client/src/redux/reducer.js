import { SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from "./actionType";

const init = {
  user: null,
  error: null,
  loading: false,
};

export const userReducer=(state=init,{type,payload})=>{
    switch (type) {
        case SIGN_UP:
            return{
                ...state,loading:true
            }
            case SIGN_UP_FAIL:
                return{
                    ...state,loading:false,error:payload
                };
                case SIGN_UP_SUCCESS:
                    return{
                        ...state,loading:false,user:payload
                    }
    
        default:
            return state
    }
}
