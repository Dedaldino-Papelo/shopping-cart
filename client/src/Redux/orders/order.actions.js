import { order_types } from "./order.types";
import axios from 'axios'


export const orderActions = (order) => async(dispatch) => {
    try {
        dispatch({
            type: order_types.ORDER_CREATE_REQUEST
        })

        const config = {
            headers: { 'content-type': 'application/json' }
        }

        const { data } = await axios.post('http://localhost:4000/orders', { 
             nome: order.nome,
             sobrenome: order.sobrenome,
             telefone: order.telefone,
             cidade: order.cidade,
             rua: order.rua,
             bairro: order.bairro
            },
            config
        )
        dispatch({ 
            type: order_types.ORDER_CREATE_SUCCESS,
            payload: data 
        })

    } catch (error) {
        dispatch({
            type: order_types.ORDER_CREATE_FAILED,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
        
    }
}