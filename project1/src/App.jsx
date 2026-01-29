import './App.css'
import React, { useState } from 'react'
import State from './State'
import Conditional_Rendering from './conditional_rendering'
import EVENT_HANDLER_CLASS from './EVENT_HANDLER_CLASS'
import EVENT_BINDING from './EVENT_BINDING'
import HOOKS_USESTATE from './HOOKS_USESTATE'
import HOOKS_USESTATE2 from './HOOKS_USESTATE/indexf'


function App(){
  
  //If i click on a child component, it also click on the parent component
  //This is called event bubbling.

  const child = (event) =>{
    console.log('child:', event);
  }
  const parent = (event) =>{
    console.log('parent: ', event);
  }

  return(
    <div  style={{backgroundColor:'beige'}} onClick={parent}>
     <h1>Welcome</h1>
     <button onClick={child} >click</button>
    </div>
  )


}

export default App
