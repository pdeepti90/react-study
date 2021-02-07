import { Component, Fragment } from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component {

    shouldComponentUpdate = (nextProps,nextState) =>{
if(nextProps.show!==this.props.show){
    return true;
}
    }
    render(){return (
        <Fragment>
            <Backdrop show={this.props.show} hide={this.props.modalHide}></Backdrop>
        <div className={styles.Modal} 
        style={{transform:this.props.show?'translateY(0)':'translateY(-100vh)'
        ,opacity:this.props.show?'1':'0'}}
        >
           {this.props.children}
        </div>
        
        
        </Fragment>
    )
    }

}

export default Modal;



