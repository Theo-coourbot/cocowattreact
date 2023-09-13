
import { useNavigate } from "react-router-dom"
import InputSearch from "../componant/InputSearch"
import NavBar from "../componant/NavBar"
import "../css/route/home.css"
import CardDetails from "../componant/Card-details"


const ProfileDetails = () => {
 

    return (
      <>
      
      <NavBar/>

      <CardDetails mode="profile"/>
      

      

      
      </>
    )
  }
  
  export default ProfileDetails