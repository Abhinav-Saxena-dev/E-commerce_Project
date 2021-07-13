import CartActionTypes from "./cart.types";
import { addItemCart } from "./cart.utils";

const INITITAL_STATE = {
    hidden : true,
    cart : [],
};

const CartReducer = (state = INITITAL_STATE, action) => {

    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden : !state.hidden,
            }
        case CartActionTypes.ADD_ITEM :
            return{
                ...state,
                cart : addItemCart(state.cart, action.payload),
            }
        default:
            return state;
    }
}

export default CartReducer;