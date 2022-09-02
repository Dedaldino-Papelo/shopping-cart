import { products_type } from './product.type'

const initial_state = {
    products: []
}

export const products_reducer = (state = initial_state, action) => {
    switch(action.type){
        case products_type.PRODUCTS_LIST_LOADING:
            return{
                loading: true,
                products: []
            }
        case products_type.PRODUCTS_LIST_SUCCESS:
            return{
                ...state,
                loading: false,
                products: action.payload
            }
        case products_type.PRODUCTS_LIST_FAILED:
            return{
                loading: false,
                error: action.payload
            }
        default:
            return state
    }

}