import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Card from './components/Card'


function App(){
  return <div>
    <h1 className='headingStyle'>Todo App</h1>
    <Card/>
    <Card/>
    <Card/>
    <Card/>

  </div>
}

export default App
