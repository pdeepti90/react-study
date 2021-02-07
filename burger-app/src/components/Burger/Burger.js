import React from 'react';
import BurgerIngredient from './BurgerIngredient';
import styles from  './Burger.module.css';
const burger = (props)=>{
    let ingredients = Object.keys(props.ingredients).map((inKey) => {
        return [...Array(props.ingredients[inKey])]
        .map((_,index)=>{
           return <BurgerIngredient key={inKey+index} type={inKey}></BurgerIngredient>
     })
       }).reduce((prevArr,currArr)=>{
           return prevArr.concat(currArr);
       },[]);
   if(ingredients.length===0){
    ingredients = <p>Please add minimum one ingredient</p>
   }    
return(
<div className={styles.Burger}>
<BurgerIngredient type='bread-top'></BurgerIngredient>
{ingredients}
<BurgerIngredient type='bread-bottom'></BurgerIngredient>
  </div>
)
}

export default burger;