
import { useState } from "react";
import NavBar from "../../componant/NavBar";


const AddComment = () => {
  const [description, setDescription] = useState('')
  const [note ,setNote] = useState('')

  const handleAddCommentForm = (e) => {
    e.preventDefault();
    const comment = {description,note};
    console.log(comment);

  }
 

    return (
      <>
      
      <NavBar/>
      <div className="container bg-light rounded mt-5 p-3">
            
            <div className="row mb-4">
                <div className="col">
                    <h2>Theo</h2>
                    <p>22 ans</p>
                    <div className="d-flex">
                        <div className="star-img"></div>
                        <p>4/5</p>
                        <p className="ms-2 fs-6 text-decoration-underline">22 avis</p>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-end">

                    <div className="img-profile"></div>
                    </div>
                </div>
            </div>

           <form class="form-floating text-center" onSubmit={handleAddCommentForm}>
               <textarea class="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}  id="floatingTextarea"></textarea>
               <label for="floatingTextarea">Ajouter un commentaire</label>
               <div>

               <input className=" m-2" min={0} max={5} placeholder="note sur 5" type="number" value={note} onChange={(e)=>setNote(e.target.value)} />
               </div>
               <button class="btn btn-primary mt-2" type="submit"> valider</button>
           </form>

            </div>

           

  
     
      

      

      
      </>
    )
  }

  export default AddComment;