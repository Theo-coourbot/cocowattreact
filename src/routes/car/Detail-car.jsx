import NavBar from "../../componant/NavBar"
import CardDetails from "../../componant/Card-details"



const DetailCar = () => {
 

    return (
      <>
      
      <NavBar/>
      <CardDetails mode="car" brand="Renault" model="kangou" isElectrique={false} availdePlace="2"/>
      

      

      
      </>
    )
  }

  export default DetailCar;