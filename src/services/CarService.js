import axios from "axios"


const CAR_REST_API_BASE_URL = "http://localhost:8081/api/car"

export const createCar = (brand,model,availableSeats,isElectric) => axios.get(CAR_REST_API_BASE_URL, {params : {
    brand: brand,
    model: model,
    availableSeats: availableSeats,
    isElectric: isElectric,

}});

export const getCar = (id) => axios.get(CAR_REST_API_BASE_URL + '/id/'  + id)
export const deleteCarCallApi = (id) => axios.delete(CAR_REST_API_BASE_URL + '/'  + id)
