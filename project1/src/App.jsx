import './App.css'
import React, { useState } from 'react'
import State from './State'
import Conditional_Rendering from './conditional_rendering'
import EVENT_HANDLER_CLASS from './EVENT_HANDLER_CLASS'
import EVENT_BINDING from './EVENT_BINDING'
import HOOKS_USESTATE from './HOOKS_USESTATE'
import HOOKS_USESTATE2 from './HOOKS_USESTATE/indexf'


//Update state based on previous state

function App(){
  const [count, setCount] = useState(0);
  const increment = () =>{
    
    //by default erokom hoy
    // setCount(count + 1); //0 + 1
    // setCount(count + 1); //0 + 1
    // setCount(count + 1); //0 + 1

    setCount(count => count + 1); //0 + 1
    setCount(count => count + 1); //1 + 1
    setCount(count => count + 1); //2 + 1
    
    //We can also write like this
    setCount((prev)=>prev + 1);
    setCount((count)=> count + 1)
    setCount((count) =>{
      return count + 1;
    })

  }
  return(
    <div>
      <h1>count: {count}</h1>
      <button onClick={increment}>+</button>
    </div>
  )


}

export default App
