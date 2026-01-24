import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <h1 className='headingStyle'>Todo App</h1>
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
)
