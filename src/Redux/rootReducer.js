import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { userData } from "./user_login_reducer/userReducer";

export default combineReducers({
    cartData,
    userData,
})
