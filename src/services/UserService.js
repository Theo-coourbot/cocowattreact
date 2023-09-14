import axios from "axios"
import { getToken } from "./AuthService";

const USER_REST_API_BASE_URL = "http://localhost:8081/api/user"

axios.interceptors.request.use(function (config) {
    
    config.headers['Authorization'] = getToken();
    console.log(config);

    return config;
  }, function (error) {

    return Promise.reject(error);
  });


  export const updateUser = (user) => axios.put(USER_REST_API_BASE_URL + '/' + user.id, user)

export const findByEmailCallApi = (email) => axios.get(USER_REST_API_BASE_URL + "/email", {params : {email}})
    
    //{params : {
    //firstName: firstName,
    //lastName: lastName,
    //phone: phone,
    //email: email,
    //password: password,
    //isAdmin: isAdmin,
    //imageUrl:imageUrl

    //}});
