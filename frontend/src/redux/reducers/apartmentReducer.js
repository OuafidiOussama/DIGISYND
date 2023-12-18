import { ADD_APARTMENT_FAIL, ADD_APARTMENT_REQUEST, ADD_APARTMENT_SUCCESS, DELETE_APARTMENT_FAIL, DELETE_APARTMENT_REQUEST, DELETE_APARTMENT_SUCCESS, GET_APARTMENT_FAIL, GET_APARTMENT_REQUEST, GET_APARTMENT_SUCCESS, UPDATE_APARTMENT_FAIL, UPDATE_APARTMENT_REQUEST, UPDATE_APARTMENT_SUCCESS } from "../types/apartmentTypes";

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

export const createApartmentReducer = (state= {}, action)=>{
    const {type, payload} = action

    switch(type) {
        case ADD_APARTMENT_REQUEST:
            return {
                loading: true
            }
        case ADD_APARTMENT_SUCCESS:
            return {
                loading: false, 
                payload
            }
        case ADD_APARTMENT_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state    
    }
}

export const updateApartmentReducer = (state= {}, action)=>{
    const {type, payload} = action

    switch(type) {
        case UPDATE_APARTMENT_REQUEST:
            return {
                loading: true
            }
        case UPDATE_APARTMENT_SUCCESS:
            return {
                loading: false, 
                payload
            }
        case UPDATE_APARTMENT_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state    
    }
}


export const deleteApartmentReducer = (state= {}, action)=>{
    const {type, payload} = action

    switch(type) {
        case DELETE_APARTMENT_REQUEST:
            return {
                loading: true
            }
        case DELETE_APARTMENT_SUCCESS:
            return {
                loading: false, 
                payload
            }
        case DELETE_APARTMENT_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state    
    }
}