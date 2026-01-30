import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const category = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export default function Category() {
  const {name} = useParams();
  const [lists, setLists] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(category + name)
    .then((res)=>{
      return res.json();
    }).then((data)=>{
      setLists(data);
    })
  }, [])

  if(lists == null){
    return <h1>Loading...</h1>
  }

  return (
    <div className="category-container">
      <h1>{name} </h1>
      <div className="meals-grid">
      {lists&&(
        lists.meals.map((item)=>(
          <div className='meal-card' key={item.idMeal}>
          <h2>{item.strMeal}</h2>
          <img src={item.strMealThumb} alt="" onClick={() =>{
            navigate('/meal/' + item.idMeal);
          }}/>
          </div>
          )
        )
      )}
      </div>
      
    </div>
  )
}
