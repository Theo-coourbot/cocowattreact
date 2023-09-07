import BtnForm from "../componant/BtnForm"
import Input from "../componant/Input"
import "../css/home.css"
import NavBar from "../componant/NavBar"


const SignUp = () => {
    return (
      <>
      
      <NavBar/>
      <div className="text-center mt-5">

      <h1 className="title">Rejoit la cocomunauté</h1>
      </div>
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
      
      </>
    )
  }
  
  export default SignUp