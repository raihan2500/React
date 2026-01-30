import React, { useEffect, useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

/*
  www.themealdb.com/api/json/v1/1/categories.php 
  www.themealdb.com/api/json/v1/1/filter.php?c=Seafood 

*/
const categories = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const filerByCategory = 'www.themealdb.com/api/json/v1/1/filter.php?c=';
const filterById = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const demo = {
  "categories": [
    {
      "idCategory": "1",
      "strCategory": "Beef",
      "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
      "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
    },
    
  ]
}

export default function Meals() {
  const navigate = useNavigate();
  const [lists, setLists] = useState(null);
  useEffect(() =>{
    fetch(categories)
    .then((res) => {return res.json();})
    .then((res) => {
      setLists(res);
      console.log(res);
    })
  },[])

  const clickOnImage = (category) =>{
    console.log(category);
  }
  if(lists == null){
    return <h1>Loading Please wait</h1>
  }
  
  return (
    <div>
      <h1>Meal</h1>
      {lists && (
        <div>
          {lists.categories.map(category => (
            <div className='categories' key={category.idCategory} >
              <img src={category.strCategoryThumb} alt="" onClick={ () => 
                {
                  navigate('/category/' + category.strCategory);
                }
              }/>
              <h3> {category.strCategory} </h3>
              <p>{category.strCategoryDescription}</p>
            </div>
          ))}
          
        </div>
      )}

    </div>
  )
}
