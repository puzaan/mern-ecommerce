import axios from 'axios';
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS } from '../constants/productConstants';


export const listProducts = () => async (dispatch) =>{
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const{data} = await axios.get('http://localhost:5000/api/products');

        dispatch({
            type: PRODUCT_LIST_SUCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}