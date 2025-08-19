import { useSelector } from "react-redux";
import styles from "../assets/css/Experiences.module.css";

function Experiences(){

    const {isDark} = useSelector(store => store.darkMode);

    return <div className={`${styles.experiences} ${isDark && styles.whiteExperience} mt-4`}>
        <div className={styles.experience}>
            <p>2+</p>
            <p>Years of Experience</p>
        </div>

        <div className={styles.experience}>
            <p>2+</p>
            <p>Satisfied Clients</p>
        </div>

        <div className={styles.experience}>
            <p>30+</p>
            <p>Completed Projects</p>
        </div>
    </div>
}

export default Experiences;