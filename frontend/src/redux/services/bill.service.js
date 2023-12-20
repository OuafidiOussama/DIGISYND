import http from '../axios'

class BillServices {

    getAll(){
        return http.get('/bill/all')
    }


    pay(id){
        return http.post(`/bill/pay/${id}`)
    }
    unPay(id){
        return http.post(`/bill/unpay/${id}`)
    }

}

export default new BillServices();