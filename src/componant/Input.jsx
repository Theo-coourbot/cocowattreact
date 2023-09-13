import "../css/componant/input-componant.css"



function Input(props){
return (


  <input type="text" className="form-control mt-2" id="input" name={props.name} placeholder={props.name} />

);
}
export default Input