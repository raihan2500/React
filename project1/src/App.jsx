import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Card from './components/Card'
import Data from './data.json'

function App(){
  let items = [];
  // for(let i = 0; i < Data.length; i++){
  //   items.push(<Card titleText = {Data[i].title} descText = {Data[i].desc} /> );
  // }

  items = Data.map((item) => <Card titleText = {item.title} descText = {item.descText} />)

  return <div>
    <h1 className='headingStyle'>Todo App</h1>
    {items}

  </div>
}

export default App
