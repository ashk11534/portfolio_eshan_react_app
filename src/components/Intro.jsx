import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import styles from '../assets/css/Intro.module.css';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Intro(){

    const {isDark} = useSelector(store => store.darkMode);

    const [basicConf, setBasicConf] = useState({})
    
    useEffect(() => {
        async function fetch_basic_configuration() {
            const response = await fetch("http://127.0.0.1:8000/basic-configuration");
            const data = await response.json();

            setBasicConf(data.basic_conf);

            console.log(data.basic_conf)
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
                <div className={`${styles.socialIcons} mt-2`}>
                    <a href={basicConf.youtube_link} style={{textDecoration: "none", color: "#333"}}><FaYoutube size={22} color={isDark ? "#fff" : ""}/></a>
                    <a href={basicConf.instagram_link} style={{textDecoration: "none", color: "#333"}}><FaInstagram size={22} color={isDark ? "#fff" : ""}/></a>
                    <a href={basicConf.github_link} style={{textDecoration: "none", color: "#333"}}><FaGithub size={22} color={isDark ? "#fff" : ""}/></a>
                </div>
            </div>
        </div>
    );
}

export default Intro;