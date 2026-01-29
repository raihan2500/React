import React, { useState } from 'react'
import '../App.css'

export default function Counter() {
  const [count, setCount] = useState(0);
 
  const handleClick = (e) => {
    console.log('clicked', e)
    setCount(count => count + e)
  }


  return (
    <div>
      <h1 style={{backgroundColor:'wheat', color:'black', padding:'20px'}} >Counter App</h1>
      <h2 style={{backgroundColor:'green', padding:'10px'}} >Count: {count}</h2>
      <div className='btns'>
        {
          count < 5 ? (
            <button className='btn' onClick={() => handleClick(1)}>+</button>
          ): (
            <button className='disabled-btn' disabled="">+</button>
          )
        }
        <button className='btn' onClick={() => handleClick(-1)} disabled = {count <= -5} >-</button>
        <button className='btn' onClick={() => handleClick(-count)}>0</button>
      </div>
    </div>
  )
}
