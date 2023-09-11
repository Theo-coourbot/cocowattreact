
import { Link, NavLink, Outlet } from "react-router-dom";
import "../css/nav.css"



function NavBar(){
return (
  <>
  
<nav class="navbar navbar-expand-lg " id="nav-container">
  <div class="container-fluid">
    <div className="logo-img"></div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <p className="fs-3">Cocowatt</p>
        
        <Link class="nav-link fs-4" to={`/`}>Rechercher</Link>
        <Link class="nav-link fs-4 " to={`/trip/create`} >Publier un trajet</Link>
         

        <Link class="nav-link fs-4 " to={`/connexion`}>sign In</Link>
        <Link class="nav-link fs-4  " to={`/inscription`} >sign Up</Link> 
         
      </div>
    </div>
  </div>
</nav>
     
  
</>
);
}
export default NavBar