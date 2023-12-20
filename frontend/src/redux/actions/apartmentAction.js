import { ADD_APARTMENT_FAIL, ADD_APARTMENT_REQUEST, ADD_APARTMENT_SUCCESS, DELETE_APARTMENT_FAIL, DELETE_APARTMENT_REQUEST, DELETE_APARTMENT_SUCCESS, GET_APARTMENT_FAIL, GET_APARTMENT_REQUEST, GET_APARTMENT_SUCCESS, UPDATE_APARTMENT_FAIL, UPDATE_APARTMENT_REQUEST, UPDATE_APARTMENT_SUCCESS } from "../types/apartmentTypes";
import { toast } from "react-toastify"
import apartmentService from "../services/apartment.service";
import { getAllBillsAction } from "./billAction";

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
        dispatch(getAllBillsAction())
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

export const deleteApartmentAction = (id) => async(dispatch)=>{
    dispatch({
        type: DELETE_APARTMENT_REQUEST
    })
    try {
        const {data}= await apartmentService.delete(id)
        dispatch({
            type: DELETE_APARTMENT_SUCCESS,
            payload: data
        })
        dispatch(getAllApartmentsAction())
        toast.success('Post Deleted !')
    } catch (error) {
        dispatch({
            type: DELETE_APARTMENT_FAIL,
            payload: error
        })
        toast.error('Somrhing Went Wrong while deleting !')
    }
}