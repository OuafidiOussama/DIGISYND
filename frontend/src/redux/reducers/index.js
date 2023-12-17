import { combineReducers } from "redux";
import { userReducerLogin, userReducerLogout, userReducerProfile, userReducerRegister } from "./userReducer";
import { apartmentReducerGetAll } from "./apartmentReducer";


export default combineReducers({
    register: userReducerRegister,
    login: userReducerLogin,
    profile: userReducerProfile,
    logout: userReducerLogout,
    getApartments: apartmentReducerGetAll
})