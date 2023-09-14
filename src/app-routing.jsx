import { createBrowserRouter } from "react-router-dom"
import App from './App'
import ErrorPage from "./routes/ErrorPage"

import ResultTrip from "./routes/trip/ResultSearchTrip"
import SignIn from "./routes/auth/SignIn"
import SignUp from "./routes/auth/SigntUp"
import CreateTrip from "./routes/trip/CreateTrip"
import Home from "./routes/Home"
import ProfileDetails from "./routes/user/profile-details"
import DetailsTrip from "./routes/trip/Detail-trip"
import FormAddCar from "./routes/car/Form-add-car"
import DetailCar from "./routes/car/Detail-car"
import ShowComment from "./routes/comment/Show-comment"
import AddComment from "./routes/comment/Add-comment"
import { ProtectedRoute } from "./routes/protectedRoute"
import updateProfil from "./routes/user/Update"





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
          element: <Home />

      },
        {
          path: "/trip/create",
          element: <ProtectedRoute><CreateTrip /></ProtectedRoute>
        },
        {
          path: "/trip/result",
          element: <ResultTrip />
        },
        {
          path: "/connexion",
          element: <SignIn />
        },
        {
          path: "/inscription",
          element: <SignUp />
        },
        {
          path: "/trip/detail",
          element: <ProtectedRoute><DetailsTrip /></ProtectedRoute>
        },
        {
          path: "/profil/detail",
          element: <ProfileDetails />
        },
        {
          path: "/car/add",
          element: <ProtectedRoute><FormAddCar /></ProtectedRoute>
        },
        {
          path: "/car/detail",
          element: <ProtectedRoute><DetailCar /></ProtectedRoute>
        },
        {
          path: "/profil/comment",
          element: <ProtectedRoute><ShowComment /></ProtectedRoute>
        },
        {
          path: "/profil/comment/add",
          element: <ProtectedRoute><AddComment /></ProtectedRoute>
        },
        {
          path: "/profil/update",
          element: <ProtectedRoute> <updateProfil/></ProtectedRoute>
        },
        
       
      
      
      
      
      ]

  }
])

export default router