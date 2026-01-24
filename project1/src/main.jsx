import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const todoTitle = "Call Family";
const date = new Date();
const dateName = date.getDate();

const desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, facere incidunt. Eveniet, enim unde nulla porro facere quae dolorum rem optio rerum ea quidem molestiae perferendis error accusantium necessitatibus voluptas."

function Card(){
  return <div className='card'>
      <h2 className='cardTitle'>{todoTitle}</h2>
      <p className='cardDesc'>{desc} </p>
      <p className='cardFooter'>{"Date: " + date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()} </p>
    
    </div>
}

createRoot(document.getElementById('root')).render(
  <div>
    <h1 className='headingStyle'>Todo App</h1>
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
)
