import { CART_ADD_ITEM, CART_REVOME_ITEM, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";


export const cartReducer = (state = {cartItems:[]}, action) =>{
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            console.log(state)

            const existItem = state.cartItems.find((x)=> x.product === item.product);
            if(existItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map((x)=> x.product === item.product ? item : x),
                }
            }else{
                return{
                ...state,
                cartItems:[...state.cartItems, item]}
            }

           case CART_REVOME_ITEM:
               return{
                   ...state,
                   cartItems: state.cartItems.filter((x)=> x.product !== action.payload)
               } 
               case CART_SAVE_SHIPPING_ADDRESS:
                   return{
                       ...state,
                       shappingAddress : action.payload
                   }
        default:
            return state;
}
}