import '../App.css';
import React,{useState} from 'react';

const Person =(props) => {

    const [personState,setPersonState] = useState({
        name : props.name,
       // click: ()=> props.click
    
    })
    const onSwitchHandler1 = ( newName ) => {
        setPersonState({
            name : newName 
        })
    }
    

  return (
    <div className="App">
    <button onClick = {onSwitchHandler1.bind(this,'FUCK')}>Switch Person </button>
    <p  onClick= {props.click} >   {personState.name} /  {props.name} rocks!</p>
    
    </div>
  )
}
export default Person;
