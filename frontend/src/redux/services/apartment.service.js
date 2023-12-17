import http from '../axios'

class ApartmentServices {

    getAll(){
        return http.get("/apartment/all")
    }

    create(data){
        return http.post("/apartment/create", data)
    }

    update(data, id){
        return http.patch(`/apartment/update/${id}`, data)
    }

    delete(id){
        return http.delete(`/apartment/delete/${id}`)
    }

}

export default new ApartmentServices();