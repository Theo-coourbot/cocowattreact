import axios from "axios"

const AUTH_REST_API_BASE_URL = "http://localhost:8081/car"

export const createCar = (car) => axios.post(AUTH_REST_API_BASE_URL + '/create', car);

export const deleteCar = (id) => axios.post(AUTH_REST_API_BASE_URL + '/delete', id);

export const getById = (id) => localStorage.setItem("token", id);
