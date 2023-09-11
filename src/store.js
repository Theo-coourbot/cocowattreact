import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./routes/auth/authSlice";


const store = configureStore({
    reducer: {
      authSlice
     
    }
  })
  
  export default store