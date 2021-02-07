import {Fragment,Component} from 'react';
import style from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class  Layout extends Component{
    state ={
      show: false
    }

    sideDrawarCancelHandler =()=>{
this.setState({
    show:false
})
    }
    sideDrawarToggleHandler =()=>{
    
        this.setState({
            show:!this.state.show
        })
            }

    render(){
        return(
<Fragment>
<Toolbar sideDrawerToggle={this.sideDrawarToggleHandler}/>
<SideDrawer show={this.state.show} modalHide={this.sideDrawarCancelHandler}/>

<main className={style.contet}>
{this.props.children}
 </main>
</Fragment>
        )
}
}

export default Layout;