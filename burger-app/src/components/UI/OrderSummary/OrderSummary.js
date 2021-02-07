import { Fragment } from "react";
import Button from '../Button/Button';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey)=>{  return(
    <li key={igKey}>
        <span style={{textTransform:'capitalize'}}>{igKey}:{props.ingredients[igKey]}</span>
    </li>
    )
    })
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>Delicious Burger with below ingredients :</p>
            <ul>
                {ingredientSummary }
            </ul>
            <p>Total Price is :<strong>{props.totalPrice.toFixed(2)}</strong></p>
            <p>Do you want to continue?</p>
            <Button btnType='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue} >CONTINUE</Button>
        </Fragment>
    )

}

export default orderSummary;



