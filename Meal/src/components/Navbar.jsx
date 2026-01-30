import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <NavLink className='Navbar' to="/">Home</NavLink>
    </nav>
  )
}
