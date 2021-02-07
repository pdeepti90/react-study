import styles from '../NavigationItem/NavigationItem.module.css';
const navigationItem = (props)=>{
    return (<li className={styles.NavigationItem}><a href={props.link}>{props.children}</a></li>)
    }
    export default navigationItem;