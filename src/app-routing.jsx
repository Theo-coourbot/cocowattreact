import { createBrowserRouter } from "react-router-dom"
import App from './App'
import ErrorPage from "./routes/ErrorPage"

import ResultTrip from "./routes/ResultSearchTrip"
import SignIn from "./routes/SignIn"
import SignUp from "./routes/SigntUp"
import CreateTrip from "./routes/CreateTrip"
import Home from "./routes/Home"





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
        }
       
      
      
      
      
      ]

  }
])

export default router