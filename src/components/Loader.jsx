import UseAnimations from "react-useanimations";
import loading from 'react-useanimations/lib/loading';
import styles from "../assets/css/Loader.module.css";

function Loader({fontSize,fontColor}){
    return <div className={styles.loaderIcon}>
        <UseAnimations animation={loading} size={fontSize} strokeColor={fontColor} />
    </div>
}

export default Loader;