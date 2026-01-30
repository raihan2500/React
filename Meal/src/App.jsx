import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Meals from './components/Meals'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Category from './components/Category'
import Meal from './components/Meal'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Meals/>}/>
        <Route path='/meal/:id' element={<Meal/>}/>
        <Route path="/category/:name" element={<Category/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
