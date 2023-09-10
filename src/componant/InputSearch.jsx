import { redirect, useNavigate } from "react-router-dom";
import "../css/componant-input-search.css"




function InputSearch(){
  const navigate = useNavigate()

  function searchTrip(){
    navigate(`/trip/result`)
  }
return (
<div className="container " id="input-search-container">
<div class="input-group border border-success rounded">
  
  <input type="text" class="form-control" placeholder="Point de départ"/>
  <input class="form-control"  type="text" placeholder="point d'arriver"/>
  <input class="form-control"  type="date" />
  <button class="btn btn-info" onClick={searchTrip} type="button">Rechercher</button>

  
</div>
</div>
 
);
}
export default InputSearch