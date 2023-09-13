import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { isUserLoggedIn } from "../services/AuthService"

export const ProtectedRoute = (props) => {
  

  if (isUserLoggedIn) {
    return (
      <>
        {props.children}
      </>
    )
  } else return <Navigate to={`/`} />
}