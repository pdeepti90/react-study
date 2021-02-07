import React, { Component,Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary';
const INGREDIIENT_PRICE ={
    salad:0.5,
    meat:0.8,
    bacon:0.3 ,
    cheese:0.9 
}

class BurgerBuilder extends Component {
state = {
    ingredients :{
        salad:0,
        meat:0,
        bacon:0,
        cheese:0
    },
    totalPrice:0.0,
    orderDisabled:true,
    purchasable:false
}
 addIngredientHandler = (type) =>{
   const oldCount = this.state.ingredients[type];
   const ingredientsReformed = {...this.state.ingredients};
   const newCount = oldCount+1;
    ingredientsReformed[type] = newCount;
 
let oldPrice = this.state.totalPrice;
let newPrice =  oldPrice+ INGREDIIENT_PRICE[type];

this.setState({
    ingredients:ingredientsReformed,totalPrice:newPrice
    });

   this.updateOrderStatus(ingredientsReformed);
}
 removeIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    if(oldCount<=0)
    return;
  const ingredientsReformed = {...this.state.ingredients};
   const newCount = oldCount-1;
    ingredientsReformed[type] = newCount;
    let oldPrice = this.state.totalPrice;
let newPrice =  oldPrice- INGREDIIENT_PRICE[type];
    this.setState({
        ingredients:ingredientsReformed,totalPrice:newPrice
        });
    
   this.updateOrderStatus(ingredientsReformed);
}
updateOrderStatus =(ingredientsReformed)=>{

  const sum=  Object.keys(ingredientsReformed).map((key)=>
    ingredientsReformed[key])
    .reduce((sum,el) =>{
return sum+el;
    },0);
   
this.setState({
orderDisabled: sum<=0
})
    
}

orderSummaryShowHandler = () =>{
    this.setState({
        purchasable: true
        })
}
modalCancelHandler =() =>{
    this.setState({
        purchasable: false
        })
}
purchanseCancelHandler =()=>{
this.setState({
    purchasable: false
})
}
purchanseContinueHandler = () =>{
alert("Lets's coninue");
}
 render(){
const disableInfo = {...this.state.ingredients};
for(let key in disableInfo){
    disableInfo[key] = disableInfo[key]<=0;
}
   return (
    <Fragment>
<Modal show={this.state.purchasable} modalHide={this.modalCancelHandler} >
    <OrderSummary ingredients={this.state.ingredients}
    purchaseCancel={this.purchanseCancelHandler}
    purchaseContinue={this.purchanseContinueHandler}
    totalPrice={this.state.totalPrice}></OrderSummary>
    </Modal>
    <Burger ingredients={this.state.ingredients}/>
    <BuildControls addIngredient ={this.addIngredientHandler} 
    removeIngredient = {this.removeIngredientHandler}
     totalPrice ={this.state.totalPrice}
    disabledState ={disableInfo} 
    orderDisabled ={this.state.orderDisabled}
    orderSummaryShow={this.orderSummaryShowHandler}>
    </BuildControls>
    </Fragment>
     ); 
    }
}
export default BurgerBuilder;