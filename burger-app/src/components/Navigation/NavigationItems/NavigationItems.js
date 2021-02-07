import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';
const navigationItems = ()=>{
    return (
    <ul className={styles.NavigationItems}>
    <NavigationItem link='/'>Burger Builder</NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
    
    </ul>)
    }
    export default navigationItems;