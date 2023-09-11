import { createBrowserRouter } from "react-router-dom"
import App from './App'
import ErrorPage from "./routes/ErrorPage"

import ResultTrip from "./routes/ResultSearchTrip"
import SignIn from "./routes/SignIn"
import SignUp from "./routes/SigntUp"
import CreateTrip from "./routes/CreateTrip"
import Home from "./routes/Home"
import ProfileDetails from "./routes/profile-details"
import DetailsTrip from "./routes/Detail-trip"
import FormAddCar from "./routes/Form-add-car"
import DetailCar from "./routes/Detail-car"
import ShowComment from "./routes/Show-comment"
import AddComment from "./routes/Add-comment"





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
          path: "/car/details",
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