import './App.css'
import React from 'react'

import { FaFacebook, FaYoutube } from "react-icons/fa6";

function App(){
  
  return(
    <div>
      <h1>Welcome to React</h1>
      <span>
        <FaFacebook className='icon'/>
      </span>
      <span>
        <FaYoutube className='icon'/>
      </span>
    </div>
  )


}

export default App
