import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const meal = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export default function Meal() {
  const {id} = useParams();
  const [details, setDetails] = useState(null);
  useEffect(()=>{
    fetch(meal+id)
    .then((res)=>res.json())
    .then((data)=>{
      setDetails(data.meals[0]);
    })
  },[])
  console.log(details);

  if(details == null){
    return <h1>Loading...</h1>
  }
  return (
    <div className='meal-container'>
      <h1>{details.strMeal}</h1>
      <img className='meal-img' src={details.strMealThumb} alt="" />
      <p>
        {details.strInstructions}
      </p>
    </div>
  )
}
