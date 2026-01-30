import './App.css'
import React, { useState } from 'react'
import State from './State'
import Conditional_Rendering from './conditional_rendering'
import EVENT_HANDLER_CLASS from './EVENT_HANDLER_CLASS'
import EVENT_BINDING from './EVENT_BINDING'
import HOOKS_USESTATE from './HOOKS_USESTATE'
import HOOKS_USESTATE2 from './HOOKS_USESTATE/indexf'
import USE_EFFECT from './USE_EFFECT'
import DataFetch from './USE_EFFECT/DataFetch'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Navbar from './components/Navbar'


function App(){
  
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )


}

export default App
