import { combineReducers} from 'redux';

import userReducer from "./user/user.reducers";
import CartReducer from './cart/cart.reducer';

export default combineReducers({   // this is the root reducer ( the main pure function made up of combined individual functions)
    user : userReducer,
    cart : CartReducer,
});