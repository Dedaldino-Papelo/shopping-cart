import { order_types } from "./order.types";

const initial_state = {
    order: {}
}

export const order_reducer = (state = initial_state, action) => {
    switch(action.type){
        case order_types.ORDER_CREATE_REQUEST:
            return{
                loading: true
            }
        case order_types.ORDER_CREATE_SUCCESS:
            return {
                ...state,
                order: action.payload,
                loading: false
            }
        case order_types.ORDER_CREATE_FAILED:
            return{
                error: action.payload,
                loading: false
            }
        default: 
            return state
    }
}