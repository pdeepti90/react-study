import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const controls = [
    { label:'Salad',type:'salad' },
    { label:'Bacon',type:'bacon' },
    { label:'Cheese',type:'cheese' },
    { label:'Meat',type:'meat' }
]

const buildControls  = (props) => 
    (
       
        <div className={styles.BuildControls}>
             <p>Price:<strong>{props.totalPrice.toFixed(2)}</strong></p>
       { controls.map((control) =>
       (
           <BuildControl  label={control.label} 
           key = {control.type} 
           added = {()=>props.addIngredient(control.type)} 
           removed = {()=>props.removeIngredient(control.type)}
            totalPrice = {props.totalPrice}
            disabledState ={props.disabledState[control.type]}>
           </BuildControl>
        ) )
 }
 <button className={styles.OrderButton}disabled={props.orderDisabled}
  onClick={props.orderSummaryShow}>Order Now</button>
    </div>
    )
export default buildControls;