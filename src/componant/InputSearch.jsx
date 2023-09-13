import { redirect, useNavigate } from "react-router-dom";
import "../css/componant/componant-input-search.css"
import {  useState } from "react";
import ResultTrip from "../routes/trip/ResultSearchTrip";




function InputSearch(){
  const navigate = useNavigate();
  const [startingPoint, setStartingPoint] = useState();
  const [endPoint, setEndPoint] = useState();
  const [startingDate, setStartingDate] = useState();
 
  

  function searchTrip(){
    
    navigate(`/trip/result`)
  }
return (
<div className="container " id="input-search-container">
  <form action="" className="d-flex" onSubmit={searchTrip}>
<div class="input-group border border-success rounded">

  <input type="text" class="form-control" placeholder="Point de départ"
  value={startingPoint} onChange={(e)=>setStartingPoint(e.target.value)}/>
  <input class="form-control" type="text" placeholder="point d'arriver"
  value={endPoint} onChange={(e)=>setEndPoint(e.target.value)}/>
  <input class="form-control"  type="date" 
  value={startingDate} onChange={(e)=>setStartingDate(e.target.value)}/>
  <button class="btn btn-info"  type="submit">Rechercher</button>

  
</div>
  </form>
</div>
 
);
}
export default InputSearch