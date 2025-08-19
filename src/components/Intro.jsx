import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import styles from '../assets/css/Intro.module.css';
import { useSelector } from "react-redux";

function Intro(){

    const {isDark} = useSelector(store => store.darkMode);

    return (
        <div className={styles.Intro}>
            <div className={styles.userImageContainer}>
                <img src="images/ashik.jpg" className={styles.userImage}/>
            </div>

            <div className={`${styles.userInfo} ${isDark && styles.whiteIntro}`}>
                <h3 className="fw-bold">Md. Ashikuzzaman</h3>
                <p className="text-muted my-1">Software Engineer</p>
                <div className={`${styles.socialIcons} mt-2`}>
                    <FaYoutube size={22} color={isDark && "#fff"}/>
                    <FaInstagram size={22} color={isDark && "#fff"}/>
                    <FaGithub size={22} color={isDark && "#fff"}/>
                </div>
            </div>
        </div>
    );
}

export default Intro;