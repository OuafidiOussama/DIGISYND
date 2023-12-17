import { GET_APARTMENT_FAIL, GET_APARTMENT_REQUEST, GET_APARTMENT_SUCCESS } from "../types/apartmentTypes";
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
        toast.error('somthing went wrong !!')
    }
}