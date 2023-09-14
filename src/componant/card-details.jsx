import { Link, useNavigate, useParams } from "react-router-dom"
import "../css/componant/card-detail-componant.css"
import { getLoggedInUser } from "../services/AuthService";
import { findByEmailCallApi } from "../services/UserService";
import { useState } from "react";
import { deleteCarCallApi } from "../services/CarService";
import { getTripById } from "../services/TripService";

function CardDetails(props){
    // const navigate = useNavigate();
    const navigate = useNavigate()
    const [user , setUser] = useState()
    const [car,setCar] =useState();
    const {id} = useParams();
    const {trip,setTrip} = useState();

    
    
    
    
    if(props.mode === "profile")
    {
    const emailLogged = getLoggedInUser();
    console.log(emailLogged);

    findByEmailCallApi(emailLogged).then((response) =>{

        console.log(response.data);
        setUser(response.data);
        
    }).catch (error => {
        console.error(error);

    })
    console.log(user);              

    
    

    return (
        <>
        
        <div className="container bg-light rounded mt-5 p-3">
            
                 <div className="row mb-4">
                     <div className="col">
                         <h2>Theo</h2>
                         <p>22ans</p>
                         <div className="d-flex">
                             <div className="star-img"></div>
                             <p className="ms-1 mt-2">  pas d'avis</p>
                         </div>
                     </div>
                     <div className="col">
                         <div className="d-flex justify-content-end">
 
                         <div className="img-profile"></div>
                         </div>
                     </div>
                 </div>
 
                 <div className="row mb-4">
                     <div className="coll">
                         <p>0628282828</p>
                         <p>theo.courbot@coucou.fr</p>
                         <p>10 trajets efectuee</p>
                     </div>
                     
 
                 </div>
 
                 <div className="row">
                     <div className="col">
                         <div className="mb-3">
 
                     <Link className="btn btn-primary" to={"/profil/comment"}  type="submit">voir mes avis</Link>
                         </div>
                     <Link className="btn btn-primary" to={"/trip/result"} type="submit">voir mes trajets</Link>
 
                     </div>
                     <div className="col">
                         <div className="mb-3 d-flex justify-content-end">
                             <Link className="btn btn-primary" to={"/profil/update"} type="submit">modifier profile</Link>
                         </div>
                         <div className="d-flex justify-content-end">
                             <Link className="btn btn-primary" to={"/car/detail"} type="submit">info voiture</Link>
                         </div>
 
                     </div>
                     
                 </div>
            
        </div>
       
 
         </>
         )
 
   } else if(props.mode === "trip")
   {
    
    getTripById(id).then((response) =>{

        console.log(response.data);
        setTrip(response.data);
        
    }).catch (error => {
        console.error(error);

    })



    


    return (
        <>
        
        <div className="container bg-light rounded mt-5 p-3">
            
               
                    <div className="text-center">

                    <h2>{props.date}</h2>
                    </div>
                    <p>{props.remainingPlace} place restantes</p>
                    <div className="bg-dark p-2 rounded"></div>

                    <div className="row mt-3">
                        <div className="col">
                            <p>Départ : {props.startingPoint}</p>
                        </div>
                        <div className="col">
                            <p>Arrivée : {props.endPoint}</p>

                        </div>
                    </div>
                    <div className="bg-dark p-2 rounded"></div>
                    <div className="d-flex justify-content-center m-4">
                        <div className="profile"></div>

                    </div>

                    <div className="row">
                        <div className="col">
                            <p>{props.name}</p>
                        </div>
                        <div className="col">

                            <div  className="line-bg"></div>
                        </div>
                        <div className="col">
                            
                        <p>{props.brand}</p>
                        </div>
                        

                    </div>
                    <div className="row">
                    <div className="col">
                            <p>{props.age} ans</p>
                    </div>
                    <div className="col">

                        <div className="line-bg"></div>
                    </div>

                    <div className="col">

                        <p>{props.model}</p>
                    </div>


                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="d-flex">
                                <div className="star-img"></div>
                                <p>{props.note}/5</p>
                            </div>
                        </div>
                        <div className="col">

                        <div  className="line-bg"></div>
                        </div>
                        <div className="col">

                        <div className="ecologo"></div>
                        </div>
                    </div>
                    
            <div className="text-center mt-5 mb-2">
            <button class="btn btn-primary" type="submit">Je reserve</button>
            </div>
        </div>
       
 
         </>
    )
   } else if(props.mode === "car") {
       const car = user.car

       const deletCar = () => {
        deleteCarCallApi(car.id)

       }
    return (

        <>
        
        <div className="container bg-light rounded mt-5 p-3">
            
                 <div className="row mb-4">
                     <div className="col">
                         <h2>{props.brand}</h2>
                         <p>{props.model}</p>
                         
                         {props.isElectrique ?
                          <p>Voiture éléctrique</p>
                          :
                          <p>Voiture non éléctrique</p>
                          }

                          <p>{props.avalidePlace} place disponible</p>
                     </div>
                     <div className="col">
                        <div className="d-flex justify-content-end">

                            <div className="img-profile"></div>
                        </div>

                     </div>
                    
                 </div>
                 <div className="row">
                    <div className="col">
                        <div className="mb-4">
                            <Link className="btn btn-primary" type="submit" to={"/car/add"}>Changer de véhicule</Link>
                        </div>
                        <div className="mb-4">

                            <button className="btn btn-primary" onClick={deletCar} type="submit">retirer le véhicule</button>
                        </div>

                    </div>
                 </div>
            
        </div>
       
 
         </>
       
       
        )


   } else if(props.mode === "comment") {
    return ( 
        
        <>
        <div className="container bg-light rounded mt-5 p-3">
            
            <div className="row mb-4">
                <div className="col">
                    <h2>{props.name}</h2>
                    <p>{props.age} ans</p>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-end">

                    <div className="img-profile"></div>
                    </div>
                </div>
            </div>

            <div className="my-2 bg-secondary rounded">
                <p className="p-1">coucou</p>


            </div>
       
   </div>
        
        </>
    )
        
   }
//    else if(props.mode === "addComment") {
//     return ( 
        
//         <>
        
//         <div className="container bg-light rounded mt-5 p-3">
            
//                  <div className="row mb-4">
//                      <div className="col">
//                          <h2>{props.name}</h2>
//                          <p>{props.age} ans</p>
//                          <div className="d-flex">
//                              <div className="star-img"></div>
//                              <p>{props.averageNote}/5</p>
//                              <p>{props.countNote} avis</p>
//                          </div>
//                      </div>
//                      <div className="col">
//                          <div className="d-flex justify-content-end">
 
//                          <div className="img-profile"></div>
//                          </div>
//                      </div>
//                  </div>
 
//                 <div class="form-floating">
//                     <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
//                     <label for="floatingTextarea">Ajouter un commentaire</label>
//                     <button class="btn btn-primary" type="submit"> valider</button>
//                 </div>
 
//                  </div>
 
                
 
       
       
 
//          </>
//     )
        
//    }
   
    }
    
    
    export default CardDetails