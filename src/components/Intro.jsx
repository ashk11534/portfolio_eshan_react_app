import styles from '../assets/css/Intro.module.css';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Intro(){

    const {isDark} = useSelector(store => store.darkMode);

    const [basicConf, setBasicConf] = useState({})
    
    useEffect(() => {
        async function fetch_basic_configuration() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/basic-configuration");
            const data = await response.json();

            setBasicConf(data.basic_conf);
        }

        fetch_basic_configuration()

    }, [])

    return (
        <div className={styles.intro}>
            <div className={styles.userImageContainer}>
                <img src={basicConf.your_photo} className={styles.userImage}/>
            </div>

            <div className={`${styles.userInfo} ${isDark ? styles.whiteIntro : ""}`}>
                <h3 className="fw-bold">{basicConf.your_name}</h3>
                <p className="text-muted my-1">{basicConf.your_designation}</p>
            </div>
        </div>
    );
}

export default Intro;