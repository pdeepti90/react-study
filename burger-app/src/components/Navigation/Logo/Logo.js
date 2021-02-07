import React from 'react';
import burgerLogo from '../../../assets/original.png';
import styles from '../Logo/Logo.module.css';
const logo=(props) =>{
    return (
    <div className={styles.Logo}>
    <img style={{height:props.height}}src={burgerLogo} alt='Your Burger App'></img>
    </div>
    )
}

export default logo;