import http from '../axios'

class UserServices {

    register(data){
        return http.post("/user/register", data)
    }

    login(data){
        console.log(data);
        return http.post("/user/login", data)
    }

    me(){
        return http.get('/user/me')
    }

}

export default new UserServices();