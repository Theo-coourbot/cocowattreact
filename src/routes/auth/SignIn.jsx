
import BtnForm from "../../componant/BtnForm"
import Input from "../../componant/Input"
import "../../css/route/home.css"
import NavBar from "../../componant/NavBar"
import {  useState } from "react"
import { loginAPICall } from "../../services/AuthService"


const SignIn = () => {

 
  const [mail,setMail] = useState("")

  const [password,setPassword] = useState("")

  const handleconnectForm = (e) => {
  
    const user = {mail,password}
    console.log(user);
    loginAPICall(mail,password);

    e.preventDefault()
  }
 

    return (
      <>
      
      <NavBar/>
      <div className="text-center mt-5">

          <h1 className="title">coconecte toi</h1>
      </div>
      <div className="container text-center">

      <form className="mt-5" onSubmit={(e)=>handleconnectForm(e)}>
  <div class="mb-5 ">
  <input type="email" className="form-control mt-2" id="input"  placeholder="Mot de passe"
  value={mail} onChange={(e)=> setMail(e.target.value)} />
  </div>
  <div class="mb-5">
  <input type="password" className="form-control mt-2" id="input"  placeholder="Mot de passe"
  value={password} onChange={(e)=> setPassword(e.target.value)} />
  </div>
  

  <button class="btn btn-primary"  type="submit">connexion</button>
  
  
</form>
      </div>
      
      </>
    )
  }
  
  export default SignIn