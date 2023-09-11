import axios from "axios"

const AUTH_REST_API_BASE_URL = "http://localhost:8081/comment"

export const createComment = (comment) => axios.post(AUTH_REST_API_BASE_URL + '/create', comment);

export const deleteCar = (id) => axios.delete(AUTH_REST_API_BASE_URL + '/delete', id);

export const getcommentByUser = (id) => axios.get(AUTH_REST_API_BASE_URL + '/:id');
