import React, { useState } from 'react'

export default function HOOKS_USESTATE2() {
  const [count, setCount] = useState(0);
  
  const Increment = () =>{
    setCount(count + 1)
  }

  return (
    <div>
      <h1>hook2: {count}</h1>
      <button onClickCapture={Increment} >Increment</button>
    </div>
  )
}
