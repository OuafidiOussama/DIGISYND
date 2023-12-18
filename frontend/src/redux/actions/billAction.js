import { APARTMENT_PAY_FAIL, APARTMENT_PAY_REQUEST, APARTMENT_PAY_SUCESS, APARTMENT_UNPAY_FAIL, APARTMENT_UNPAY_REQUEST, APARTMENT_UNPAY_SUCESS } from '../types/billTypes'
import {toast} from 'react-toastify'
import billService from '../services/bill.service'

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
    } catch (error) {
        dispatch({
            type: APARTMENT_UNPAY_FAIL,
            payload: error
        })
        toast.error('something went wrong !!')
    }
}