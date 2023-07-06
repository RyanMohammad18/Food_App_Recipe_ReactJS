import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import style3 from "./style.module.css"

const RecipeInfo = () => {
    const [item,setItem]=useState();
    const {MealId} = useParams();
    if(MealId!=""){
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            setItem(data.meals[0]);
        })
    }
  return (
    <div>
           {
            (!item) ? "" : (<>
            
                <div className={style3.content}>
                    <img src={item.strMealThumb} alt="" />
                    <div className={style3.innercontent}>
                        <h1>{item.strMeal}</h1>
                        <h2>{item.strArea}</h2>
                        <h3>Category: {item.strCategory}</h3>
                    </div>
                </div>
                <div className="recipe-details">
                    <div className="ingredients">
                        <h2>Ingredients</h2>
                        <h4>{item.strIngredient1} : {item.strMeasure1}</h4>

                        <h4>{item.strIngredient2} : {item.strMeasure2}</h4>
                        <h4>{item.strIngredient3} : {item.strMeasure3}</h4>
                        <h4>{item.strIngredient4} : {item.strMeasure4}</h4>
                    </div>

                </div>
                <div className="video">
                    <iframe src={`https://www.youtube.com/embed/6R8ffRRJcrg`} >

                    </iframe>
                </div>
            
            </>)
           }

    </div>
  )
}

export default RecipeInfo