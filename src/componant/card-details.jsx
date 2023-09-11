import "../css/componant/card-detail-componant.css"

function CardDetails(props){


   if(props.mode === "profile")
   {
    return (
        <>
        
        <div className="container bg-light rounded mt-5 p-3">
            
                 <div className="row mb-4">
                     <div className="col">
                         <h2>theo</h2>
                         <p>22 ans</p>
                         <div className="d-flex">
                             <div className="star-img"></div>
                             <p>pas d'avis</p>
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
                         <p>06 26 ...</p>
                         <p>c.c@gmail.com</p>
                         <p>10 trajets efectuee</p>
                     </div>
                     
 
                 </div>
 
                 <div className="row">
                     <div className="col">
                         <div className="mb-3">
 
                     <button class="btn btn-primary" type="submit">Button</button>
                         </div>
                     <button class="btn btn-primary" type="submit">Button</button>
 
                     </div>
                     <div className="col">
                         <div className="mb-3 d-flex justify-content-end">
                             <button class="btn btn-primary" type="submit">Button</button>
                         </div>
                         <div className="d-flex justify-content-end">
                             <button class="btn btn-primary" type="submit">Button</button>
                         </div>
 
                     </div>
                     
                 </div>
            
        </div>
       
 
         </>
         )
 
   } else if(props.mode === "trip")
   {
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
            <button class="btn btn-primary" type="submit">Button</button>
            </div>
        </div>
       
 
         </>
    )
   } else if(props.mode === "car") {
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
                            <button class="btn btn-primary" type="submit">Changer de véhicule</button>
                        </div>
                        <div className="mb-4">

                            <button class="btn btn-primary" type="submit">retirer le véhicule</button>
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
   else if(props.mode === "addComment") {
    return ( 
        
        <>
        
        <div className="container bg-light rounded mt-5 p-3">
            
                 <div className="row mb-4">
                     <div className="col">
                         <h2>{props.name}</h2>
                         <p>{props.age} ans</p>
                         <div className="d-flex">
                             <div className="star-img"></div>
                             <p>{props.averageNote}/5</p>
                             <p>{props.countNote} avis</p>
                         </div>
                     </div>
                     <div className="col">
                         <div className="d-flex justify-content-end">
 
                         <div className="img-profile"></div>
                         </div>
                     </div>
                 </div>
 
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Ajouter un commentaire</label>
                </div>
 
                 </div>
 
                
 
       
       
 
         </>
    )
        
   }
   
    }
    
    
    export default CardDetails