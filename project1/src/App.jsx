import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Card from './components/Card'
import Data from './data.json'
import {v4 as uuidv4} from "uuid";

import Card1  from './components/Card1'; //Function Component
import Card2 from './components/Card2'; //Class component


function Welcome1(){
  return <h1>Welcome1</h1>
}

function Welcome2(){
  return React.createElement("h1", {}, "welcome2");
}

function Todo(){
  return <div>
    <p>Todo Tittle</p>
    <p>Todo desc</p>
  </div>
}

function Todo2(){
  return React.createElement("div", {}, 
    React.createElement("p", {}, "Todotitle2"),
    React.createElement("p", {}, "Tododesc2")
  )
}

function App(){
  
  return(
    <div>
      <Welcome1 />
      <Welcome2 />

      <Todo></Todo>
      <Todo2></Todo2>
    </div>
  )


}

export default App
