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
    <Card titleText= {Data[0].title} descText = {Data[0].desc} />
    <Card titleText= {Data[1].title} descText = {Data[1].desc} />
    <Card titleText= {Data[2].title} descText = {Data[2].desc} />


  </div>
}

export default App
