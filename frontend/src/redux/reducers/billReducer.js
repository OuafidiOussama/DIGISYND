import { APARTMENT_PAY_FAIL, APARTMENT_PAY_REQUEST, APARTMENT_PAY_SUCESS, APARTMENT_UNPAY_FAIL, APARTMENT_UNPAY_REQUEST, APARTMENT_UNPAY_SUCESS } from "../types/billTypes"


export const payApartmentReducer = (state = {}, action)=>{
    const {type, payload} = action

    switch (type){
        case APARTMENT_PAY_REQUEST:
            return {
                loading: true
            }
        case APARTMENT_PAY_SUCESS:
            return {
                loading: false,
                payload
            }
        case APARTMENT_PAY_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
} 


export const unPayApartmentReducer = (state={}, action)=>{
    const {type, payload} = action

    switch(type){
        case APARTMENT_UNPAY_REQUEST:
            return{
                loading: true
            }
        case APARTMENT_UNPAY_SUCESS:
            return {
                loading: false,
                payload
            }
        case APARTMENT_UNPAY_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}