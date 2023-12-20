import { APARTMENT_PAY_FAIL, APARTMENT_PAY_REQUEST, APARTMENT_PAY_SUCESS, APARTMENT_UNPAY_FAIL, APARTMENT_UNPAY_REQUEST, APARTMENT_UNPAY_SUCESS, GET_BILL_BY_ID_FAIL, GET_BILL_BY_ID_REQUEST, GET_BILL_BY_ID_SUCESS, GET_BILL_FAIL, GET_BILL_REQUEST, GET_BILL_SUCESS } from '../types/billTypes'
import {toast} from 'react-toastify'
import billService from '../services/bill.service'
import { getAllApartmentsAction } from './apartmentAction'

export const getAllBillsAction = () => async(dispatch)=>{
    dispatch({
        type: GET_BILL_REQUEST
    })
    try {
        const {data} = await billService.getAll()
        dispatch({
            type: GET_BILL_SUCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_BILL_FAIL,
            payload: error
        })
    }
}


export const payApartmentAction = (id) =>async(dispatch)=>{
    dispatch({
        type: APARTMENT_PAY_REQUEST
    })
    try {
        const {data} = await billService.pay(id)
        dispatch({
            type: APARTMENT_PAY_SUCESS,
            payload: data
        })
        toast.success('bill Paid Successfully')
        dispatch(getAllApartmentsAction())
        dispatch(getAllBillsAction())
    } catch (error) {
        dispatch({
            type: APARTMENT_PAY_FAIL,
            payload: error
        })
        toast.error('somthing went Wrong !!')
    }   
}

export const unPayApartmentAction = (id) => async(dispatch)=>{
    dispatch({
        type: APARTMENT_UNPAY_REQUEST
    })
    try {
        const {data} = await billService.unPay(id)
        dispatch({
            type: APARTMENT_UNPAY_SUCESS,
            payload: data
        }) 
        toast.success('Bill Unpaid Successfully ')
        dispatch(getAllBillsAction())
    } catch (error) {
        dispatch({
            type: APARTMENT_UNPAY_FAIL,
            payload: error
        })
        toast.error('something went wrong !!')
    }
}