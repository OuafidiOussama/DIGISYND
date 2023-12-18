import { ADD_APARTMENT_FAIL, ADD_APARTMENT_REQUEST, ADD_APARTMENT_SUCCESS, GET_APARTMENT_FAIL, GET_APARTMENT_REQUEST, GET_APARTMENT_SUCCESS, UPDATE_APARTMENT_FAIL, UPDATE_APARTMENT_REQUEST, UPDATE_APARTMENT_SUCCESS } from "../types/apartmentTypes";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import apartmentService from "../services/apartment.service";

export const getAllApartmentsAction = () =>async(dispatch)=>{
    dispatch({
        type: GET_APARTMENT_REQUEST
    })
    try {
        const {data} = await apartmentService.getAll()
        dispatch({
            type: GET_APARTMENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_APARTMENT_FAIL,
            payload: error
        })
        toast.error('Couldnt fetch Apartments!!')
    }
}

export const createApartmentAction = (apartment) => async(dispatch)=>{
    dispatch({
        type: ADD_APARTMENT_REQUEST
    })
    try{
        const {data} = await apartmentService.create(apartment)
        dispatch({
            type: ADD_APARTMENT_SUCCESS,
            payload: data
        })
        dispatch(getAllApartmentsAction())
        toast.success('Apartment Created Successfully')
    } catch (error){
        dispatch({
            type: ADD_APARTMENT_FAIL,
            payload: error
        })
        toast.error("something went wrong while creating!!")
    }
}

export const updateApartmentAction = (id, apartment) => async(dispatch)=>{
    dispatch({
        type: UPDATE_APARTMENT_REQUEST
    })
    try{
        const {data} = await apartmentService.update(id, apartment)
        console.log(data);
        dispatch({
            type: UPDATE_APARTMENT_SUCCESS,
            payload: data
        })
        dispatch(getAllApartmentsAction())
        toast.success('Apartment Updated Successfully')
    } catch (error){
        dispatch({
            type: UPDATE_APARTMENT_FAIL,
            payload: error
        })
        toast.error("something went wrong while Updating!!")
    }
}