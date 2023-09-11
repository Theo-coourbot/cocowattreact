
import BtnForm from "../componant/BtnForm"
import Input from "../componant/Input"
import "../css/home.css"
import NavBar from "../componant/NavBar"
import { useState } from "react"


const SignIn = () => {

  const [id,setId] = useState("")
  const [mail,setMail] = useState("")
  const [password,setPassword] = useState("")

  const signIn = (e) => {
    e.preventDefault()
  }
 

    return (
      <>
      
      <NavBar/>
      <div className="text-center mt-5">

          <h1 className="title">coconecte toi</h1>
      </div>
      <div className="container text-center">

      <form className="mt-5" onSubmit={signIn}>
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