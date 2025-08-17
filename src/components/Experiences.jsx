import styles from "../assets/css/Experiences.module.css";

function Experiences(){
    return <div className={`${styles.experiences} mt-4`}>
        <div className={styles.experience}>
            <p>2+</p>
            <p>Years of experience</p>
        </div>

        <div className={styles.experience}>
            <p>2+</p>
            <p>Years of experience</p>
        </div>

        <div className={styles.experience}>
            <p>30+</p>
            <p>Years of experience</p>
        </div>
    </div>
}

export default Experiences;