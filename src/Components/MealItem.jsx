import React from 'react'
import styles from './style.module.css'
import {useNavigate} from "react-router-dom"
const MealItem = ({data}) => {

  let navigate = useNavigate();

  return (
    <>
    {
        (!data) ? "Not Found data" : data.map(item=>{
            return (
                <div className={styles.card} key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
                <img src={item.strMealThumb} alt="#" />
                <h3>{item.strMeal}</h3>
            </div>

            )
        })
    }
           
    
    </>
  )
}

export default MealItem