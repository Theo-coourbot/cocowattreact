import axios from "axios"

const USER_REST_API_BASE_URL = "http://localhost:8081/api/user"

export const findByEmailCallApi = (email) => axios.get(USER_REST_API_BASE_URL + "/email", {headers:{
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json;charset=UTF-8',
}},{params : {email}})
    
    //{params : {
    //firstName: firstName,
    //lastName: lastName,
    //phone: phone,
    //email: email,
    //password: password,
    //isAdmin: isAdmin,
    //imageUrl:imageUrl

    //}});
