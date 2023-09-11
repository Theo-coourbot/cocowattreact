import { createBrowserRouter } from "react-router-dom"
import App from './App'
import ErrorPage from "./routes/ErrorPage"

import ResultTrip from "./routes/trip/ResultSearchTrip"
import SignIn from "./routes/auth/SignIn"
import SignUp from "./routes/auth/SigntUp"
import CreateTrip from "./routes/trip/CreateTrip"
import Home from "./routes/Home"
import ProfileDetails from "./routes/profile-details"
import DetailsTrip from "./routes/trip/Detail-trip"
import FormAddCar from "./routes/car/Form-add-car"
import DetailCar from "./routes/car/Detail-car"
import ShowComment from "./routes/comment/Show-comment"
import AddComment from "./routes/comment/Add-comment"





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
          element: <CreateTrip />
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
          element: <DetailsTrip />
        },
        {
          path: "/profil/detail",
          element: <ProfileDetails />
        },
        {
          path: "/car/add",
          element: <FormAddCar />
        },
        {
          path: "/car/detail",
          element: <DetailCar />
        },
        {
          path: "/profil/comment",
          element: <ShowComment />
        },
        {
          path: "/profil/comment/add",
          element: <AddComment />
        },
        
       
      
      
      
      
      ]

  }
])

export default router