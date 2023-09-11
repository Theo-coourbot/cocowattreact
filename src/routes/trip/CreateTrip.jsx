

import "../../css/home.css"
import "../../css/route/create-trip.css"

import NavBar from "../../componant/NavBar"
import { useState } from "react"


const CreateTrip = () => {

  const [startingPoint, setStartingPoint] = useState('')
  const [endPoint, setEndPoint] = useState('')
  const [avalidePlace, setAvalidePlace] = useState('')
  const [distance, setDistance] = useState('')
  const [startingTrip, setStartingTrip] = useState('')


  function handleTripCreateForm(e){

    e.preventDefault();

    const trip = {startingPoint, endPoint,avalidePlace, distance,startingTrip}

    console.log(trip);

    
}


    return (
      <>
      
      <NavBar/>
      <div className="text-center mt-5">

      <h1 className="title">crée ton parcours</h1>
      </div>

      <div class="container text-center">
  <div class="row mt-5">
    <div class="col">
     
    <div className="container text-center ">

<form className="mt-5" onSubmit={handleTripCreateForm}>
<div class="mb-5">
<input type="text" className="form-control mt-2" id="input"  placeholder="point de Départ"
value={startingPoint} onChange={(e)=> setStartingPoint(e.target.value)}></input>
</div>
<div class="mb-5">
<input type="text" className="form-control mt-2" id="input"  placeholder="point d'arrivée"
value={endPoint} onChange={(e)=> setEndPoint(e.target.value)}></input>
</div>
<div class="mb-5">
<input type="number" className="form-control mt-2" id="input"  placeholder="place(s) à disposition"
value={avalidePlace} onChange={(e)=> setAvalidePlace(e.target.value)}></input>
</div>
<div class="mb-5">
<input type="number" className="form-control mt-2" id="input"  placeholder="Distance total"
value={distance} onChange={(e)=> setDistance(e.target.value)}></input>
</div>
<div class="mb-5">
<input type="date" className="form-control mt-2" id="input"  placeholder="Distance total"
value={startingTrip} onChange={(e)=> setStartingTrip(e.target.value)}></input>
</div>




<button className="btn btn-primary"> Valider</button>

</form>
</div>
    </div>
    
    <div class="col">
     <div className="map"></div>
    </div>
  </div>
</div>


      
      </>
    )
  }
  
  export default CreateTrip