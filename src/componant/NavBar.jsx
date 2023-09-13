
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "../css/componant/nav.css"
import { getLoggedInUser, isUserLoggedIn, logout } from "../services/AuthService";



function NavBar(){

  const isLogged = isUserLoggedIn();
  const navigate = useNavigate();
  const emailLogged = getLoggedInUser();
  // console.log(emailLogged);

  const deconexion = () => {

    navigate("/")
    logout();

  }

 
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
         
        {isLogged == false ? 
        <>
         <Link class="nav-link fs-4 " to={`/connexion`}>Se connecter</Link>
        <Link class="nav-link fs-4  " to={`/inscription`} >S'inscrire</Link> 
        
        </>
       
        
         : <button className="btn btn-outline-success" onClick={deconexion}>Deconnexion</button>}
        
         
      </div>
    </div>
  </div>
</nav>
     
  
</>
);
}
export default NavBar