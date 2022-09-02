import { products_type } from "./product.type";
import axios from "axios";


export const product_actions = () => async dispatch =>{
    try {
       dispatch({
        type: products_type.PRODUCTS_LIST_LOADING,
       })

       const {data} = await axios.get("http://localhost:4000/products")

       dispatch({
        type: products_type.PRODUCTS_LIST_SUCCESS,
        payload: data
       })
        
    } catch (error) {
        dispatch({
            type: products_type.PRODUCTS_LIST_FAILED,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
        
    }

}