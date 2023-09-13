
import { useNavigate } from "react-router-dom"
import InputSearch from "../componant/InputSearch"
import NavBar from "../componant/NavBar"
import "../css/route/home.css"


const Home = () => {
 

    return (
      <>
      
      <NavBar/>
      <h1 className="text-center " id="title">Cocowatt</h1>

       <InputSearch/>

      

      
      </>
    )
  }
  
  export default Home