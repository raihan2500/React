import React, { useEffect, useState } from 'react'

export default function USE_EFFECT() {
  const [count, setCount] = useState(0);
  //Calls with every rendering
  // useEffect(() => {
  //   console.log('use effect');
  // })

  //Calls with first rendering
  // useEffect(() => {
  //   console.log('use effect');
  // }, [])


  //Call when count rendering
  useEffect(() => {
    console.log('use effect');
  }, [count])



  return (
    <div>
      {
        console.log('rendering')
      }
      <h1>count: {count}</h1>
      <button onClick={() => {setCount(count + 1)}} >+</button>
    </div>
  )
}
