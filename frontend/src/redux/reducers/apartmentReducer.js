import { GET_APARTMENT_FAIL, GET_APARTMENT_REQUEST, GET_APARTMENT_SUCCESS } from "../types/apartmentTypes";

export const apartmentReducerGetAll = (state= {}, action)=>{
    const {type, payload} = action

    switch (type) {
        case GET_APARTMENT_REQUEST:
            return {
                loading: true
            }
        case GET_APARTMENT_SUCCESS:
            return {
                loading: false,
                payload
            }
        case GET_APARTMENT_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}