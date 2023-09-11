import { useState } from "react"

import NavBar from "../../componant/NavBar"



const FormAddCar = () => {

  const [brand, setBrand] = useState('')
  const [modele, setModele] = useState('')
  const [avalidePlace, setAvalidePlace] = useState('')
  const [isElectric, setIsElectric] = useState(false)


  function handleTripCreateForm(e){

    e.preventDefault();

    const car = {brand, modele,avalidePlace, isElectric}

    console.log(car);

    
}
 

    return (
      <>
      
      <NavBar/>

    <div className="text-center">

      <h1>Renseigner votre voiture</h1>
    </div>

    <form className="mt-5 container text-center" onSubmit={handleTripCreateForm}>
<div class="mb-5">
<input type="text" className="form-control mt-2" id="input"  placeholder="point de Départ"
value={brand} onChange={(e)=> setBrand(e.target.value)}></input>
</div>
<div class="mb-5">
<input type="text" className="form-control mt-2" id="input"  placeholder="point d'arrivée"
value={modele} onChange={(e)=> setModele(e.target.value)}></input>
</div>
<div class="mb-5">
<input type="number" className="form-control mt-2" id="input"  placeholder="place(s) à disposition"
value={avalidePlace} onChange={(e)=> setAvalidePlace(e.target.value)}></input>
</div>
<div class="mb-5 d-flex ">
<p className="me-3 fs-2">est-elle éléctrique :</p>
<input class="form-check-input mt-2 fs-2" type="checkbox" value={isElectric} onChange={(e)=> setIsElectric(!isElectric)}/>

</div>




<button className="btn btn-primary"> Valider</button>

</form>

   
      

      

      
      </>
    )
  }
  
  export default FormAddCar