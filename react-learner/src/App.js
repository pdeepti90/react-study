import React, {Component} from 'react';
import Person from './Person/Person';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import CockPit from './Person/CockPit';
import Tests from './Person/Tests';
class App extends Component { 

 /* state = {
    persons:[
      {name:'Deepti'},
      {name:'Litu'},
      {name:'Tutu'},
      {name:'Lucky'}
    ]
  }

onSwitchHandler = (newName) =>{
this.setState ({
  persons:[
    {name:newName},
    {name:'Litu'},
    {name:'Tutu'},
    {name:'Lucky'}
  ]
})
  }*/

  /*state = {
    userName : 'Deepti'
  }*/

 /* onSwitchHandler = (event) =>{
    this.setState ({
      userName:event.target.value
    })
  }*/

  state = {
    tests:[
      {id:1,name:'Maths'},
      {id:2,name:'English'},
      {id:3,name:'Physics'},
      {id:4,name:'Java'}
    ],
  showTests : false
  }


 deleteTests = (index)=>{
  const tests  = this.state.tests;

  tests.splice(index ,1);
  //tests.remove(index);
 this.setState({
  tests: tests
})
}
nameChangeHandler = (event,id)=>{
  let index = this.state.tests.findIndex(
    p =>  id===p.id);
  let tests  = [...this.state.tests];
 tests[index].name=event.target.value;
  this.setState({
    tests: tests
  })
}

toggleTestsHandler = ()=>{
   //let tests= null;
  const showTest =  this.state.showTests;

   this.setState({
    showTests :!showTest 
   });

   
 }

render(){
  let tests = [];
  console.log(this.state.showTests);
  if(this.state.showTests){
    tests= <div>
       <Tests tests={this.state.tests} 
    changed ={this.nameChangeHandler}
    clicked= {this.deleteTests} ></Tests> 
    </div>
  }
return(
  <div>
    {/*<Person name={this.state.persons[0].name} 
    click = {this.onSwitchHandler.bind(this,'Deepul')}> </Person>
  <UserInput change={this.onSwitchHandler} userName={this.state.userName}></UserInput>
  <UserOutput userName={this.state.userName}></UserOutput>*/}
  
   <CockPit clicked={this.toggleTestsHandler}></CockPit>
   { tests }

  </div>
  );
}
}

//<button onClick = {this.onSwitchHandler}>Switch Name</button>

export default App;
