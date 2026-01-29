import React, { useEffect, useState } from 'react'

const categories = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export default function DataFetch() {

  const [meal, setMeal] = useState(null);
  useEffect(() =>{
    fetch(categories)
    .then((res)=>{
      return res.json();
    }).then((data)=>{
      setMeal(data);
      console.log(data);
    })
  },[])
  const clicked = (e) => {
    console.log('clicked: ', e)
  }
  return (
    <div>
      <h1>Meal</h1>
      {
        meal && meal.categories && (
          <div>
            {
              meal.categories.map((m) => (
                <div>
                  {console.log(m.idCategory)}
                  <p >{m.strCategory}</p>
                  <img src={m.strCategoryThumb} alt="" onClick={ () => clicked(m.strCategory)}/>
                  <p></p>
                </div>
              )) 
            }
          </div>
        )
      }
    </div>
  )
}
