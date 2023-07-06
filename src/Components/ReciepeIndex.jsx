import React from 'react'
import style2 from "./style.module.css";

const ReciepeIndex = ({alphaIndex}) => {
    const alpha=["A","B","C","D","E","F","G","H","I","J","K","L"];
    var num=0;
  return (
    <>
    
    {
        alpha.map(item=>{
            return(
                <div className={style2.numBox} key={num++} onClick={()=>alphaIndex(item)}>
                    <h2>{item}</h2>
                </div>
            )
        })
    }
    
    
    
    </>
  )
}

export default ReciepeIndex