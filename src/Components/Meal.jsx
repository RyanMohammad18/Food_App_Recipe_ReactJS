import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import MealItem from "./MealItem";
import ReciepeIndex from "./ReciepeIndex";

const Meal = () => {
    const [url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item,setItem]=useState();
    const [show,setShow]=useState(false);
    const [search,setSearch]=useState("");
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>{
                setItem(data.meals);
                setShow(true);
        })

    },[url])

    const setIndex=(alpha)=>{
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe=(evt)=>{
      if(evt.key=="Enter"){
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)

      }
    }

  return (
    <>
      <div className={style.main}>
        <div className="heading">
            <br />
          <h1>Search Food Receipe</h1>
          <br />
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis suscipit eius temporibus animi a quo cum atque repellat
            consectetur quos quibusdam, accusantium aliquam quia voluptate illo
            aspernatur? Corporis, repellendus! Doloremque?
          </h4>
        </div>
        <div className="searchBox">
          <input type="search" className={style.searchBox}  onChange={e=>setSearch(e.target.value)} onKeyPress={searchRecipe}/>
        </div>

        <div className={style.indexContainer}>
            <ReciepeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
        </div>

        <div className={style.container}>
          
          {
                show ? <MealItem data={item}/> : "Not Found"
          }
        </div>
        
      </div>
    </>
  );
};

export default Meal;
