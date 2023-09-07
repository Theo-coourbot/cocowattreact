import './index.css'


import './App.css';
import React from 'react'
import Home from './routes/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='body-bg' >
      
    
    <Outlet/>
   
    </div>
  
  );
}

export default App;
