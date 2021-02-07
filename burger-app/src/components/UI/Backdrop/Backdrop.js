import styles from './Backdrop.module.css';
const backdrop = (props) => {
    return (
        props.show? <div className={styles.Backdrop} onClick={props.hide}/>:null
            
    )

}

export default backdrop;



