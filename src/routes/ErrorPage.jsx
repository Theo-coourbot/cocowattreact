import "../css/error.css"
import { useRouteError } from "react-router-dom"


const ErrorPage = () => {
  
  const error = useRouteError()

  return (
    <div className="img-error">
      <div className="d-flex flex-column justify-content-center align-items-center" style={{height: "100vh", width: "100vw"}}>
      <div className="bg-warning text-center">
      <h3>Error {error.status}!</h3>
      <p>{error.data}</p>

      </div>
    </div>
     
    </div>
  )
}

export default ErrorPage