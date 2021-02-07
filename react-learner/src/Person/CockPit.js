import React, {Component} from 'react';


class CockPit extends Component{

render(){
   return <button onClick={this.props.clicked} className='CockPit'>Toggle</button>
}
}

export default CockPit;