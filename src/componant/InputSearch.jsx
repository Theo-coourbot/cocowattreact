import { redirect, useNavigate } from "react-router-dom";
import "../css/componant-input-search.css"




function InputSearch(){
return (
<div className="container " id="input-search-container">
<div class="input-group border border-success rounded">
  
  <input type="text" class="form-control" placeholder="Point de départ"/>
  <input class="form-control"  type="text" placeholder="point d'arriver"/>
  <input class="form-control"  type="date" />
  <button class="btn btn-info" type="button">Button</button>

  
</div>
</div>
 
);
}
export default InputSearch