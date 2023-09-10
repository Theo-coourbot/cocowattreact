import BtnForm from "../componant/BtnForm"
import Input from "../componant/Input"
import NavBar from "../componant/NavBar"



const FormAddCar = () => {
 

    return (
      <>
      
      <NavBar/>

    <div className="text-center">

      <h1>Renseigner votre voiture</h1>
    </div>
    <div className="container text-center mt-5">
        <div className="my-4">

            <Input name="Marque"></Input>
        </div>
        <div className="my-4">
            <Input name="Model"></Input>
            
        </div>
        <div className="my-4">
            <Input name="Places disponible"></Input>
            
        </div>
        <div className="my-4">
            
            <Input name="electrique"></Input>
        </div>

    <BtnForm name="Valider"></BtnForm>
    </div>

   
      

      

      
      </>
    )
  }
  
  export default FormAddCar