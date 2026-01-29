import './App.css'
import React, { useState } from 'react'
import State from './State'
import Conditional_Rendering from './conditional_rendering'
import EVENT_HANDLER_CLASS from './EVENT_HANDLER_CLASS'
import EVENT_BINDING from './EVENT_BINDING'
import HOOKS_USESTATE from './HOOKS_USESTATE'
import HOOKS_USESTATE2 from './HOOKS_USESTATE/indexf'
import USE_EFFECT from './USE_EFFECT'
import DataFetch from './USE_EFFECT/DataFetch'

function App(){
  
  return(
    <div>
     <h1>Welcome</h1>
      <DataFetch/>
    </div>
  )


}

export default App
