import { combineReducers } from "redux";
import { userReducerLogin, userReducerProfile, userReducerRegister } from "./userReducer";


export default combineReducers({
    register: userReducerRegister,
    login: userReducerLogin,
    profile: userReducerProfile

})