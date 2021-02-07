
import styles from '../Toolbar/Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrwaerToggle';
const toolbar=(props) =>{
    return(
    <header className={styles.Toolbar}>
        <DrawerToggle clicked ={props.sideDrawerToggle}/>
        <Logo height="80%"/>
        <nav className={styles.DesktopOnly}>
<NavigationItems ></NavigationItems>
        </nav>
    </header>
    )
}

export default toolbar;