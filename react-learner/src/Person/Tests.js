import React, {Component} from 'react';
import Test from './Test';


class Tests extends Component{

render(){
   
        return  (
            this.props.tests.map((test,index) =>{
           return <Test clicked = {() =>this.props.clicked(index)} 
         key={test.id}
         name = {test.name}
         changed = {(event)=>this.props.changed(event,test.id)}></Test>
        })
        )

}
}

export default Tests;