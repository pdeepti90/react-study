import React, {Component} from 'react';
import  './Test-module.css';



class Test extends Component{
    render(){

return( 
    <div className = "Test">
<p onClick={this.props.clicked} >Test name is : {this.props.name}</p>
<span>Correct Test name : </span><input type="text" value ={this.props.name} 
onChange={this.props.changed}
></input>
</div>
)
}
}

export default Test;