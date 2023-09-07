

import "../css/home.css"
import "../css/route/create-trip.css"
import BtnForm from "../componant/BtnForm"
import Input from "../componant/Input"
import NavBar from "../componant/NavBar"


const CreateTrip = () => {
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

<form className="mt-5">
<div class="mb-5">
<Input name={"Prenom"}/>
</div>
<div class="mb-5">
<Input name={"Nom"}/>
</div>
<div class="mb-5">
<Input name={"téléphone"}/>
</div>
<div class="mb-5">
<Input name={"E-mail"}/>
</div>
<div class="mb-5">
<Input name={"Password"}/>
</div>



<BtnForm name={"Inscription"}/>

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