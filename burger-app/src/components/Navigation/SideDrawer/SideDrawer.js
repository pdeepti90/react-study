import React, { Fragment } from 'react';
import styles from '../SideDrawer/SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
const sideDrawer=(props) =>{
let attachedClasses= [styles.SideDrawer,styles.Close];
if(props.show){
attachedClasses=[styles.SideDrawer,styles.Open];
}

    return (
        <Fragment>
       <Backdrop show={props.show} hide={props.modalHide}></Backdrop>
       
        <div className={attachedClasses.join(' ')}>
        <Logo height="11%"/>
        <nav>
        <NavigationItems></NavigationItems>
        </nav>
    </div>
        </Fragment>
    
    )
}

export default sideDrawer;