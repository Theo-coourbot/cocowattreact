import "../../css/route/home.css"
import NavBar from "../../componant/NavBar"
import { useState } from "react"
import { registerAPICall } from "../../services/AuthService"
import { useNavigate } from "react-router-dom"


const SignUp = () => {

  const [firstName, setFirstName] = useState('')
  const navigate = useNavigate('');
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const imageUrl = "../../assets/profile-removebg-preview.png"

  function handleRegisterForm(e){

    e.preventDefault();

    const isAdmin = false
    const registerObj = {firstName, lastName ,phone, email, password ,isAdmin, imageUrl}

    // console.log(registerObj);
    // registerAPICall(firstName, lastName ,phone, email, password ,isAdmin, imageUrl)

    // registerAPICall(firstName, lastName ,phone, email, password ,isAdmin, imageUrl).then((response) => {
      
    registerAPICall(registerObj).then((response) => {
      console.log(response.data);
      navigate('/connexion')
  }).catch(error => {
      console.error(error);
  })

    
}
  

    return (
      <>
      
      <NavBar/>
      <div className="text-center mt-5">

      <h1 className="title">Rejoint la cocomunauté</h1>
      </div>
      <div className="container text-center ">

      <form className="mt-5" onSubmit={(e)=>handleRegisterForm(e)}>
      <div class="mb-5">
      <input type="text" className="form-control mt-2" id="input"  placeholder="Prenom"
      value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
  </div>
  <div class="mb-5">
  <input type="text" className="form-control mt-2" id="input"  placeholder="Nom"
    value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
  </div>
  <div class="mb-5">
  <input type="text" className="form-control mt-2" id="input"  placeholder="Téléphone"
  value={phone} onChange={(e)=> setPhone(e.target.value)} />
  </div>
  <div class="mb-5">
  <input type="email" className="form-control mt-2" id="input"  placeholder="Mail"
  value={email} onChange={(e)=> setEmail(e.target.value)} />
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
  
  export default SignUp