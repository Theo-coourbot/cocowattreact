import axios from "axios"


const TRIP_REST_API_BASE_URL = "http://localhost:8081/api/trip"

export const createTripCallTrip = (startingPoint,endPoint,localDate,availableSeats,distance,userId) => axios.get(TRIP_REST_API_BASE_URL, {params : {
    startingPoint: startingPoint,
    endPoint: endPoint,
    localDate: localDate,
    availableSeats: availableSeats,
    distance:distance,
    userId:userId

}});
export const getTripById = (id) => axios.get(TRIP_REST_API_BASE_URL + "/id/" + id );
 
export const getTripFilter = (startingPoint,endPoint,localTime) => axios.get(TRIP_REST_API_BASE_URL, {params : {
    startingPoint: startingPoint,
    endPoint: endPoint,
    localTime: localTime
   
}});
export const AddTripToUserCallApi = (useId,tripId) => axios.get(TRIP_REST_API_BASE_URL + "/add/user", {params : {
    userId : useId,
    tripId : tripId
   
}});


export const deleteTrip = (id) => axios.delete(TRIP_REST_API_BASE_URL + '/'  + id)

export const updateTrip = (id) => axios.put(TRIP_REST_API_BASE_URL + '/id/'  + id)
