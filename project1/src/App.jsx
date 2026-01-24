import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Card from './components/Card'
import Data from './data.json'

function App(){
  return <div>
    <h1 className='headingStyle'>Todo App</h1>
    {Data.map((item) => <Card titleText = {item.title} descText = {item.descText} />)}

  </div>
}

export default App
