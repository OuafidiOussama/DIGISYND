import { combineReducers } from "redux";
import { userReducerLogin, userReducerLogout, userReducerProfile, userReducerRegister } from "./userReducer";
import { apartmentReducerGetAll, createApartmentReducer, deleteApartmentReducer, updateApartmentReducer } from "./apartmentReducer";
import { getAllBillsReducer, payApartmentReducer, unPayApartmentReducer } from "./billReducer";


export default combineReducers({
    register: userReducerRegister,
    login: userReducerLogin,
    profile: userReducerProfile,
    logout: userReducerLogout,
    getApartments: apartmentReducerGetAll,
    createApartment: createApartmentReducer,
    updateApartment: updateApartmentReducer,
    deleteApartment: deleteApartmentReducer,
    payApartment: payApartmentReducer,
    unPayApartment: unPayApartmentReducer,
    getBills: getAllBillsReducer
})