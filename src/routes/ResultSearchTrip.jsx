
import Card from "../componant/Card"
import InputSearch from "../componant/InputSearch"
import NavBar from "../componant/NavBar"
import "../css/home.css"


const ResultTrip = () => {
    return (
      <>
      
      <NavBar/>
      
      <Card startingPoint={"Lille"} date={"10/06/2000"} remaningPlace={"1"} endPoint={"Paris"} note={"2"} />
      <Card startingPoint={"Lille"} date={"20/12/2010"} remaningPlace={"0"} endPoint={"Paris"} note={"2"} />
      
      </>
    )
  }
  
  export default ResultTrip