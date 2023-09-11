import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice ({
    name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null
  },
  reducers: {
    signOut(state) {
      state.user = null
      localStorage.removeItem('idToken')
    }
  },
 
})

export default authSlice.reducer;