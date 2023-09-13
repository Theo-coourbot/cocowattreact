import axios from "axios"


const TRIP_REST_API_BASE_URL = "http://localhost:8081/api/reservation"

export const createReservation = (reservation) => axios.get(TRIP_REST_API_BASE_URL, reservation);

export const getReservationByTrip = (tripId) => axios.get(TRIP_REST_API_BASE_URL, {params : {
    tripId:tripId
   
}});



export const deleReservation = (id) => axios.delete(TRIP_REST_API_BASE_URL + '/'  + id)


