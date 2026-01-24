import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Card from './components/Card'


function App(){
  return <div>
    <h1 className='headingStyle'>Todo App</h1>
    <Card titleText="Call mother" descText ="This is description" />
    <Card titleText="Call father" descText ="This is desc2" />
    <Card titleText = "Call wife" descText="this is desc3" />

  </div>
}

export default App
