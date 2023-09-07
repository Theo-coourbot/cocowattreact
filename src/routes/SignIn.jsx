
import BtnForm from "../componant/BtnForm"
import Input from "../componant/Input"
import "../css/home.css"
import NavBar from "../componant/NavBar"


const SignIn = () => {
    return (
      <>
      
      <NavBar/>
      <div className="text-center mt-5">

          <h1 className="title">coconecte toi</h1>
      </div>
      <div className="container text-center">

      <form className="mt-5">
  <div class="mb-5 ">
    <Input name={"E-mail"}/>
  </div>
  <div class="mb-5">
  <Input name={"Password"}/>
  </div>
  

    <BtnForm name={"Connexion"}/>
  
</form>
      </div>
      
      </>
    )
  }
  
  export default SignIn