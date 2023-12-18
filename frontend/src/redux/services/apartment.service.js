import http from '../axios'

class ApartmentServices {

    getAll(){
        return http.get("/apartment/all")
    }

    create(data){
        return http.post("/apartment/create", data)
    }

    update(id, data){
        return http.put(`/apartment/update/${id}`, data)
    }

    delete(id){
        return http.delete(`/apartment/delete/${id}`)
    }

}

export default new ApartmentServices();