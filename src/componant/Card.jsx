import { Link, useNavigate } from "react-router-dom"
import "../css/componant/card-componant.css"





function Card(props){
    const navigate = useNavigate();
    const showDetailtrip = () =>{
        navigate("/trip/detail")
    
    } 
return (

//    <Link to={"/trip/detail"} className="text-decoration-none">
    <div onClick={(e)=>showDetailtrip(e)} className={props.remaningPlace == 0 ? "is-complete mt-5 mx-5 p-1" : "card  mt-5 mx-5 p-1" }>

        <div className="row">
            <div className="col">
                <div className="ms-2">
                    <p>Départ : {props.startingPoint}</p>
                </div>
            </div>
            <div className="col">
                <div className="d-flex justify-content-center">
                    <p>Arrivée : {props.endPoint}</p>
                </div>
            </div>
            <div className="col">
                <div className="d-flex justify-content-end me-3">
                
                       { props.remaningPlace != 0 ?
                        <p> {props.remaningPlace} place restant </p>
                        :
                        <p> complet </p>}
                    


                
                </div>
            </div>

        </div>
        <div className="row">
            <div className="col">
            <div className="ms-2">
            <div className="img-profile"></div>
                </div>
            </div>
            <div className="col">
                <div className="d-flex justify-content-center">

            <div className="star-img me-2"></div>
            <p>{props.note}/5</p>
                </div>
            </div>
            <div className="col">
                <div className="d-flex justify-content-end me-3">
                <p className="me-3">{props.date}</p>
                <div className="ecologo"></div>
                </div>
            </div>

        </div>
        </div>
        // </Link>
    

    


   


 
);
}
export default Card