import { useSelector } from "react-redux";
import styles from "../assets/css/Experiences.module.css";
import { useEffect, useState } from "react";

function Experiences(){
    const [basicConf, setBasicConf] = useState({})
            
    useEffect(() => {
        async function fetch_basic_configuration() {
            const response = await fetch("https://akibeshan.pythonanywhere.com/basic-configuration");
            const data = await response.json();

            setBasicConf(data.basic_conf);
        }

        fetch_basic_configuration()

    }, [])

    const {isDark} = useSelector(store => store.darkMode);

    return <div className={`${styles.experiences} ${isDark ? styles.whiteExperience : ""} mt-4`}>
        <div className={styles.experience}>
            <p>{basicConf.your_years_of_experience}</p>
            <p>Years of Experience</p>
        </div>

        <div className={styles.experience}>
            <p>{basicConf.your_number_of_satisfied_clients}</p>
            <p>Satisfied Clients</p>
        </div>

        <div className={styles.experience}>
            <p>{basicConf.your_number_of_completed_projects}</p>
            <p>Completed Projects</p>
        </div>

        <div className={styles.experience}>
            <p>{basicConf.your_number_of_research_papers}</p>
            <p>Research Papers</p>
        </div>
    </div>
}

export default Experiences;