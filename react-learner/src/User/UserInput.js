import React from 'react';

const Userinput = (props)=>{
return (
    <input type="text" onChange={props.change} value={props.userName}></input>
)
};

export default Userinput;