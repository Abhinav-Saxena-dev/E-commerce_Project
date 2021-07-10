import { combineReducers} from 'redux';

import userReducer from "./user/user.reducers";

export default combineReducers({   // this is the root reducer ( the main pure function made up of combined individual functions)
    user : userReducer,
});