
import NavBar from "../../componant/NavBar"
import "../../css/home.css"
import CardDetails from "../../componant/Card-details"


const DetailsTrip = () => {
 

    return (
      <>
      
      <NavBar/>
      <CardDetails mode="trip" date="10/09/2011" remainingPlace="2" startingPoint="Lille" endPoint="Paris" name="theo" brand="Peugot" model="308" age="21" note="2"></CardDetails>
      

      

      
      </>
    )
  }
  
  export default DetailsTrip