import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Card from './components/Card'
import Data from './data.json'
import {v4 as uuidv4} from "uuid";

const users = [
  {
    fullName: "Raihan Ahmed",
    age: 22,
    phones:[
      {home: "01752205317"},
      {office: "123"}
    ]
  },

  {
    fullName: "Elon Musk",
    age: 54,
    phones:[
      {home: "1"},
      {office:"2"}
    ]
  }
]


function App(){
  
  return(
    <div>
      <h1 style={{margin:"20px", color: "red"}} >Nested Lists</h1>
      {
        users.map((user, index)=> 
        <article key={index}>
          <h3>{user.fullName}</h3>
          <p>{user.age} </p>
          {
            user.phones.map((phone, index) => 
            <div>
              <p>{phone.home} </p>
              <p>{phone.office} </p>
            </div>
            )
          }
          <br />
        </article>)
      }

    </div>
  )


}

export default App
