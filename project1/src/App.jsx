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



function App(){
  
  return(
    <div>
      <Card1 name = "card1" desc = "this is card1"/>
      <Card2 name = "card2" desc = "this is card2"/>

    </div>
  )


}

export default App
